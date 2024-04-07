// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductDetails = () => {
  const [productdata, setProductdata] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductdata(data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {productdata.map((data) => (
          <ProductCard
            key={data.id}
            title={data.title}
            img={data.thumbnail}
            price={data.price}
          />
        ))}
      </div>
    </>
  );
};

export default ProductDetails;
