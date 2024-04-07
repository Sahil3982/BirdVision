/* eslint-disable no-unused-vars */
// App.js
import { BrowserRouter as Router, Route, Routes,useParams } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import React from "react";
import Header from "./Components/Header";
import ProductCardDetails from "./Components/ProductCardDetails";
import ProductCard from "./Components/ProductCard";

function App(e) {
  const id = useParams();
console.log(id);
console.log(e);
  return (
    <Router>
    <Header />
    <ProductDetails />
      <Routes>
        {/* <Route exact path="/" element={<ProductCard />} /> */}
        <Route path={e.id} element={< ProductCardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
