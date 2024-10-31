import { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import BookForm from '@/Components/BookComponents/BookForm';

const EditBook = ({ bookId }) => {
    const [data, setData] = useState({
        title: '',
        author: '',
        published_year: '',
        genere: '',
        description: '',
    });
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);
    const [fetchError, setFetchError] = useState(null); // State to handle fetch errors

    // Fetch the book data on component mount
    useEffect(() => {
        const fetchBookData = async () => {
            try {
                const response = await fetch(`/books/${bookId}`);
                if (!response.ok) throw new Error('Failed to fetch book data');
                
                const book = await response.json();
                console.log('Fetched book data:', book); // Debugging log

                // Check if book data is retrieved
                if (book) {
                    setData({
                        title: book.title || '',
                        author: book.author || '',
                        published_year: book.published_year || '',
                        genere: book.genere || '',
                        description: book.description || '',
                    });
                    console.log('Data set in state:', data); // Verify data setting
                }
            } catch (error) {
                console.error("Failed to fetch book data:", error);
                setFetchError('Failed to fetch book data. Please try again later.'); // Set fetch error message
            }
        };

        fetchBookData();
    }, [bookId]);

    const onSubmit = (e) => {
        e.preventDefault();
        setProcessing(true);

        Inertia.put(`/books/${bookId}`, data, {
            onError: (error) => {
                setErrors(error);
                setProcessing(false);
            },
            onSuccess: () => {
                console.log('Book updated successfully');
            },
            onFinish: () => {
                setProcessing(false);
            },
        });
    };

    return (
        <div>
            {fetchError && <div className="alert alert-danger">{fetchError}</div>} {/* Display fetch error */}
            <BookForm
                data={data}
                setData={setData}
                processing={processing}
                errors={errors}
                onSubmit={onSubmit}
                buttonText="Update Book"
            />
        </div>
    );
};

export default EditBook;
