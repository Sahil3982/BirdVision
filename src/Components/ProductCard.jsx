/* eslint-disable no-unused-vars */
import React from "react";

const ProductCard = (product) => {
  return (
    
      <div className="p-2 m-3 bg-white rounded-lg shadow-md">
        <img
          src={product.img}
          alt={product.title}
          className="w-96 h-24 object-cover rounded-t-lg"
        />
        <div className="p-2">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-blue-600">Price: ${product.price}</p>
        </div>
      </div>
  );
};

export default ProductCard;
