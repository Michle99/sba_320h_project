import React from 'react';

interface Book {
  volumeInfo: {
    title: string;
   
  };
}

interface BookDetailsProps {
  book: Book;
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  return (
    <div>
      <h2>{book.volumeInfo.title}</h2>
    </div>
  );
};

export default BookDetails;