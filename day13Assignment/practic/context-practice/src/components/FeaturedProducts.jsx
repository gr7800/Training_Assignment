import React from 'react'
import ProductCard from './ProductCard'

const FeaturedProducts = ({ products }) => {

  return (
    <div className="mx-auto px-4">
      <h1 className="text-3xl font-bold text-center">Featured Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 py-2">
        {products && products.length > 0 && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts