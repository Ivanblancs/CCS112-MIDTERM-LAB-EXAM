import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const BookDetails = ({ book, onClose }) => {
    if (!book) return null; // If no book data is passed, don't render anything

    return (
        <Container>
            <h3 className="my-4">Book Details</h3>
            <Card>
                <Card.Body>
                    <Card.Text>
                        <strong>Title:</strong> {book.title}
                    </Card.Text>
                    <Card.Text>
                        <strong>Author:</strong> {book.author}
                    </Card.Text>
                    <Card.Text>
                        <strong>Published Year:</strong> {book.published_year}
                    </Card.Text>
                    <Card.Text>
                        <strong>Genre:</strong> {book.genre}
                    </Card.Text>
                    <Card.Text>
                        <strong>Description:</strong> {book.description}
                    </Card.Text>
                    <Button variant="secondary" onClick={onClose}>Close</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default BookDetails;
