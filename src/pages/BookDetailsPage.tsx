// BookDetailsPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import BookDetails from '../components/BookDetails';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    description?: string;
    authors?: string[];
    publishedDate?: string;
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
      <Link to="/" className="text-blue-500 hover:underline mb-4 block">
        Back to Home
      </Link>
      {book ? (
        <BookDetails book={book} />
      ) : (
        <p className="text-xl font-bold">Loading...</p>
      )}
    </div>
  );
};

export default BookDetailsPage;
