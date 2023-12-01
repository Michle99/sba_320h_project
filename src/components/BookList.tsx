import React from 'react';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
  };
}

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.volumeInfo.title}</li>
      ))}
    </ul>
  );
};

export default BookList;
