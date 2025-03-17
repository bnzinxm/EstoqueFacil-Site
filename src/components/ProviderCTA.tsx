import React from 'react';
import { TrendingUp, ShieldCheck, Users } from 'lucide-react';

export function ProviderCTA() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Expanda seu alcance, torne-se um provedor hoje mesmo!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Junte-se a nossa rede de provedores e alcance milhares de clientes em potencial
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <TrendingUp className="h-12 w-12 text-white mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Crescimento</h3>
              <p className="text-blue-100">Expanda seu negócio e alcance novos mercados</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <ShieldCheck className="h-12 w-12 text-white mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Segurança</h3>
              <p className="text-blue-100">Transações seguras e garantidas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Users className="h-12 w-12 text-white mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Networking</h3>
              <p className="text-blue-100">Conecte-se com parceiros estratégicos</p>
            </div>
          </div>

          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105 duration-300">
            Seja um Provedor Agora!
          </button>
        </div>
      </div>
    </section>
  );
}