import React,{useEffect} from 'react'
import {SaladCard} from '../components'

//importing redux
import {useSelector} from 'react-redux' 

const SaladsList = () => {
    
    const saladasList = useSelector(state => state.saladsList.saladsList)

    return (
        <div className='saladList' id='oursalad'>
            {saladasList.map((salad)=> <SaladCard salad={salad} key={salad._id}/>)}
        </div>
    )
}

export default SaladsList
