import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  let navigate = useNavigate()
  if(!product){
    return "...Loading"
  }
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer" onClick={()=>navigate(`/products/${product?.id}`)}>
      <img className="w-full h-48 object-cover" src={product?.image} alt={product.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product?.title}</div>
        <p className="text-gray-700 text-base">{product?.description?.substring(0, 100)}...</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${product?.price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
