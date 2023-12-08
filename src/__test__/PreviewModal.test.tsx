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
});