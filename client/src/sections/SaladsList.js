import React,{useEffect} from 'react'
import {SaladCard} from '../components'

//importing redux
import {useDispatch} from 'react-redux'
import {getSaladsList} from '../redux/saladsList'
import {useSelector} from 'react-redux' 
const SaladsList = () => {

    const dispatch=useDispatch();
    const getSalads=()=>dispatch(getSaladsList())
    
    useEffect(()=>{
        getSalads()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const saladasList = useSelector(state => state.saladsList.saladsList)

    return (
        <div className='saladList' id='oursalad'>
            {saladasList.map((salad)=> <SaladCard salad={salad} key={salad._id}/>)}
        </div>
    )
}

export default SaladsList
