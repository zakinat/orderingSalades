import React,{useState} from 'react'
import res from './dummydata'
import {SaladCard} from '../components'

const SaladsList = () => {
    const [saldasList, setSaldasList] = useState(res.resualt)

    return (
        <div className='saladList' id='oursalad'>
            {saldasList.map((salad)=> <SaladCard salad={salad} key={salad._id}/>)}
        </div>
    )
}

export default SaladsList
