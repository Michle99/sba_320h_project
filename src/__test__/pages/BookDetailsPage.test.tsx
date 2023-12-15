import BookDetailsPage from "../../pages/BookDetailsPage";
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

// Mock axios 
jest.mock('axios');

describe('BookDetailsPage component tests', () => {
    const mockBookData = {
        id: '1',
        volumeInfo: {
          title: 'Book 1',
          authors: ['Author 1'],
          publishedDate: '2022-01-01',
          description: 'This is a book description.',
        },
    };

    test('renders loading message initially', async () => {
        // Mock the axios.get method
        const axiosGetSpy = jest.spyOn(axios, 'get');
        axiosGetSpy.mockResolvedValueOnce({ data: mockBookData });

        const { getByText } = render(
            <MemoryRouter initialEntries={['/books/1']}>
              <Routes>
                <Route path="/books/:bookId" element={<BookDetailsPage />} />
              </Routes>
            </MemoryRouter>
        );

        const loadingElement = getByText(/Loading.../i);
        expect(loadingElement).toBeInTheDocument();

        await waitFor(() => {
            expect(axiosGetSpy).toHaveBeenCalled();
        });

        // Restore the original axios.get implementation
        axiosGetSpy.mockRestore();
    })



    test('renders book details after loading', async () => {
        // Mock the axios.get method
        const axiosGetSpy = jest.spyOn(axios, 'get');
        axiosGetSpy.mockResolvedValueOnce({ data: mockBookData });

        const { getByText } = render(
            <MemoryRouter initialEntries={['/books/1']}>
               <Routes>
                <Route path="/books/:bookId" element={<BookDetailsPage />} />
              </Routes>
            </MemoryRouter>
        );

        // Wait for the loading message to disappear
        await waitFor(() => {
            expect(axiosGetSpy).toHaveBeenCalled();
        });

        // Assert that book details are rendered
        const titleElement = getByText(/Book 1/i);
        expect(titleElement).toBeInTheDocument();

        const authorElement = getByText(/Author 1/i);
        expect(authorElement).toBeInTheDocument();
    });


    test('renders error message on failed book details fetch', async () => {
        const axiosGetSpy = jest.spyOn(axios, 'get');
        axiosGetSpy.mockRejectedValueOnce(new Error('Failed to fetch book details'));
    
        const { getByText } = render(
            <MemoryRouter initialEntries={['/books/1']}>
            <Routes>
             <Route path="/books/:bookId" element={<BookDetailsPage />} />
           </Routes>
         </MemoryRouter>
        );
    
        await waitFor(() => {
            const errorElement = getByText(/Failed to fetch book details. Please try again/i);
            expect(errorElement).toBeInTheDocument();
        });
    
        axiosGetSpy.mockRestore();
    });



    // cleanup after each tests
    afterEach(() => {
        jest.restoreAllMocks();
    });

});