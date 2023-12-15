import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookDetails from '../components/BookDetails';
import { Book } from '../types/types';

const BookDetailsPage: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = process.env.VITE_GOOGLE_API_KEY;
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${apiKey}`
        );
        setBook(response.data);
      } catch (error) {
        // console.error('Error fetching book details:', error);
        setError('Failed to fetch book details. Please try again.');
      }
    };

    if (bookId) {
      fetchData();
    }
  }, [bookId]);

  return (
    <div>
      {error ? (
        <p className="text-xl font-bold text-red-500">{error}</p>
      ) : book ? (
        <BookDetails book={book} />
      ) : (
        <p className="text-xl font-bold">Loading...</p>
      )}
    </div>
  );
};

export default BookDetailsPage;
