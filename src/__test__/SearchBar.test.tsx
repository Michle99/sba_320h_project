import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

// Mock navigate function
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('SearchBar Component', () => {
    test('It should render SearchBar Component', () => {
        render(
            <Router>
                <SearchBar/>
            </Router>
        );
        
        // Check if SearchBar is rendered
        const searchBarEl = screen.getByTestId('search-bar');
        expect(searchBarEl).toBeInTheDocument();

        // Check if Search Icon is rendered
        const searchIconEl = screen.getByTestId('search-icon');
        expect(searchIconEl).toBeInTheDocument();

        // Check if Search role of Search Component is true
        const searchRoleElement = screen.getByRole('textbox');
        expect(searchRoleElement).toBeInTheDocument();
    })

    test('Check handleSearch function', async () => { 
        
        // mock useNavigate Function
        const mockNavigate = jest.fn();
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

        render(
            <MemoryRouter initialEntries={['/search/Harry%20Potter']} initialIndex={0}>
                <Routes>
                    <Route
                        path="/search/:searchTerm"
                        element={<div data-testid="search-results">Search Results</div>}
                    />
                    </Routes>
                <SearchBar/>
            </MemoryRouter>
        );

        // Simulate user input in the input field
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: 'Harry Potter' } });

        // Trigger a click event on the search button
        const searchButton = screen.getByTestId('search-button');
        fireEvent.click(searchButton);

        // Wait for the state to update (use act to avoid React warning)
        await act(async () => {
        // Check if useNavigate is called
        expect(useNavigate).toHaveBeenCalled();
        // Called navigate one time
        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(screen.getByRole('textbox')).toHaveValue('Harry Potter');
        /**
         *  mockNavigate function receives the actual path 
         *  without URL encoding after "6 HOURS!! FROM 15:31-21:46 12/8/23"
         */
        expect(mockNavigate).toHaveBeenCalledWith('/search/Harry Potter');

        });
    });
});