/* eslint-disable no-fallthrough */
import * as ActionTypes from './ActionTypes'
import * as api from '../api'


//reducer
export const carteList = (state = {
    isLoading:true,
    errMess:null,
    carteList:[],
    orderStatus:false,
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CARTE:
            let alreadythere=false
            let carteList=state.carteList.map(item=>{
                if(item.name === action.payload.name) {
                    alreadythere=true
                    return item
                }
                if (item.id === action.payload.id){
                    item.qty= item.qty + action.payload.qty
                    alreadythere=true
                    return item
                }
                return item
            })
            if(!alreadythere) carteList=state.carteList.concat(action.payload)
            return{...state, isLoading:false, errMess:null,carteList, orderStatus:false }
        case ActionTypes.UPT_IN_CARTE:
             carteList=state.carteList.map(item=>{
                if (item.id === action.payload.id){
                    item.qty= item.qty + action.payload.qty
                    return item
                }
                return item
            })
            return{...state, isLoading:false, errMess:null,carteList, orderStatus:false}
        case ActionTypes.ORDER_SUCCESS:
            if(action.payload.success){
                return{...state, isLoading:false, errMess:null,carteList:[],orderStatus:true }
            }else{
                return{...state, isLoading:false, errMess:null,carteList,orderStatus:false }
            }
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




//send order
export const sendOrder=(order)=> async (dispatch)=>{
    try {
        const {data}= await api.postOrder(order)
        dispatch(send_order(data))
    } catch (err) {
        dispatch(order_Failed(err))
    }
    }
    
     const send_order=(data)=>({
            type:ActionTypes.ORDER_SUCCESS,
            payload:data
            })
        
     const order_Failed=(err)=>({
            type:ActionTypes.ORDER_FAILED,
            payload:err
            })


