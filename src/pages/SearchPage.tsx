// SearchPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookList from '../components/BookList';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
  };
}

const SearchPage: React.FC = () => {
  const { searchTerm } = useParams<{ searchTerm: string }>();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
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
      <h2 className="text-2xl font-bold mb-4">Search Results for "{searchTerm}"</h2>
      <BookList books={books} />
    </div>
  );
};

export default SearchPage;
