import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar from '../components/SearchBar';



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

    test('Check handleSearch function', () => {
        // Mock handleSearch function
        const handleSearchMock = jest.fn();

        fireEvent.click(screen.getByTestId('search-button'));
        expect(handleSearchMock).toHaveBeenCalled();

    });
});