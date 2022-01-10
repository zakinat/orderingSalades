/* eslint-disable no-fallthrough */
import * as ActionTypes from './ActionTypes'
import * as api from '../api'


//reducer
export const carteList = (state = {
    isLoading:true,
    errMess:null,
    carteList:[]
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CARTE:
            return{...state, isLoading:false, errMess:null, carteList:state.carteList.concat(action.payload)}
        default:
          return state;
      }
}


//ActionCreaters




// send order to carte
export const sendOrderToCarte=(order)=> (dispatch)=>{
        dispatch(send_order_to_carte(order))
}

//helpers
const send_order_to_carte=(data)=>({
    type:ActionTypes.ADD_TO_CARTE,
    payload:data
    })


