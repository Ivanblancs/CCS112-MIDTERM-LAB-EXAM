import BookDetails from '@/Components/BookComponents/BookDetails';
import React from 'react';
import { Container } from 'react-bootstrap';

const ViewBook = ({ book, onClose }) => {
    if (!book) return null; 

    return (
        <Container>
            <h3 className="my-4">Book Details</h3>
            <BookDetails book={book} onClose={onClose} /> 
        </Container>
    );
};

export default ViewBook;
