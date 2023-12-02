import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import BookList from '../components/BookList';
import Book from '../types/BookList';
import BookCard from '../components/BookCard';

const SearchPage: React.FC = () => {
  const { searchTerm } = useParams<{ searchTerm: string }>();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${API_KEY}`
        );
        setBooks(response.data.items || []);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  return (
    <div>
      {/*** Add a Navbar */}
      <h2 className="text-2xl font-bold mb-4">Search Results for "{searchTerm}"</h2>
      <BookCard type="list" books={books}/>
    </div>
  );
};

export default SearchPage;
