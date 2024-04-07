/* eslint-disable no-unused-vars */
// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import React from "react";
import Header from "./Components/Header";
import ProductCardDetails from "./Components/ProductCardDetails";
import ProductCard from "./Components/ProductCard";
function App() {
  return (
    <Router>
    <Header />
    <ProductDetails />
      <Routes>
        <Route exact path="/home" element={<ProductCard />} />
        <Route path="/product/:productId" component={< ProductCardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
