/* eslint-disable no-fallthrough */
import * as ActionTypes from './ActionTypes'
import * as api from '../api'


//reducer
export const MoleculesList = (state = {
    isLoading:true,
    errMess:null,
    MoleculesList:[],
    MoleculOrder:[],
}, action) => {
    switch (action.type) {
        case ActionTypes.MOLECULES_FETCHED:
            return{...state, isLoading:false, errMess:null, MoleculesList:action.payload}
        case ActionTypes.MOLECULES_LOADING:
            return{...state, isLoading:true, errMess:null, MoleculesList:[]}
        case ActionTypes.MOLECULES_FAILD:
            return{...state, isLoading:false, errMess:action.payload, MoleculesList:[]}
        case ActionTypes.MOLECULE_ADDED:
            let alreadythere=false
            let MoleculOrder=state.MoleculOrder.map(item=>{
                if (item.id === action.payload.id){
                    item.qty= item.qty + action.payload.qty
                    alreadythere=true
                    return item
                }
                return item
            })
            if(!alreadythere) MoleculOrder=state.MoleculOrder.concat(action.payload)
            return{...state, isLoading:false, errMess:null, MoleculOrder}
        default:
          return state;
      }
}


//ActionCreaters

// getting molecules from server
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


// adding molecule to order 
export const addMolecule=(molecul)=>  (dispatch)=>{
    try {
        dispatch(Molecules_added(molecul))
    } catch(e){

        dispatch(Molecules_failed(e.message))
    }
    
}
//helpers
const Molecules_added=(data)=>({
    type:ActionTypes.MOLECULE_ADDED,
    payload:data
    })





