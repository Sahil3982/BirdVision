/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductCardDetails = (e) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details Page</h1>
      <img src={product.images[0]} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      {product.discountPercentage && <p>Discount Percentage: {product.discountPercentage}</p>}
      <p>Rating: {product.rating}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default ProductCardDetails;
