import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "./Rating";

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
    <div className="max-w-4xl mx-auto mt-8 p-8 bg-bige shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
      <div className="flex mb-4">
        {product.images.slice(1, 3).map((image, index) => (
          <img key={index} src={image} alt={product.title} className="w-1/3 h-auto rounded-lg mr-4" />
        ))}
      </div>
      <p className="text-gray-700 mb-2">Description: {product.description}</p>
      <p className="text-gray-700 mb-2">Price: ${product.price}</p>
      {product.discountPercentage && <p className="text-gray-700 mb-2">Discount Percentage: {product.discountPercentage}%</p>}
      <p className="text-gray-700 mb-2">Brand: {product.brand}</p>
      <p className="text-gray-700 mb-2">Category: {product.category}</p>
      <Rating/>
    </div>
  );
};

export default ProductCardDetails;
