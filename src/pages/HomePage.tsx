import React from 'react';
import SearchBar from '../components/SearchBar';
// import GeekWorm from '/Good_Fun.svg';

const HomePage: React.FC = () => {
  return (
    <div className="text-center mt-20">
      <div>
        <h5 
          className="text-center 
            text-red-800 
            font-mono 
            hover:font-sans 
            text-7xl 
            font-semibold
          "
        >
          GeekWorm
        </h5>
        {/* <img  src={GeekWorm} alt="Google Logo" className="w-85 mx-auto mb-2" /> */}
        {/* <p className="text-xs ml-80">books</p> */}
      </div>
      
      <SearchBar />
    </div>
  );
};

export default HomePage;
