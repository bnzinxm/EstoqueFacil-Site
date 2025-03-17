import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, Package } from 'lucide-react';

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export function Navbar({ cartItemCount, onCartClick }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="bg-blue-600 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col py-4">
          {/* Top bar with logo and cart */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button className="p-2 rounded-md text-white lg:hidden">
                <Menu className="h-6 w-6" />
              </button>
              <div className="ml-2 flex items-center">
                <Package className="h-8 w-8 text-white" />
                <span className="ml-2 text-2xl font-bold text-white">StockHub</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={onCartClick}
                className="p-2 rounded-md text-white hover:bg-blue-700 relative"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search bar */}
          <div className="mt-4 relative max-w-3xl mx-auto w-full">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, categories, or SKUs..."
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Navigation links */}
          <div className="hidden lg:flex items-center justify-center space-x-8 mt-4">
            <a href="#" className="text-white hover:text-blue-100">Dashboard</a>
            <a href="#" className="text-white hover:text-blue-100">Inventory</a>
            <a href="#" className="text-white hover:text-blue-100">Orders</a>
            <a href="#" className="text-white hover:text-blue-100">Analytics</a>
            <a href="#" className="text-white hover:text-blue-100">Suppliers</a>
          </div>
        </div>
      </div>
    </nav>
  );
}