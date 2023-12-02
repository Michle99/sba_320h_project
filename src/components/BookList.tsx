import React from 'react';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    publishedDate?: string;
    imageLinks?: {
      thumbnail?: string;
    };
  };
}

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book) => (
        <div key={book.id} className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">{book.volumeInfo.title}</h3>
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
              className="w-full h-40 object-cover mb-2"
            />
          )}
          {book.volumeInfo.description && (
            <p className="text-gray-800">{book.volumeInfo.description.slice(0, 150)}...</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookList;
