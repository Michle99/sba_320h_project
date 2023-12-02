import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const navigate = useNavigate();
  
    const handleSearch = () => {
        navigate(`/search/${searchTerm}`);
    };
  
    return (
      <div className="flex justify-center mt-4 mb-4 items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search books..."
        className="border border-blue-500 px-2 py-1 mr-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Search
      </button>
    </div>
  );
};

export default SearchBar;