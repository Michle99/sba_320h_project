import React from 'react';

interface Book {
  volumeInfo: {
    title: string;
    // Add other necessary properties
  };
}

interface BookDetailsProps {
  book: Book;
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  return (
    <div>
      <h2>{book.volumeInfo.title}</h2>
      {/* Display other book details as needed */}
    </div>
  );
};

export default BookDetails;
