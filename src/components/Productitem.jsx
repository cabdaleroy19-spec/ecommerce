import React from 'react'
import {Link} from "react-router-dom"

 
function ProductItem({ product }) {
  const rating = Math.min(5, Math.max(0, Math.round(product.rating || 0)))

  return (
    <Link
     to={`/product-details/${product.id}`} className="border rounded-lg overflow-hidden 
    shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in">
      <img
        className="w-full h-48 object-cover"
        src={product.thumbnail}
        alt={product.title}
      />

      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{product.title}</h2>

        <p className="text-gray-600 mb-4 truncate">{product.description}</p>

        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-semibold">
            ${Number(product.price).toFixed(2)}
          </span>
          <div className="text-sm text-gray-500">
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of Stock'}
          </div>
        </div>

        <div className="mt-4">
          <span className="text-yellow-500">{'★'.repeat(rating)}</span>
          <span className="text-gray-300">{'★'.repeat(5 - rating)}</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem