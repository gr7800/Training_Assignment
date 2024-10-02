import React, { useContext } from 'react'
import { IoMdAddCircle } from "react-icons/io";
import { FiMinusCircle } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { CartContext } from '../context/CartContext';

const CartButton = ({ product }) => {
    const { quantity, id } = product;
    const { updateCart, deleteCartItem } = useContext(CartContext);

    return (
        <div className="flex flex-wrap justify-between gap-4">
            <button className="flex justify-center items-center bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-semibold w-fit cursor-pointer" onClick={() => updateCart(id, -1)} disabled={quantity === 1}>
                <FiMinusCircle />
            </button>
            <button className="flex justify-center items-center bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-semibold w-fit cursor-pointer">{quantity}</button>
            <button className="flex justify-center items-center bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-semibold w-fit cursor-pointer" onClick={() => updateCart(id, +1)}>
                <IoMdAddCircle />
            </button>
            <button className="flex justify-center items-center bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-semibold w-fit cursor-pointer" onClick={() => deleteCartItem(id)}>
                <MdDeleteForever />
            </button>
        </div>
    )
}

export default CartButton