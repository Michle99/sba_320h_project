import React from 'react';
import SearchBar from '../components/SearchBar';
import GoogleLogo from '../../public/googlelogo_color_272x92dp.png';

const HomePage: React.FC = () => {
  return (
    <div className="text-center mt-8">
      <img  src={GoogleLogo} alt="Google Logo" className="w-85 mx-auto mb-2" />
      <p className="text-xs text-center mt-1">books</p>
      <SearchBar />
    </div>
  );
};

export default HomePage;
