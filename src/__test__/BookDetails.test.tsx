import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter, Route, Routes } from 'react-router-dom';
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
    // Spy on localStorage.getItem
    const localStorageSpy = jest.spyOn(window.localStorage.__proto__, 'getItem');

    // Mock useNavigate
    const navigateMock = jest.fn();

    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => navigateMock,
    }));

    // Render the component with MemoryRouter and Routes
    render(
      <MemoryRouter initialEntries={['/book/1']} initialIndex={0}>
        <Routes>
          <Route
            path="/book/:bookId"
            element={<BookDetails book={book} />}
          />
        </Routes>
      </MemoryRouter>
    );

    // Mock localStorage.getItem to simulate no search results
    localStorageSpy.mockReturnValueOnce(null);

    // Click the back link
    fireEvent.click(screen.getByText('Back to Search'));

    // Check if the handleBack function is called
    expect(localStorageSpy).toHaveBeenCalledWith('searchResults');
    expect(navigateMock).toHaveBeenCalledWith(-1);

    // Restore the original functions after the test
    localStorageSpy.mockRestore();
  });
});
