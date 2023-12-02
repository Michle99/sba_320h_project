import React from 'react';
import BookDetailsInterface from '../types/BookDetails';

interface BookDetailsProps {
  book: BookDetailsInterface;
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{book.volumeInfo.title}</h2>
      {book.volumeInfo.authors && (
        <p className="text-gray-600 mb-2">By {book.volumeInfo.authors.join(', ')}</p>
      )}
      {book.volumeInfo.publishedDate && (
        <p className="text-gray-600 mb-2">Published: {book.volumeInfo.publishedDate}</p>
      )}
      {book.volumeInfo.imageLinks && (
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
          className="w-full h-40 object-cover mb-4"
        />
      )}
      {book.volumeInfo.description && (
        <p className="text-gray-800">{book.volumeInfo.description}</p>
      )}
    </div>
  );
};

export default BookDetails;
