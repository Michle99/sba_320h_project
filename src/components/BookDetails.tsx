import React from 'react';
import { BookDetailsProps } from '../types/types';


const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{book.volumeInfo.title}</h2>
      {book.volumeInfo.authors && (
        <p className="text-gray-600 mb-2">By {book.volumeInfo.authors.join(', ')}</p>
      )}
      {book.volumeInfo.publishedDate && (
        <p className="text-gray-600 mb-2">Published: {book.volumeInfo.publishedDate}</p>
      )}
      {book.volumeInfo.imageLinks && (
        <img
          src={book.volumeInfo.imageLinks.thumbnail || book.volumeInfo.imageLinks.smallThumbnail}
          alt={book.volumeInfo.title}
          className="w-full h-40 object-cover mb-4"
        />
      )}
      {book.volumeInfo.description && (
        <p className="text-gray-800">{book.volumeInfo.description}</p>
      )}
      <div className="mt-4">
        <p className="text-gray-700">
          <strong>Categories:</strong> {book.volumeInfo.categories?.join(', ')}
        </p>
        <p className="text-gray-700">
          <strong>Page Count:</strong> {book.volumeInfo.pageCount || 'N/A'}
        </p>
        <p className="text-gray-700">
          <strong>Print Type:</strong> {book.volumeInfo.printType || 'N/A'}
        </p>
        <p className="text-gray-700">
          <strong>Language:</strong> {book.volumeInfo.language || 'N/A'}
        </p>
        <p className="text-gray-700">
          <strong>ISBN:</strong>{' '}
          {book.volumeInfo.industryIdentifiers?.map((identifier) => (
            <span key={identifier.type}>{identifier.identifier}</span>
          ))}
        </p>
        <p className="text-gray-700">
          <strong>Preview Link:</strong>{' '}
          <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
            {book.volumeInfo.previewLink}
          </a>
        </p>
        <p className="text-gray-700">
          <strong>Info Link:</strong>{' '}
          <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
            {book.volumeInfo.infoLink}
          </a>
        </p>
        <p className="text-gray-700">
          <strong>Canonical Volume Link:</strong>{' '}
          <a href={book.volumeInfo.canonicalVolumeLink} target="_blank" rel="noopener noreferrer">
            {book.volumeInfo.canonicalVolumeLink}
          </a>
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
