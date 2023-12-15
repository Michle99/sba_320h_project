import React from 'react';
import SearchBar from '../components/SearchBar';

const HomePage: React.FC = () => {
  return (
    <div className="text-center mt-20">
      <div>
        <h5 className="text-center text-red-800 font-mono hover:font-sans text-7xl font-semibold">
          GeekWorm
        </h5>
      </div>
      <SearchBar />
    </div>
  );
};

export default HomePage;
