import React,{useState} from 'react'
import res from './dummydata'
import {SaladCard} from '../components'

const SaladsList = () => {

    const [saldasList, setSaldasList] = useState(res)

    return (
        <div>
        {saldasList.map((salad)=>{
            return(
                <SaladCard salad={salad} key={salad._id}/>
            )
        })}
            
        </div>
    )
}

export default SaladsList
