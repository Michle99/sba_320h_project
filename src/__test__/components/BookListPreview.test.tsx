import { fireEvent, render, screen } from '@testing-library/react';
import BookListPreview from '../../components/BookListPreview';
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
    render(
      <Router>
        <BookListPreview books={books} />
      </Router>
    );

    // Click on the first book
    const bookPreviewOverlay = screen.getByTestId('book-list-preview').querySelector('.bg-yellow-200')!;
    fireEvent.click(bookPreviewOverlay);

    // Check if the handlePreviewClick function is indirectly called by checking the modal
    const previewModalElement = screen.getByTestId('preview-modal-card');
    expect(previewModalElement).toBeInTheDocument();
  });
});
