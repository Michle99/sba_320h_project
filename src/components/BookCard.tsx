// BookCard.tsx
import React from 'react';
import BookList from './BookList';
import BookDetails from './BookDetails';
import Book from '../types/BookType';

interface BookCardProps {
  type: 'list' | 'details';
  books: Book[];
}

const BookCard: React.FC<BookCardProps> = ({ type, books }) => {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      {type === 'list' ? <BookList books={books} /> : <BookDetails book={books[0]} />}
    </div>
  );
};

export default BookCard;
