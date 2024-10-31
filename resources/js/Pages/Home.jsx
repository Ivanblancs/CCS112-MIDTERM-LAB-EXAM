// Home.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookList from '@/Components/BookComponents/BookList';


const Home = () => {
    // Dummy data and handler functions for example purposes
    const books = [{ title: "Book Title", author: "Author", published_year: 2020, genre: "Fiction" }];
    const handleView = (book) => console.log("Viewing book:", book);
    const handleEdit = (book) => console.log("Editing book:", book);
    const handleDelete = (book) => console.log("Deleting book:", book);
    const handleSubmit = (data) => console.log("Form submitted with:", data);

    return (
        <Container fluid className="py-5">
            <Row>
                <Col md={8} lg={6} className="mx-auto">
                <h1 
                                    className="text-center" 
                                    style={{ 
                                    fontWeight: 'bold', 
                                    fontFamily: 'Times New Roman', 
                                    fontSize: '2.5rem' // Adjust size as needed
                            }}
                              >
                                 Book List
                              </h1>
                    <BookList books={books} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
                    
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
