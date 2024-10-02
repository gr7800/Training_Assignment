import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <header className="bg-gray-900 fixed z-10 w-full text-white font-bold flex justify-between items-center px-8 py-4 ">
      <h1 className="text-center">
        <Link to="/">Ecommerce</Link>
      </h1>
      <ul className="flex gap-3">
        <Link to="/products">Products</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/cart">{`Cart(${cart.length})`}</Link>
      </ul>
    </header>
  );
};

export default Header;
