import React from 'react'

const SaladCard = ({salad}) => {
    return (
        <div>
            <h2>{salad.title}</h2>
            <span>{salad.price}</span>
            <span>{salad.discount_price}</span>

            
        </div>
    )
}

export default SaladCard
