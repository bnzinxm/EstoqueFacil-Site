import React from 'react';
import { Plus, Package2 } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          In Stock
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <Package2 className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        </div>
        <p className="text-gray-500 text-sm mb-2">{product.description}</p>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span className="mr-4">SKU: #{product.id.toString().padStart(6, '0')}</span>
          <span>MOQ: 10 units</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900">${product.price}</span>
            <span className="text-sm text-gray-500 ml-1">/unit</span>
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-5 w-5 mr-1" />
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
}