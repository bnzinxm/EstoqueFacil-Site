import { useState } from 'react';

const Sidebar = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(500);
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ category, price, location });
  };

  return (
    <div className="w-64 bg-gray-100 p-5 border-r border-gray-300">
      <h2 className="text-xl font-semibold mb-5">Filtros</h2>
      <form onSubmit={handleSubmit}>
        {/* Categoria */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Categoria
          </label>
          <select
            id="category"
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="eletronicos">Eletrônicos</option>
            <option value="moveis">Móveis</option>
            <option value="roupas">Roupas</option>
          </select>
        </div>

        {/* Preço */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Preço
          </label>
          <input
            type="range"
            id="price"
            min="0"
            max="1000"
            step="10"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full mt-2"
          />
          <span className="block mt-2 text-sm">R${price}</span>
        </div>

        {/* Localização */}
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Localização
          </label>
          <select
            id="location"
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="sp">São Paulo</option>
            <option value="rj">Rio de Janeiro</option>
            <option value="mg">Minas Gerais</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-200"
        >
          Aplicar Filtros
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
