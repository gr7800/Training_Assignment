import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white font-bold">
      <nav className="flex px-10 py-4 justify-between">
        <h1 className="text-center">
          <Link to="/">Ecommerce</Link>
        </h1>
        <ul className="flex gap-3">
          <Link to="/products">Products</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/cart">Cart</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
