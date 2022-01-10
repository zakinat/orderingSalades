import React from 'react'
import mainSalad from '../images/mainSalad.jpg'
const SaladCard = ({salad}) => {
    return (
        <div className='saladCard card'>
            <div className='saladCard__img'>
                <img src={mainSalad} alt={salad.title}/>
            </div>

            <div className='saladCard__info'>
                <h2>{salad.title}</h2>
                <span>{salad.price}</span>
                <span>{salad.discount_price}</span>  
            </div>

            <div className='saladCard__control'>

            </div>
                
        </div>
    )
}

export default SaladCard
