import { useState } from 'react';

const FilterSidebar = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const categories = [
    'Electronics',
    'Books',
    'Clothing',
    'Home & Kitchen',
    'Beauty',
    'Sports',
  ];

  const handleCheckboxChange = (category) => {
    setSelectedFilters(prev =>
      prev.includes(category)
        ? prev.filter(item => item !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    setPriceRange([0, 1000]);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 p-4 bg-white border-r border-gray-200 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Filters</h2>
          <button
            onClick={clearFilters}
            className="text-sm text-red-500 hover:text-red-700"
          >
            Clear All
          </button>
        </div>

        {/* Category Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Category</h3>
          <div className="space-y-2">
            {categories.map(category => (
              <label
                key={category}
                className="flex items-center space-x-2 text-sm text-gray-600"
              >
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(category)}
                  onChange={() => handleCheckboxChange(category)}
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Price Range</h3>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={priceRange[0]}
              onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
              className="w-24 p-1 border rounded text-sm"
            />
            <span className="text-gray-400">-</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-24 p-1 border rounded text-sm"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="space-y-2">
          <p className="text-gray-600">
            Selected Filters: {selectedFilters.join(', ') || 'None'}
          </p>
          <p className="text-gray-600">
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;