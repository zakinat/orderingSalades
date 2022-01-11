import React,{useEffect} from 'react'
import {Navbar, SaladsList, MakeUrSalad} from '../sections'
//redux
import {useDispatch} from 'react-redux'
import {getMoleculesList} from '../redux/molecules'
import {getSaladsList} from '../redux/saladsList'

const LandingPage = () => {


    const dispatch=useDispatch()
    const getMolecules=()=>dispatch(getMoleculesList())
    const getSalads=()=>dispatch(getSaladsList())

    useEffect(()=>{
            getMolecules()
            getSalads()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])



    return (
        <div>
            <Navbar/>
            <SaladsList/>
            <MakeUrSalad/>
        </div>
    )
}

export default LandingPage
