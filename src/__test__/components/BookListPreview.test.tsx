import { render, screen } from '@testing-library/react';
import BookListPreview, { handlePreviewClick } from '../../components/BookListPreview';
import { BrowserRouter as Router } from 'react-router-dom';

describe('BookListPreview component', () => {
  const books = [
    {
      id: '1',
      volumeInfo: {
        title: 'Book 1',
        authors: ['Author 1'],
      },
    },
  ];

  test('renders BookListPreview component', () => {
    render(
        <Router>
            <BookListPreview books={books} />
        </Router>
    );

    // Check if BookListPreview component is rendered
    const bookListPreviewElement = screen.getByTestId('book-list-preview');
    expect(bookListPreviewElement).toBeInTheDocument();

    // Check if the first book is rendered
    const bookTitleElement = screen.getByText('Book 1');
    expect(bookTitleElement).toBeInTheDocument();
  });

  test('clicking on a book triggers handlePreviewClick function', () => {
    const setSelectedBook = jest.fn();
    const book = books[0];

    // Click on the first book
    handlePreviewClick(setSelectedBook, book);

    // Check if the handlePreviewClick function is called
    expect(setSelectedBook).toHaveBeenCalledWith(book);
  });
});
