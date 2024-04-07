/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
const ProductCardDetails = (e) => {
  const id = useParams();
  console.log(id);

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={e.thumbnail} alt={e.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{e.title}</div>
        <p className="text-gray-700 text-base">
          <strong>Brand:</strong> {e.brand}
          {id.id}
          <br />
          <strong>Category:</strong> {id.category}
          <br />
          <strong>Description:</strong> {e.description}
          <br />
          <strong>Price:</strong> ${e.price}
          <strong>Discount:</strong> ${e.discount}
        </p>
      </div>
    </div>
  );
};

export default ProductCardDetails;
