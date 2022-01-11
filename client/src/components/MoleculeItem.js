import React,{useState} from 'react'
import {getRandomIcon} from '../utils/atomIconsArr'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
//importing redux
import { useDispatch } from 'react-redux'
import {addMolecule} from '../redux/molecules'


const MoleculeItem = ({molecule}) => {
    const dispatch = useDispatch()
    
    const [amount, setAmount] = useState(0)


    const decreasAmount=()=>{
        if (amount>0) {
            setAmount(+amount-1)
            const data={id:molecule._id, qty:-1, name: molecule.title}
            dispatch(addMolecule(data))
            
        }
    }

    const increasAmount=()=>{
        if(amount < molecule.qty) {
            setAmount(+amount+1)
            const data={id:molecule._id, qty:1, name: molecule.title}
            dispatch(addMolecule(data))
        }
    }


    return (
        <div className='moleculeItem'>
        
            <div className='moleculeItem__info'>
                <span className='moleculeItem__info-icon'>{getRandomIcon()}</span>
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
