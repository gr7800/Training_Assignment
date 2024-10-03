import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("ecomerceCart")) || []
  );
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (value) => {
    setCart((prev) => [...prev, { ...value, quantity: 1 }]);
  };

  const updateCart = (id, num) => {
    setCart((prev) =>
      prev.map((el) => {
        return el.id == id ? { ...el, quantity: el.quantity + num } : el;
      })
    );
  };

  const deleteCartItem = (id) => {
    setCart((prev) => prev.filter((el) => el.id !== id));
  };

  useEffect(() => {
    setTotalPrice(
      cart.reduce((acc, value) => acc + value.price * value.quantity, 0)
    );
    localStorage.setItem("ecomerceCart", JSON.stringify(cart));
  }, [cart]);


  return (
    <CartContext.Provider
      value={{ cart, totalPrice, addToCart, updateCart, deleteCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
