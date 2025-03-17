import React, { useState } from 'react';
import { Search, Filter, Star } from 'lucide-react';

const providers = [
  {
    id: 1,
    name: "Tech Solutions Ltd",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    location: "São Paulo",
    category: "Eletrônicos"
  },
  {
    id: 2,
    name: "Global Supplies",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    location: "Rio de Janeiro",
    category: "Alimentos"
  },
  {
    id: 3,
    name: "Fresh Foods",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    location: "Curitiba",
    category: "Alimentos"
  }
];

export function ProviderGrid() {
  const [activeFilters, setActiveFilters] = useState({
    category: '',
    location: '',
    rating: 0
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Provedores em Destaque
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Encontre os melhores fornecedores para seu negócio
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <div className="relative">
          <select
            className="appearance-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setActiveFilters(prev => ({ ...prev, category: e.target.value }))}
          >
            <option value="">Todas Categorias</option>
            <option value="electronics">Eletrônicos</option>
            <option value="food">Alimentos</option>
          </select>
          <Filter className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        <div className="relative">
          <select
            className="appearance-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setActiveFilters(prev => ({ ...prev, location: e.target.value }))}
          >
            <option value="">Todas Localizações</option>
            <option value="sp">São Paulo</option>
            <option value="rj">Rio de Janeiro</option>
          </select>
          <Filter className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Provider Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {providers.map(provider => (
          <div
            key={provider.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <img
                src={provider.image}
                alt={provider.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-semibold text-white">{provider.name}</h3>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-white">{provider.rating}</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600 dark:text-gray-300">{provider.location}</span>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {provider.category}
                </span>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto text-center bg-white dark:bg-gray-800 py-12 px-4 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 md:mb-10 lg:text-4xl">
          Descubra mais provedores de estoque
        </h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-4 px-8 rounded-lg w-full max-w-xs mx-auto transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 block shadow-md hover:shadow-lg">
          Ver mais
        </button>
      </div>
    </section>
  );
}