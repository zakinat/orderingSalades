/* eslint-disable no-fallthrough */
import * as ActionTypes from './ActionTypes'
import * as api from '../api'


//reducer
export const MoleculesList = (state = {
    isLoading:true,
    errMess:null,
    MoleculesList:[]
}, action) => {
    switch (action.type) {
        case ActionTypes.MOLECULES_FETCHED:
            return{...state, isLoading:false, errMess:null, MoleculesList:action.payload}
        case ActionTypes.MOLECULES_LOADING:
            return{...state, isLoading:true, errMess:null, MoleculesList:[]}
        case ActionTypes.MOLECULES_FAILD:
            return{...state, isLoading:false, errMess:action.payload, MoleculesList:[]}
        default:
          return state;
      }
}


//ActionCreaters

// getting salads from server
export const getMoleculesList=()=> async (dispatch)=>{
    try {
        const {data} =await api.fetchMoleculesList()
        dispatch(Molecules_fetched(data.result))
    } catch(e){

        dispatch(Molecules_failed(e.message))
    }
    
}
//helpers
const Molecules_fetched=(data)=>({
    type:ActionTypes.MOLECULES_FETCHED,
    payload:data
    })
const Molecules_failed=(err)=>({
    type:ActionTypes.MOLECULES_FAILD,
    payload:err
    })




