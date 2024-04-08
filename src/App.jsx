/* eslint-disable no-unused-vars */
// App.js
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  Link,
} from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import React from "react";
import Header from "./Components/Header";
import ProductCardDetails from "./Components/ProductCardDetails";

function App() {
  const title = useParams();
  console.log(title);
  return (
    <Router>
      <Header />
      <ProductDetails />

      <Routes>
        <Route path="/product/:id" element={<ProductCardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
