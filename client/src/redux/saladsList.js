/* eslint-disable no-fallthrough */
import * as ActionTypes from './ActionTypes'
import * as api from '../api'


//reducer
export const saladsList = (state = {
    isLoading:true,
    errMess:null,
    saladsList:[]
}, action) => {
    switch (action.type) {
        case ActionTypes.SALADS_FETCHED:
            return{...state, isLoading:false, errMess:null, saladsList:action.payload}
        case ActionTypes.SALADS_LOADING:
            return{...state, isLoading:true, errMess:null, saladsList:[]}
        case ActionTypes.SALADS_FAILD:
            return{...state, isLoading:false, errMess:action.payload, saladsList:[]}
        default:
          return state;
      }
}


//ActionCreaters

// getting stories from server
export const getSaladsList=()=> async (dispatch)=>{
    try {
        const {data} =await api.fetchSaladsList()
        dispatch(Salads_fetched(data.result))
    } catch(e){

        dispatch(Salads_failed(e.message))
    }
    
}
//helpers
const Salads_fetched=(data)=>({
    type:ActionTypes.SALADS_FETCHED,
    payload:data
    })
const Salads_failed=(err)=>({
    type:ActionTypes.SALADS_FAILD,
    payload:err
    })


