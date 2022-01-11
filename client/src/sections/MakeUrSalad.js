import React,{useEffect} from 'react'
//importing redux
import {useDispatch} from 'react-redux'
import {getMoleculesList} from '../redux/molecules'
import {useSelector} from 'react-redux' 
import {MoleculeItem} from '../components'

const MakeUrSalad = () => {

    const dispatch=useDispatch();
    const getMolecules=()=>dispatch(getMoleculesList())
    
    useEffect(()=>{
        getMolecules()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const moleculesList = useSelector(state => state.MoleculesList.MoleculesList)
    
    return (
        <div className='makeSalad'>
            <div>
                <h2>Make your own salad from our atoms</h2>
            </div>
             {moleculesList.map((molecule)=> <MoleculeItem molecule={molecule} key={molecule._id}/>)}
             <div className='makeSalad__control'>
                <button type='button' className='makeSalad__control-clear'>clear</button>
                <button type='button' className='makeSalad__control-order'>Add to carte</button>
             </div>
        </div>
    )
}

export default MakeUrSalad
