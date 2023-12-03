import React from 'react';
import SearchBar from '../components/SearchBar';

const HomePage: React.FC = () => {
  return (
    <div >
      <h1 className="text-4xl font-bold mb-4 text-center mt-2">Welcome to Google Books Search</h1>
      <SearchBar />
    </div>
  );
};

export default HomePage;
