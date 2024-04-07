/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (product ) => {
  return (
   <Link to='/product' >
     <div className="p-2 m-3 bg-white rounded-lg shadow-md">
      <img src={product.img} alt={product.title} className="w-96 h-24 object-cover rounded-t-lg" />
      <div className="p-2">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-blue-600">Price: ${product.price}</p>
      </div>
    </div>
   </Link>
  );
};

export default ProductCard;
