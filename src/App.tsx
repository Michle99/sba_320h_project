import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import BookDetailsPage from './pages/BookDetailsPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search/:searchTerm" element={<SearchPage />} />
            <Route path="/book/:bookId" element={<BookDetailsPage />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
