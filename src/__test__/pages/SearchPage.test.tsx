import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import SearchPage from '../../pages/SearchPage';

// Mock axios
jest.mock('axios');

describe('SearchPage component tests', () => {
    const mockBookData = {
      items: [
        { id: '1', volumeInfo: { title: 'Book 1' } },
        { id: '2', volumeInfo: { title: 'Book 2' } },
      ],
    };
  
    test('displays search results for a search term', async () => {
      const axiosGetSpy = jest.spyOn(axios, 'get');
      axiosGetSpy.mockResolvedValueOnce({
        data: mockBookData,
      });
  
      render(
        <MemoryRouter initialEntries={['/search/programming']}>
          <Routes>
           <Route path="/search/:searchTerm" element={ <SearchPage />} />
          </Routes>
        </MemoryRouter>
      );
  
      // Simulate user entering a search term
      const searchInput = screen.getByPlaceholderText(/Search books/i);
      userEvent.type(searchInput, 'programming');
  
      // Simulate user triggering the search
      const searchButton = screen.getByText(/Search/i);
      userEvent.click(searchButton);
  
      // Wait for the search results to be displayed
      await waitFor(() => {
        const resultElement1 = screen.getByText(/Book 1/i);
        const resultElement2 = screen.getByText(/Book 2/i);
        expect(resultElement1).toBeInTheDocument();
        expect(resultElement2).toBeInTheDocument();
      });
  
      // Restore the original axios.get implementation
      axiosGetSpy.mockRestore();
    });
  
    test('displays error message on failed API call', async () => {
      // Mock the axios.get method to simulate an error response
      const axiosGetSpy = jest.spyOn(axios, 'get');
      axiosGetSpy.mockRejectedValueOnce({
        response: {
          data: { error: 'Failed to fetch book details for search term. Please enter a valid search' },
        },
      });
  
      render(
        <MemoryRouter initialEntries={['/search/programming']}>
          <Routes>
           <Route path="/search/:searchTerm" element={ <SearchPage />} />
          </Routes>
        </MemoryRouter>
      );
  
      // Simulate user entering a search term
      const searchInput = screen.getByPlaceholderText(/Search books/i);
      userEvent.type(searchInput, 'programming');
  
      // Simulate user triggering the search
      const searchButton = screen.getByText(/Search/i);
      userEvent.click(searchButton);
  
      // Wait for the error message to be displayed
      await waitFor(() => {
        const errorElement = screen.getByText(/Failed to fetch book details for search term. Please enter a valid search/i);
        expect(errorElement).toBeInTheDocument();
      });
  
      // Restore the original axios.get implementation
      axiosGetSpy.mockRestore();
    });
    
  
  });