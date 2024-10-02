import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import cartEmpty from "../assets/cartEmpty.jpg"
import ProductCard from '../components/ProductCard';
import { useLoaderData } from 'react-router-dom';
const Cart = () => {
  const { cart, totalPrice, addToCart, updateCart, deleteCartItem } = useContext(CartContext);
  const data = useLoaderData();
  const [currencyName,setCurrencyName] = useState("USD")

  if (cart.length == 0) {
    return <div className="w-full h-screen flex justify-center items-center">
      <img src={cartEmpty} alt='Cart Is Empty' className="w-full h-full object-contain" />
    </div>
  }

  return (
    <div className="mx-auto px-4 pt-16">
      <h1 className="text-3xl font-bold text-center">Featured Product List</h1>
      <div>
        <span>Toatal : {currencyName} {totalPrice}</span>
      </div>
      <div className="flex flex-wrap">
        {cart && cart.length > 0 && cart.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Cart