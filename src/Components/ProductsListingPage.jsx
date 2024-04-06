/* eslint-disable no-unused-vars */
// ProductsListingPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductsListingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          throw new Error('Received unexpected data format');
        }
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Products Listing Page</h1>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p>Price: {product.price}</p>
          <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductsListingPage;
