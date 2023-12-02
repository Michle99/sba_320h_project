import React from 'react';
import { Link } from 'react-router-dom';
import { BookDetailsProps } from '../types/types';
import { ArrowLeft } from 'react-feather';

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-4 rounded-md shadow-md border border-gray-300">
      <Link to="/" className="flex items-center text-blue-500 mb-4 transition-opacity opacity-75 hover:opacity-100">
        <ArrowLeft size={16} className="mr-1" />
        <span>Back to Search</span>
      </Link>
      <h2 className="text-xl font-semibold mb-2">{book.volumeInfo.title}</h2>
      {book.volumeInfo.authors && (
        <p className="text-gray-600 mb-1">By {book.volumeInfo.authors.join(', ')}</p>
      )}
      {book.volumeInfo.publishedDate && (
        <p className="text-gray-600 mb-1">Published: {book.volumeInfo.publishedDate}</p>
      )}
      <img
        src={`https://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
        alt={book.volumeInfo.title}
        className="w-full h-32 object-scale-down object-center mb-2 rounded"
      />
      {book.volumeInfo.description && (
        <p className="text-gray-800 mb-2">{book.volumeInfo.description.slice(0, 160)}</p>
      )}
    </div>
  );
};

export default BookDetails;
