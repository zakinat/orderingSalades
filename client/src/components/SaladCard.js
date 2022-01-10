import React,{useState} from 'react'
import mainSalad from '../images/mainSalad.jpg'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
//importing redux
import { useDispatch } from 'react-redux'
import {sendOrderToCarte} from '../redux/carte'

const SaladCard = ({salad}) => {
    const dispatch = useDispatch()

    const [amount, setAmount] = useState(0)
    const decreasAmount=()=>{
        if (amount>0) setAmount(+amount-1)
    }

    const increasAmount=()=>{
         setAmount(+amount+1)
    }

    const handleSubmit =  (e) => {
        e.preventDefault()
        if (amount !== 0){
            const data={id:salad._id, qty:amount, name: salad.title}
            dispatch(sendOrderToCarte(data))
        }
        
      }


    return (
        <div className='saladCard card'>
            <div className='saladCard__img'>
                <img src={mainSalad} alt={salad.title}/>
            </div>

            <div className='saladCard__info'>
                <h2>{salad.title}</h2>
                <p>price:<span>{salad.price}</span>$</p>
                <p>price after disccount:<span>{salad.discount_price}</span>$</p>  
            </div>

            
                <form className='saladCard__control' onSubmit={handleSubmit}>
                    <div className='saladCard__control-amount'>
                        <AiOutlineMinus className='icon_hover' color="	#3CB371" size={25} onClick={decreasAmount}/>
                        <input type='text' placeholder='0' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                        <AiOutlinePlus className='icon_hover' color="#3CB371" size={25} onClick={increasAmount}/>
                    </div>
                    <button type="submit">Add To carte</button>
                </form>
                
        </div>
    )
}

export default SaladCard
