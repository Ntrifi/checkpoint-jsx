import React from 'react';
import Product from '../Product';

const Image = () => {
    const { URL } = Product
    return (
        <div>
            <img style={{ width: '100%' }} src={URL} alt="Camera" />
        </div>
    )
}

export default Image