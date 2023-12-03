import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Book } from '../types/types';
import BookCard from '../components/BookCard';

const SearchPage: React.FC = () => {
  const { searchTerm } = useParams<{ searchTerm: string }>();
  const [books, setBooks] = useState<Book[]>([]);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=39&key=${API_KEY}`
        );
        const searchResults = response.data.items || [];
        setBooks(searchResults);

        // save search results to localStorage
        localStorage.setItem('searchResults', JSON.stringify(searchResults));
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
      <p className=" text-sm text-left hover:text-pink-500 font-sans ml-4 mt-2 mb-4">Search Results for "{searchTerm}"</p>
      <BookCard type="list" books={books} />
    </div>
  );
};

export default SearchPage;
