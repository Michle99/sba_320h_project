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
      <h2 className="text-2xl font-bold mb-4">Search Results for "{searchTerm}"</h2>
      <BookCard type="list" books={books} />
    </div>
  );
};

export default SearchPage;
