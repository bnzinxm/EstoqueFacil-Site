import React from 'react';
import { ShoppingBag, Coffee, Package2, Truck, Warehouse, Store } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Alimentos e Bebidas',
    icon: Coffee,
    count: '2,500+ produtos',
    color: 'bg-orange-100 dark:bg-orange-900',
    textColor: 'text-orange-600 dark:text-orange-400'
  },
  {
    id: 2,
    name: 'Embalagens',
    icon: Package2,
    count: '1,800+ produtos',
    color: 'bg-blue-100 dark:bg-blue-900',
    textColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    id: 3,
    name: 'Logística',
    icon: Truck,
    count: '500+ serviços',
    color: 'bg-green-100 dark:bg-green-900',
    textColor: 'text-green-600 dark:text-green-400'
  },
  {
    id: 4,
    name: 'Armazenamento',
    icon: Warehouse,
    count: '300+ locais',
    color: 'bg-purple-100 dark:bg-purple-900',
    textColor: 'text-purple-600 dark:text-purple-400'
  },
  {
    id: 5,
    name: 'Varejo',
    icon: Store,
    count: '4,000+ produtos',
    color: 'bg-pink-100 dark:bg-pink-900',
    textColor: 'text-pink-600 dark:text-pink-400'
  },
  {
    id: 6,
    name: 'Produtos Gerais',
    icon: ShoppingBag,
    count: '5,000+ itens',
    color: 'bg-yellow-100 dark:bg-yellow-900',
    textColor: 'text-yellow-600 dark:text-yellow-400'
  }
];

export function FeaturedCategories() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Categorias em Destaque
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore nossa ampla variedade de produtos e serviços
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${category.color}`}>
                    <Icon className={`h-6 w-6 ${category.textColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {category.count}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}