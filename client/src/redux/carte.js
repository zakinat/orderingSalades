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
            let alreadythere=false
            let carteList=state.carteList.map(item=>{
                if (item.id === action.payload.id){
                    item.qty= item.qty + action.payload.qty
                    alreadythere=true
                    return item
                }
                return item
            })
            if(!alreadythere) carteList=state.carteList.concat(action.payload)
            return{...state, isLoading:false, errMess:null,carteList }
        case ActionTypes.UPT_IN_CARTE:
             carteList=state.carteList.map(item=>{
                if (item.id === action.payload.id){
                    item.qty= item.qty + action.payload.qty
                    return item
                }
                return item
            })
            return{...state, isLoading:false, errMess:null,carteList }
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

// update order in carte
export const updtOrderCarte=(order)=> (dispatch)=>{
        dispatch(updt_order_in_carte(order))
}

//helpers
const updt_order_in_carte=(data)=>({
    type:ActionTypes.UPT_IN_CARTE,
    payload:data
    })


