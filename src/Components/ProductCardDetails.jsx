/* eslint-disable no-unused-vars */
import React from 'react'

const ProductCardDetails = (e) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
    <img className="w-full" src={e.thumbnail} alt={e.title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{e.title}</div>
      <p className="text-gray-700 text-base">
        <strong>Brand:</strong> {e.brand}
        <br />
        <strong>Category:</strong> {e.category}
        <br />
        <strong>Description:</strong> {e.description}
        <br />
        <strong>Price:</strong> ${e.price}
        <strong>Discount:</strong> ${e.discount}
      </p>
    </div>
  </div>
  )
}

export default ProductCardDetails