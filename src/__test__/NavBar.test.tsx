import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';


test('renders NavBar component', () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  // Check if the navbar is rendered
  const navbarElement = screen.getByRole('navigation');
  expect(navbarElement).toBeInTheDocument();

  // Check if the link to the home page is rendered
  const linkElement = screen.getByRole('link', { name: /🅶🅴🅴🅺🆆🅾🆁🅼/i });
  expect(linkElement).toBeInTheDocument();

  // Check if the BookOpen icon is rendered
  const bookIconElement = screen.getByTestId('book-icon');
  expect(bookIconElement).toBeInTheDocument();
});
