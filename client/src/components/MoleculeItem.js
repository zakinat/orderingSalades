import React,{useState} from 'react'
import {getRandomIcon} from '../utils/atomIconsArr'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'


const MoleculeItem = ({molecule}) => {


    const [amount, setAmount] = useState(0)
    const decreasAmount=()=>{
        if (amount>0) setAmount(+amount-1)
    }

    const increasAmount=()=>{
        if(amount < molecule.qty) setAmount(+amount+1)
    }


    return (
        <div className='moleculeItem'>
        
            <div className='moleculeItem__info'>
                <span>{getRandomIcon()}</span>
                <div>
                    <h3>{molecule.title}</h3>
                    <p>price:<span>{molecule.price}</span>$</p>
                    <p>price after disccount:<span>{molecule.discount_price}</span>$</p> 
                </div>
            </div>
            <div className='moleculeItem__control'>
                <AiOutlineMinus className='icon_hover' color="	#3CB371" size={25} onClick={decreasAmount}/>
                <div className='moleculeItem__control-input'>
                    <input type='text' placeholder='0' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                    <p>/<span>{molecule.qty}</span></p>
                </div>

                <AiOutlinePlus className='icon_hover' color="#3CB371" size={25} onClick={increasAmount}/>
            </div>
            
        </div>
    )
}

export default MoleculeItem
