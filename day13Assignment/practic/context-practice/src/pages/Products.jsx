import React from 'react'
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const productsData = useLoaderData();
  return (
    <div className="mx-auto px-4 pt-16">
      <h1 className="text-3xl font-bold text-center">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 py-2">
        {productsData && productsData.length > 0 && productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products
