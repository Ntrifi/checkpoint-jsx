import React from 'react';
import Product from '../Product';


const Description = () => {
    const { Description } = Product
    return (
        <div>
            <p>{Description}</p>
        </div>
    )
}

export default Description
