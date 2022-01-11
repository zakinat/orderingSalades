import {BiAtom} from 'react-icons/bi' 
import {DiAtom} from 'react-icons/di'
import {GiAtomCore, GiAtom, GiAtomicSlashes} from 'react-icons/gi'

const colors=getRandomArrColor()

const iconsArr=[
    <BiAtom color={getRandColor()} size={27}/>,
    <DiAtom color={getRandColor()} size={27}/>,
    <GiAtom color={getRandColor()} size={27}/>,
    <GiAtomCore color={getRandColor()} size={27}/>,
    <GiAtomicSlashes color={getRandColor()} size={27}/>,
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