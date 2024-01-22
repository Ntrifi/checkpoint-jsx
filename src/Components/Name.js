import React from 'react';
import Product from '../Product'

const name = () => {
  const { Name } = Product
  return (
    <div>
      <h1>{Name}</h1>
    </div>
  )
}

export default name
