import React from 'react';
import { Users, Package, TrendingUp, Globe } from 'lucide-react';

export function StatsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Números que Comprovam Nossa Excelência
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Conectando empresas e fornecedores em todo o Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
            <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
              <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">5000+</h3>
            <p className="text-gray-600 dark:text-gray-300">Empresas Cadastradas</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
            <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
              <Package className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">1M+</h3>
            <p className="text-gray-600 dark:text-gray-300">Produtos Disponíveis</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
            <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
              <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">98%</h3>
            <p className="text-gray-600 dark:text-gray-300">Taxa de Satisfação</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
            <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
              <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">27</h3>
            <p className="text-gray-600 dark:text-gray-300">Estados Atendidos</p>
          </div>
        </div>
      </div>
    </section>
  );
}