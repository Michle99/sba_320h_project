import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import PreviewModal from "../components/PreviewModal";

describe('PreviewModal component', () => {
    const book = {
        id: '1',
        volumeInfo: {
          title: 'Book 1',
          authors: ['Author 1'],
          publishedDate: '2022-01-01',
          description: 'This is a book description.',
          previewLink: 'https://example.com/preview',
        },
    };

    test('It should not render if it is not opened', () =>{
        // Mock onClose
        const onCloseMock = jest.fn();

        // Mock !isOpen
        const isOpenMock = false;

        render(
            <Router >
                <PreviewModal isOpen={isOpenMock} onClose={onCloseMock} book={book}/>
            </Router>
        );

        // Check if PreviewModal component is rendered
        /***
         * "queryByTestId" returns -> T | null
         * "getByTestId" "MUST" return -> T
         */
        const previewModalElement = screen.queryByTestId('preview-modal-el');
        expect(previewModalElement).toBeNull();
    })


    test('It should render when isOpen is true', () => {
        // Mock onClose
        const onCloseMock = jest.fn();

        // Mock isOpen
        const isOpenMock = true;

        render(
            <Router>
                <PreviewModal isOpen={isOpenMock} onClose={onCloseMock} book={book} />
            </Router>
        );

        // Check if PreviewModal component is rendered
        const previewModalElement = screen.getByTestId('preview-modal-el');
        expect(previewModalElement).toBeInTheDocument();
    });

    test('It should render book details correctly', () => {
         // Mock onClose
         const onCloseMock = jest.fn();

         // Mock isOpen
         const isOpenMock = true;

         render(
            <Router>
                <PreviewModal isOpen={isOpenMock} onClose={onCloseMock} book={book} />
            </Router>
        );

        // Check if book details are rendered
        expect(screen.getByText(/Book 1/i)).toBeInTheDocument(); // Using a case-insensitive regex
        expect(screen.getByText(/By Author 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Published: 2022-01-01/i)).toBeInTheDocument();
        expect(screen.getByAltText('Book 1')).toBeInTheDocument();

        // Using a case-insensitive regex
        const descriptionElement = screen.getByText(/This is a book description\./i);

        expect(descriptionElement).toBeInTheDocument();

    });





});