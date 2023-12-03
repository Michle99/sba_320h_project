import React from 'react';
import SearchBar from '../components/SearchBar';
import GoogleLogo from '/Good_Fun.png';

const HomePage: React.FC = () => {
  return (
    <div className="text-center mt-8">
      <div>
        <img  src={GoogleLogo} alt="Google Logo" className="w-85 mx-auto mb-2" />
        {/* <p className="text-xs ml-80">books</p> */}
      </div>
      
      <SearchBar />
    </div>
  );
};

export default HomePage;
