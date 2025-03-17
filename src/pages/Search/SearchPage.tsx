import { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function EmpresaPerfil() {
  const [activeTab, setActiveTab] = useState('stats');

  // Dados simulados
  const stats = {
    clientesAtendidos: 2541,
    taxaEntrega: 98.7,
    avaliacaoMedia: 4.8,
    produtosCadastrados: 543
  };

  const contatos = {
    telefone: '(11) 99999-9999',
    endereco: 'Rua das Mercadorias, 123 - São Paulo/SP',
    site: 'www.empresaprovedora.com.br'
  };

  const reviews = [
    { id: 1, autor: 'Cliente Satisfeito', rating: 5, texto: 'Ótimo atendimento e produtos de qualidade!' },
    { id: 2, autor: 'Comprador Frequente', rating: 4, texto: 'Sempre entregam no prazo combinado' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Banner */}
      <div className="h-48 bg-blue-900 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Banner"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Seção Perfil */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between -mt-16 pb-6 border-b">
          {/* Foto de Perfil */}
          <div className="relative mb-4 md:mb-0">
            <div className="h-32 w-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Perfil"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Informações */}
          <div className="flex-1 md:ml-8 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900">Provedora Express</h1>
            <p className="text-gray-600 mt-2">contato@provedoraexpress.com.br</p>
          </div>

          {/* Botão Contratar */}
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-all mt-4 md:mt-0">
            Contratar Agora
          </button>
        </div>
      </section>

      {/* Navegação */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-center py-4">
            {['stats', 'contacts', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {
                  tab === 'stats' && 'Estatísticas',
                  tab === 'contacts' && 'Contatos',
                  tab === 'reviews' && 'Avaliações'
                }
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Conteúdo Dinâmico */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        {activeTab === 'stats' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600">{stats.clientesAtendidos}+</h3>
              <p className="text-gray-600 mt-2">Clientes Atendidos</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600">{stats.taxaEntrega}%</h3>
              <p className="text-gray-600 mt-2">Taxa de Entrega</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600">{stats.avaliacaoMedia}/5</h3>
              <p className="text-gray-600 mt-2">Avaliação Média</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600">{stats.produtosCadastrados}</h3>
              <p className="text-gray-600 mt-2">Produtos Cadastrados</p>
            </div>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <PhoneIcon className="w-6 h-6 text-blue-600" />
                <p className="text-gray-600">{contatos.telefone}</p>
              </div>
              <div className="flex items-center gap-4">
                <MapPinIcon className="w-6 h-6 text-blue-600" />
                <p className="text-gray-600">{contatos.endereco}</p>
              </div>
              <div className="flex items-center gap-4">
                <GlobeAltIcon className="w-6 h-6 text-blue-600" />
                <a href={`https://${contatos.site}`} className="text-blue-600 hover:underline">
                  {contatos.site}
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">{review.autor}</span>
                </div>
                <p className="text-gray-600">{review.texto}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Banner Provedor */}
      <section className="bg-blue-900 mt-12">
        <div className="container mx-auto px-4 py-16 text-center relative">
          <img
            src="https://images.unsplash.com/photo-1556740711-a097ca8d5e34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Seja um Provedor"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">Seja um Provedor!</h2>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
              Junte-se à nossa rede de provedores e aumente suas vendas com nossa plataforma integrada.
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Cadastre sua Empresa
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Ícones (substituir por componentes reais ou usar biblioteca)
function StarIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MapPinIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function GlobeAltIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}