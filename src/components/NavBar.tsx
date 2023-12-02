// NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'react-feather';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white flex items-center">
          <BookOpen size={24} className="mr-2" />
          <span className="font-semibold text-xl">BookApp</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
