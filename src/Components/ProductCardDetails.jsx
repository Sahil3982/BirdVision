/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductCardDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
      <img src={product.images[0]} alt={product.title} className="mb-4 rounded-lg" />
      <p className="text-gray-700 mb-2">Description: {product.description}</p>
      <p className="text-gray-700 mb-2">Price: ${product.price}</p>
      {product.discountPercentage && <p className="text-gray-700 mb-2">Discount Percentage: {product.discountPercentage}%</p>}
      <p className="text-gray-700 mb-2">Rating: {product.rating}</p>
      <p className="text-gray-700 mb-2">Brand: {product.brand}</p>
      <p className="text-gray-700 mb-2">Category: {product.category}</p>
    </div>
  );
};

export default ProductCardDetails;
