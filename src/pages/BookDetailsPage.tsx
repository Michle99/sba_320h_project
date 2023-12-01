// BookDetailsPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookDetails from '../components/BookDetails';

interface Book {
  volumeInfo: {
    title: string;
  };
}

const BookDetailsPage: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    if (bookId) {
      fetchData();
    }
  }, [bookId]);

  return (
    <div>
      {book ? <BookDetails book={book} /> : <p>Loading...</p>}
    </div>
  );
};

export default BookDetailsPage;
