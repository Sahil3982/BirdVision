/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-gray-800 py-4 px-8 flex justify-between items-center text-white">
      <div className="text-2xl font-semibold">
        <Link to="home">E-com</Link>
      </div>
      <button className="text-base font-medium hover:text-gray-300">
        Menu
      </button>
    </header>
  );
};

export default Header;
