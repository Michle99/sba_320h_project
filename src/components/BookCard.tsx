import React from 'react';
// import BookList from './BookList';
import BookDetails from './BookDetails';
import { BookCardProps } from '../types/types'
import BookListPreview from './BookListPreview';


const BookCard: React.FC<BookCardProps> = ({ type, books }) => {
    if (type === 'list') {
      return <BookListPreview books={books} />;
    } else if (type === 'details' && books.length > 0) {
      return <BookDetails book={books[0]} />;
    } else {
      return <div>No books to display</div>;
    }
};

export default BookCard;
