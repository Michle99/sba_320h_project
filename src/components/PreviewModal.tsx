// PreviewModal.tsx
import React from 'react';
import { Book } from '../types/types';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: Book;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ isOpen, onClose, book }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 max-w-md mx-auto rounded-md">
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
          className="w-full h-64 object-scale-down object-center mb-4 rounded"
        />
        {book.volumeInfo.description && (
          <p className="text-gray-800">{book.volumeInfo.description.slice(0, 50)}....</p>
        )}
        <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PreviewModal;
