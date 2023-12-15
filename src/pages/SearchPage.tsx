import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Book } from '../types/types';
import BookCard from '../components/BookCard';

const SearchPage: React.FC = () => {
  const { searchTerm } = useParams<{ searchTerm: string }>();
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_KEY = process.env.VITE_GOOGLE_API_KEY;
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=39&key=${API_KEY}`
        );
        const searchResults = response.data.items || [];
        setBooks(searchResults);

        // save search results to localStorage
        localStorage.setItem('searchResults', JSON.stringify(searchResults));
      } catch (error) {
        console.error('Error fetching books:', error);
        setError('Failed to fetch book details for search term. Please try again.');
      }
    };

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);


  return (
    <div>
      {error ? (
        <p className="text-xl font-bold text-red-500">{error}</p>
      ): books ? (
        <>
          <p className=" text-sm text-left hover:text-pink-500 font-sans ml-4 mt-2 mb-4">Search Results for "{searchTerm}"</p>
          <BookCard type="list" books={books} />
        </>
      ):(
        <p className="text-xl font-bold">Loading...</p>
      )}
    </div>
  );
};

export default SearchPage;
