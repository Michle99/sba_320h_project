import React from 'react';
import SearchForm from '../components/SearchBar';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-center mt-2">Welcome to Google Books Search</h1>
      <SearchForm />
    </div>
  );
};

export default HomePage;
