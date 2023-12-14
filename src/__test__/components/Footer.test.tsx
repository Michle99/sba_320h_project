import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../../components/Footer';


test('renders NavBar component', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    // Check if footer copyright <p> is rendered
    const footerCopyrightEl = screen.getByTestId('footer-copyright');
    expect(footerCopyrightEl).toBeInTheDocument();

    // Check if footer is rendered by role
    const footerElement = screen.getByLabelText('footer');
    expect(footerElement).toBeInTheDocument();
});