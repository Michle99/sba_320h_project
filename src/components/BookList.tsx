import React from 'react';
import { Link } from 'react-router-dom';
import { BookListProps } from '../types/types';
import { ArrowRight } from 'react-feather';

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book) => (
        <Link
          to={`/book/${book.id}`}
          key={book.id}
          className="focus:outline-none text-black transition-transform transform hover:scale-105"
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-300">
            <img
              src={`https://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
              alt={book.volumeInfo.title}
              className="w-full object-scale-down object-center mb-2 rounded-t"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{book.volumeInfo.title}</h3>
              {book.volumeInfo.authors && (
                <p className="text-gray-600 mb-2">By {book.volumeInfo.authors.join(', ')}</p>
              )}
              <div className="flex items-center">
                <span className="text-blue-500">Details</span>
                <ArrowRight className="ml-1" size={16} />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BookList;
