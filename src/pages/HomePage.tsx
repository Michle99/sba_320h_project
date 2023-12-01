import React from 'react';
import SearchForm from '../components/SearchForm';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Welcome to Google Books Search</h1>
      <SearchForm />
    </div>
  );
};

export default HomePage;
