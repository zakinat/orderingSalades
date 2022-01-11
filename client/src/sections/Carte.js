import React from 'react'
import {useSelector} from 'react-redux' 
import { CarteItem } from '../components'
const Carte = () => {
    const carteList = useSelector(state => state.carteList.carteList)

    return (
        <div className='carte'>
            {carteList.map(item=> <CarteItem item={item} key={item.id}/> )}
            <div className='carte__control'>
                <button type='button' className='carte__control-clear'>clear</button>
                <button type='button' className='carte__control-order'>Order</button>
            </div>
        
        </div>
    )
}

export default Carte
