import React, { useState } from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Filter = ({ categories, handleSortByCategory, handleSortByPrice, handleSearch, handleReset }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  const handlePriceChange = (e) => {
    const newMaxPrice = parseInt(e.target.value);
    setPriceRange([0, newMaxPrice]);
    handleSortByPrice([0, newMaxPrice]);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    handleSortByCategory(e.target.value);
  };

  const handleResetFilters = () => {
    setPriceRange([0, 300]);
    setSearchTerm('');
    setSelectedCategory('');
    handleReset();
  };

  return (
    <div className='flex items-center justify-center gap-8 lg:flex-col p-3 lg:gap-4 bg-pink-800 bg-opacity-25'>
      <select onChange={handleCategoryChange} value={selectedCategory} className='border border-gray-300 rounded-md px-3 py-2 outline-none'>
        <option value="" disabled>Category</option>
        {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
        ))}
      </select>

      <div className="flex items-center gap-2">
        <label htmlFor="price" className="whitespace-nowrap text-white">Price Range</label>
        <input 
            type="range"
            id="price"  
            min="0" 
            max="300"
            value={priceRange[1]} 
            onChange={handlePriceChange}
            className="w-full h-2 bg-gray-300 rounded-md"
        />
        <span className='whitespace-nowrap text-white flex items-center'> <CurrencyRupeeIcon style={{fontSize: '1rem'}} />{priceRange[0]} - <CurrencyRupeeIcon style={{fontSize: '1rem'}} />{priceRange[1]}</span>
      </div>

        <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm} 
            onChange={handleSearchChange} 
            className="w-fit h-10 px-4 rounded-md border border-gray-300 focus:outline-none"
        />

        <button 
            onClick={handleResetFilters} 
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
            Reset
        </button>

    </div>
  );
};

export default Filter;
