import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, Package2, Users, TrendingUp } from 'lucide-react';

const providers = [
  {
    id: 1,
    name: "Tech Solutions Ltd",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    location: "São Paulo",
    category: "Eletrônicos",
    description: "Fornecedor líder em soluções tecnológicas para varejo",
    deliveryTime: "2-3 dias úteis",
    minOrder: "R$ 1000,00",
    verified: true
  },
  {
    id: 2,
    name: "Global Supplies",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    location: "Rio de Janeiro",
    category: "Alimentos",
    description: "Distribuidor de alimentos e bebidas premium",
    deliveryTime: "1-2 dias úteis",
    minOrder: "R$ 500,00",
    verified: true
  },
  {
    id: 3,
    name: "Fresh Foods",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    location: "Curitiba",
    category: "Alimentos",
    description: "Especialista em produtos frescos e orgânicos",
    deliveryTime: "24 horas",
    minOrder: "R$ 300,00",
    verified: true
  }
];

export function ProviderGrid() {
  const [activeFilters, setActiveFilters] = useState({
    category: '',
    location: '',
    rating: 0,
    verified: false
  });

  const [selectedProvider, setSelectedProvider] = useState<number | null>(null);

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

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            checked={activeFilters.verified}
            onChange={(e) => setActiveFilters(prev => ({ ...prev, verified: e.target.checked }))}
          />
          <span className="text-gray-700 dark:text-gray-300">Apenas Verificados</span>
        </label>
      </div>

      {/* Provider Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {providers.map(provider => (
          <div
            key={provider.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative h-48">
              <img
                src={provider.image}
                alt={provider.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {provider.verified && (
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  Verificado
                </div>
              )}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-semibold text-white">{provider.name}</h3>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-white">{provider.rating}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                {provider.location}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {provider.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Entrega em</span>
                  <p className="font-medium text-gray-900 dark:text-white">{provider.deliveryTime}</p>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Pedido Mínimo</span>
                  <p className="font-medium text-gray-900 dark:text-white">{provider.minOrder}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedProvider(provider.id)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Package2 className="h-5 w-5 mr-2" />
                Ver Catálogo
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Provider Details Modal */}
      {selectedProvider && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {providers.find(p => p.id === selectedProvider)?.name}
                </h2>
                <button
                  onClick={() => setSelectedProvider(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={providers.find(p => p.id === selectedProvider)?.image}
                    alt="Provider"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="bg-blue-100 dark:bg-blue-900 rounde d-full p-3 mx-auto w-fit mb-2">
                        <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">500+ Clientes</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3 mx-auto w-fit mb-2">
                        <Package2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">1000+ Produtos</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3 mx-auto w-fit mb-2">
                        <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">98% Satisfação</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sobre o Fornecedor</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {providers.find(p => p.id === selectedProvider)?.description}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Informações de Entrega</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Prazo de Entrega: {providers.find(p => p.id === selectedProvider)?.deliveryTime}</li>
                      <li>• Pedido Mínimo: {providers.find(p => p.id === selectedProvider)?.minOrder}</li>
                      <li>• Área de Atendimento: Todo o estado</li>
                      <li>• Frete: Calculado conforme CEP</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Certificações</h3>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">
                        ISO 9001
                      </span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                        Anvisa
                      </span>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}