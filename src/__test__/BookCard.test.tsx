import { render, screen } from '@testing-library/react';
import BookCard from '../components/BookCard';
import { Book } from '../types/types';
import { BrowserRouter as Router } from 'react-router-dom';


describe('BookCard component', () => {
  const books: Book[] = [
    {
      id: '1',
      volumeInfo: {
        title: 'Book 1',
        authors: ['Author 1'],
        description: 'Description 1',
        publishedDate: '2022-01-01',
        imageLinks: { thumbnail: 'url1', smallThumbnail: 'url2' },
      },
    },
  ];

  test('renders BookListPreview when type is "list"', () => {
    render(
        <Router>
            <BookCard type="list" books={books} />
        </Router>
    );

    // Check if BookListPreview component is rendered
    const bookListPreviewElement = screen.getByTestId('book-list-preview');
    expect(bookListPreviewElement).toBeInTheDocument();
  });

  test('renders BookDetails when type is "details" and books array is not empty', () => {
    render(
        <Router>
            <BookCard type="details" books={books} />
        </Router>
    );

    // Check if BookDetails component is rendered
    const bookDetailsElement = screen.getByTestId('book-details');
    expect(bookDetailsElement).toBeInTheDocument();
  });

  test('renders "No books to display" when type is not "list" or "details"', () => {
    render(
        <Router>
            <BookCard type="unknown" books={books} />
        </Router>
    );

    // Check if the message "No books to display" is rendered
    const noBooksElement = screen.getByText('No books to display');
    expect(noBooksElement).toBeInTheDocument();
  });
});
