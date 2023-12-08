import React from 'react';
import { Book } from '../types/types';
import { X } from 'react-feather';
import { Link } from 'react-router-dom';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: Book;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ isOpen, onClose, book }) => {
  if (!isOpen) return null;

  return (
    <div data-testid="preview-modal-el" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div  className="bg-white max-w-2xl p-4 rounded-md overflow-y-auto">
        <div className="flex justify-end">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4" onClick={onClose}>
            <X size={24}/>
          </button>
        </div>
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
        <div className="flex justify-between items-center">
          <a
            href={book.volumeInfo.previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block mt-4"
          >
            Preview Book Page
          </a>
          <Link
            to={`/book/${book.id}`}
            key={book.id}
            className="focus:outline-none mt-4 text-black transition-transform transform hover:scale-105"
          >
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
