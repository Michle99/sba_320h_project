import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'react-feather'; 

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const navigate = useNavigate();
  
    const handleSearch = () => {
        navigate(`/search/${searchTerm}`);
    };
  
    return (
      <div data-testid="search-bar" className="flex justify-center mt-4 mb-4 items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search books..."
        className="w-10/12 h-8 border transition-transform transform hover:scale-y-110 rounded-2xl border-red-900 px-2 py-1 mr-2 text-lg focus:outline-none focus:border-red-300"
      />
      <button data-testid="search-button" onClick={handleSearch} className="bg-red-900 rounded-2xl text-white px-4 py-2">
        <Search data-testid="search-icon" size={20} />
      </button>
    </div>
  );
};

export default SearchBar;