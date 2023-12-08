import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookDetails from '../components/BookDetails';

describe('BookDetails component', () => {
  const book = {
    id: '1',
    volumeInfo: {
      title: 'Book 1',
      authors: ['Author 1'],
      publishedDate: '2022-01-01',
      description: 'This is a book description.',
    },
  };

  test('renders BookDetails component', () => {
    render(
      <Router>
        <BookDetails book={book} />
      </Router>
    );

    // Check if BookDetails component is rendered
    const bookDetailsElement = screen.getByTestId('book-details');
    expect(bookDetailsElement).toBeInTheDocument();

    // Check if back link is rendered
    const backLinkElement = screen.getByText('Back to Search');
    expect(backLinkElement).toBeInTheDocument();
  });

  test('clicking back link triggers handleBack function', () => {
    // Spy on window.history.back
    const spy = jest.spyOn(window.history, 'back');

    // Mock the localStorage getItem method
    jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValueOnce(null);

    // Render the component with Router
    render(
      <Router>
        <BookDetails book={book} />
      </Router>
    );

    // Click the back link
    fireEvent.click(screen.getByText('Back to Search'));

    // Check if the handleBack function is called
    console.log('Number of calls to window.history.back:', spy.mock.calls.length);
    expect(spy).toHaveBeenCalled();

    // Restore the original functions after the test
    spy.mockRestore();
    window.localStorage.__proto__.getItem.mockRestore();
  });
});
