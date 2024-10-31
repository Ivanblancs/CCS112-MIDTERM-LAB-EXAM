import React, { useEffect, useState } from 'react';
import { Table, Button, Container, Spinner, Alert } from 'react-bootstrap';
import axios from '@/axiosInstance';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inertia } from '@inertiajs/inertia';
import ViewCard from '@/Pages/ViewBook';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('/books');
                setBooks(response.data);
            } catch (err) {
                setError(err.message || 'Something went wrong while fetching books.');
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    const handleView = async (bookId) => {
        try {
            const response = await axios.get(`/books/${bookId}`);
            setSelectedBook(response.data);
        } catch (err) {
            console.error('Error fetching book details:', err.message);
            setError('Failed to fetch book details. Please try again.');
        }
    };

    const handleEdit = (bookId) => {
        if (bookId) {
            Inertia.visit(`/edit-book/${bookId}`);
        } else {
            console.error('Book ID is undefined');
        }
    };

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this book?")) {
            Inertia.delete(`/books/${id}`, {
                onSuccess: () => {
                    setSuccessMessage('Book deleted successfully.');
                    setBooks(books.filter(book => book.id !== id));
                },
                onError: (errors) => {
                    console.error('Error deleting book:', errors);
                    setError('Failed to delete the book. Please try again.');
                }
            });
        }
    };

    const closeView = () => setSelectedBook(null);

    if (loading) return <Spinner animation="border" />;

    return (
        <Container>
            {selectedBook && (
                <div className="mb-4">
                    <ViewCard book={selectedBook} onClose={closeView} />
                </div>
            )}
            
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Published Year</th>
                        <th>Genre</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.published_year}</td>
                            <td>{book.genere}</td>
                            <td>
                                <Button variant="primary" size="sm" className="me-2" onClick={() => handleView(book.id)}>
                                    View
                                </Button>
                                <Button variant="warning" size="sm" className="me-2" onClick={() => handleEdit(book.id)}>
                                    Edit
                                </Button>
                                <Button variant="danger" size="sm" onClick={() => handleDelete(book.id)} className="delete-button">
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default BookList;
