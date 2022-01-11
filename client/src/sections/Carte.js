import React from 'react'
import {useSelector} from 'react-redux' 
import { CarteItem } from '../components'

//importing redux
import {useDispatch} from 'react-redux'
import {sendOrder} from '../redux/carte'

const Carte = () => {
    const carteList = useSelector(state => state.carteList.carteList)
    const orderStatus= useSelector(state => state.carteList.orderStatus)
    
    const dispatch=useDispatch();
    const sendorder=(data)=>dispatch(sendOrder(data))

    const handleSubmit = async (e) => {
        e.preventDefault()
        let salads=[]
        let molecules=[]
        carteList.forEach(item=>{
            if(item.id === 'special order'){
                molecules=item.molecules 
            }else{
               const obj= {id: item.id, qty: item.qty}
               salads.push(obj) 
            }
        })
        molecules.forEach(item=> delete item.name)
        const data={salads,molecules}
        if(salads.length===0) delete data.salads
        if(molecules.length===0) delete data.molecules
        sendorder(JSON.stringify(data))
      }

    return (
        <div className='carte'>
            {carteList.map(item=> <CarteItem item={item} key={item.id}/> )}
            <form className='carte__control' onSubmit={handleSubmit}>
               {!orderStatus && <button type='submit' className='carte__control-order'>Order</button>}
            </form>
            {orderStatus && <h1>order success</h1>}
        </div>
    )
}

export default Carte
