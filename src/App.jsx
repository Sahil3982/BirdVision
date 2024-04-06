/* eslint-disable no-unused-vars */
// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetailsPage from "./Components/ProductDetailsPage";
import ProductsListingPage from "./Components/ProductsListingPage";
import React from "react";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductsListingPage />} />
        <Route path="/products/:productId" component={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
