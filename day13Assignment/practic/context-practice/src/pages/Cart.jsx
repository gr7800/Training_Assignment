import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import cartEmpty from "../assets/cartEmpty.jpg";
import ProductCard from "../components/ProductCard";
import { useLoaderData, useNavigate } from "react-router-dom";
import { OptionOfCarrencyExchange } from "../utils/constant";
const Cart = ({ errorOnCurrencyChange }) => {
  const { cart, totalPrice } = useContext(CartContext);
  const data = useLoaderData();
  const [total, setTotal] = useState(totalPrice);
  const [currencyName, setCurrencyName] = useState("USD");
  const navigate = useNavigate();

  const handleCurrencyChange = (e) => {
    e.preventDefault();
    let value = e.target.value;

    value != "USD"
      ? navigate(`/cart?base=${currencyName}&to=${value}&amount=${total}`)
      : navigate("/cart");
  };

  useEffect(() => {
    if (data && data?.converted) {
      setTotal(Math.floor(data.converted));
      setCurrencyName(data?.to);
    } else {
      setTotal(Math.floor(totalPrice));
      setCurrencyName("USD");
    }
  }, [totalPrice, data]);

  if (cart.length == 0) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <img
          src={cartEmpty}
          alt="Cart Is Empty!"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 pt-16">
      <h1 className="text-3xl font-bold text-center">Featured Product List</h1>
      <div className="flex px-4 py-2 my-4 bg-gray-900 text-white gap-4 items-center font-bold">
        <span>
          Total : {total} {currencyName}
        </span>
        {!errorOnCurrencyChange && (
          <span>
            <select
              name="currencyChange"
              value={currencyName}
              id="currencyChange"
              onChange={handleCurrencyChange}
              className="text-black py-2 px-4"
            >
              {OptionOfCarrencyExchange.map((currencyType) => (
                <option key={currencyType.id} value={currencyType.value}>
                  {currencyType.name}
                </option>
              ))}
            </select>
          </span>
        )}
      </div>
      <div className="flex flex-wrap">
        {cart &&
          cart.length > 0 &&
          cart.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Cart;
