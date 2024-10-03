import React, { useContext, useEffect, useState } from "react";
import { BiSolidCartAdd } from "react-icons/bi";
import { CartContext } from "../context/CartContext";
import CartButton from "./CartButton";

const ProductCard = ({ product }) => {
  const [existedProduct, setExistedProduct] = useState(null);
  const { cart, addToCart } = useContext(CartContext);

  useEffect(() => {
    if (cart.length > 0) {
      const foundProduct = cart.find((el) => el.id === product.id);
      setExistedProduct(foundProduct ? foundProduct : null);
    } else {
      setExistedProduct(null);
    }
  }, [cart]);

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white transition-transform transform hover:scale-105 flex flex-col gap-4 p-4">
      <div className="h-64 overflow-hidden flex items-center justify-center bg-gray-100">
        <img
          className="object-contain h-full w-full"
          src={product?.image}
          alt={product.title}
        />
      </div>
      <span className="font-bold text-xl text-gray-800 truncate">
        {product?.title}
      </span>
      <p className="text-gray-600 text-sm">
        {product?.description?.substring(0, 100)}...
      </p>

      <div className="flex justify-between">
        <span className="inline-block bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-semibold w-fit">
          {product?.price.toFixed(2) + " "} {product?.currencietype || "$ "}
        </span>
        {!existedProduct && (
          <span className="flex justify-center items-center bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-semibold w-fit cursor-pointer">
            <BiSolidCartAdd onClick={() => addToCart(product)} />
          </span>
        )}
      </div>
      <div>{existedProduct && <CartButton product={existedProduct} />}</div>
    </div>
  );
};

export default ProductCard;
