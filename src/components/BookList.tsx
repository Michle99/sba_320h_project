import React from 'react';
import { BookListProps } from '../types/types';
import { Link } from 'react-router-dom';

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book) => (
        <Link
          to={`/book/${book.id}`}
          key={book.id}
          className="focus:outline-none text-black"
        >
          <div className="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-lg font-semibold mb-2">{book.volumeInfo.title}</h3>
            {book.volumeInfo.authors && (
              <p className="text-gray-600 mb-2">By {book.volumeInfo.authors.join(', ')}</p>
            )}
            {book.volumeInfo.imageLinks && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail || book.volumeInfo.imageLinks.smallThumbnail}
                alt={book.volumeInfo.title}
                className="w-full h-40 object-cover mb-2"
              />
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BookList;
