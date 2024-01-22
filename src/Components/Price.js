import React from 'react';
import Product from '../Product';


const Price = () => {
    const { Price } = Product
    return (
        <div>
            <h3> {Price}</h3>
        </div>
    )
}

export default Price
