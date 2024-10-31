import React, { useState } from 'react';
import { useForm, router } from '@inertiajs/react';
import BookForm from '@/Components/BookComponents/BookForm';

const AddBook = () => {
    const { data, setData, processing, errors, reset } = useForm({
        title: '',
        author: '',
        published_year: '',
        genere: '',
        description: '',
    });

    const [submitError, setSubmitError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitError(null); // Reset the submit error before submitting

        router.post('/books', data, {
            onSuccess: () => {
                reset();
            },
            onError: (errors) => {
                // Capture the error messages from the API
                setSubmitError('Failed to add the book. Please check your input.');
                console.error('Error adding book:', errors);
            },
        });
    };
    
    return (
        <div>
            {submitError && <div className="alert alert-danger">{submitError}</div>}
            <BookForm
                data={data}
                setData={setData}
                processing={processing}
                errors={errors}
                onSubmit={handleSubmit}
                buttonText="Add Book" // Set the button text to "Add Book"
            />
        </div>
    );
};

export default AddBook;
