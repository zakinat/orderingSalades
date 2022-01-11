import {BiAtom} from 'react-icons/bi' 
import {DiAtom} from 'react-icons/di'
import {GiAtomCore, GiAtom, GiAtomicSlashes} from 'react-icons/gi'

const colors=getRandomArrColor()
const size=35

const iconsArr=[
    <BiAtom color={getRandColor()} size={size}/>,
    <DiAtom color={getRandColor()} size={size}/>,
    <GiAtom color={getRandColor()} size={size}/>,
    <GiAtomCore color={getRandColor()} size={size}/>,
    <GiAtomicSlashes color={getRandColor()} size={size}/>,
]

export const getRandomIcon=()=>{
 return iconsArr[ Math.floor(Math.random()*iconsArr.length)]
}



function getRandColor(){
    const index= Math.floor(Math.random()*colors.length)
    return colors[index]
}

function getRandomArrColor(n=500){
    return [...Array(n)].map(_=>'#'+Math.floor(Math.random()*16777215).toString(16))

}