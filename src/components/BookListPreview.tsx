// BookList.tsx
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { BookListProps, Book } from '../types/types';
// import { ArrowRight } from 'react-feather';
import SearchBar from './SearchBar';
import PreviewModal from './PreviewModal';

const BookListPreview: React.FC<BookListProps> = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handlePreviewClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handleClosePreviewModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="m-4 p-1">
      <SearchBar />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="focus:outline-none text-black transition-transform transform hover:scale-105 relative"
          >
            {/* Highlight overlay */}
            <div
              className="absolute inset-0 bg-yellow-200 opacity-0 hover:opacity-50 transition-opacity rounded-md cursor-pointer"
              onClick={() => handlePreviewClick(book)}
            ></div>

            <div className=" bg-slate-100 rounded-md overflow-hidden shadow-md border border-gray-300">
              <img
                src={`https://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                alt={book.volumeInfo.title}
                className="w-full h-32 object-scale-down object-center mb-2 p-4 rounded-sm border border-blue-100 cursor-pointer"
                onClick={() => handlePreviewClick(book)}
              />
              <div className="p-2">
                <h3 className="text-sm font-semibold mb-1">{book.volumeInfo.title}</h3>
                {book.volumeInfo.authors && (
                  <p className="text-xs text-gray-600 mb-1">By {book.volumeInfo.authors.join(', ')}</p>
                )}
                {/* navigate to Preview Page */}
                
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {selectedBook && (
        <PreviewModal
          isOpen={!!selectedBook}
          onClose={handleClosePreviewModal}
          book={selectedBook}
        />
      )}
    </div>
  );
};

export default BookListPreview;
