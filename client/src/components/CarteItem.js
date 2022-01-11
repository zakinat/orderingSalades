import React,{useState} from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import {updtOrderCarte} from '../redux/carte'
import { useDispatch } from 'react-redux'


const CarteItem = ({item}) => {

    const dispatch = useDispatch()


    const [amount, setAmount] = useState(item.qty)

    const decreasAmount=()=>{
        if (amount>0) {
            setAmount(+amount-1)
            const data={id:item.id, qty:-1, name: item.name}
            dispatch(updtOrderCarte(data))
        }
    }

    const increasAmount=()=>{
         setAmount(+amount+1)
         const data={id:item.id, qty:1, name: item.name}
            dispatch(updtOrderCarte(data))
    }


    return (
        <div className='carteItem'>
            <h2>{item.name}</h2>
            <div className='saladCard__control-amount'>
                        <AiOutlineMinus className='icon_hover' color="	#3CB371" size={25} onClick={decreasAmount}/>
                        <input type='text' placeholder='0' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                        <AiOutlinePlus className='icon_hover' color="#3CB371" size={25} onClick={increasAmount}/>
            </div>
        </div>
    )
}

export default CarteItem