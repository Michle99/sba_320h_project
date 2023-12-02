import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const navigate = useNavigate();
  
    const handleSearch = () => {
        navigate(`/search/${searchTerm}`);
    };
  
    return (
      <div className="flex items-center justify-center mt-8">
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </div>
    );
};

export default SearchForm;