import React from 'react'
import {MoleculeItem} from '../components'
//importing redux
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux' 
import {sendOrderToCarte} from '../redux/carte'

const MakeUrSalad = () => {

    const dispatch=useDispatch();
    
    const moleculesList = useSelector(state => state.MoleculesList.MoleculesList)
    const MoleculOrder = useSelector(state => state.MoleculesList.MoleculOrder)

    const handleSubmit=(e)=>{
        e.preventDefault()
        if (MoleculOrder.length>0){
            const data ={name:'special order',id:'special order' , qty:1, molecules: MoleculOrder }
            dispatch(sendOrderToCarte(data))
        }
    }
    
    return (
        <div className='makeSalad' id='makeSalad'>
            <div className='makeSalad__content'>
                <h2>Make your own salad from our atoms</h2>
                {moleculesList.map((molecule)=> <MoleculeItem molecule={molecule} key={molecule._id}/>)}
                <form className='makeSalad__content-control' onSubmit={handleSubmit}>
                    <button type='submit' className='makeSalad__content-control-order'>Add to carte</button>
                </form>
            </div>
                
        </div>
    )
}

export default MakeUrSalad
