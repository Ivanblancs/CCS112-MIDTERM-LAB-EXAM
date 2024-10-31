import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';
import { Container } from 'react-bootstrap'; // Import Container

export default function BookForm({ data, setData, processing, errors, onSubmit, buttonText }) {
    const handleChange = (field) => (e) => {
        const value = e.target.value;
        setData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <GuestLayout>
            <Head title={buttonText} /> {/* Set title dynamically based on buttonText */}

            <Container className="my-4"> {/* Add a container for layout */}
                 <h1 
                    className="text-center" 
                    style={{ 
                        fontWeight: 'bold', 
                        fontFamily: 'Times New Roman', 
                        fontSize: '2.5rem' // Adjust size as needed
                    }}
                >
                    {buttonText} {/* Dynamic title */}
                </h1>

                <form onSubmit={onSubmit}>
                    <div>
                        <InputLabel htmlFor="title" value="Title" />
                        <TextInput
                            id="title"
                            name="title"
                            value={data.title || ''}
                            className="mt-1 block w-full"
                            onChange={handleChange('title')}
                            required
                        />
                        <InputError message={errors.title} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="author" value="Author" />
                        <TextInput
                            id="author"
                            name="author"
                            value={data.author || ''}
                            className="mt-1 block w-full"
                            onChange={handleChange('author')}
                            required
                        />
                        <InputError message={errors.author} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="published_year" value="Published Year" />
                        <TextInput
                            id="published_year"
                            type="number"
                            name="published_year"
                            value={data.published_year || ''}
                            className="mt-1 block w-full"
                            onChange={handleChange('published_year')}
                            required
                        />
                        <InputError message={errors.published_year} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="genere" value="Genere" />
                        <TextInput
                            id="genere"
                            name="genere"
                            value={data.genere || ''}
                            className="mt-1 block w-full"
                            onChange={handleChange('genere')}
                            required
                        />
                        <InputError message={errors.genere} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="description" value="Description" />
                        <TextInput
                            id="description"
                            name="description"
                            value={data.description || ''}
                            className="mt-1 block w-full"
                            onChange={handleChange('description')}
                            required
                        />
                        <InputError message={errors.description} className="mt-2" />
                    </div>

                    <div className="mt-4 flex items-center justify-end">
                        <Link
                            href={route('dashboard')}
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Go back to Dashboard
                        </Link>

                        <PrimaryButton className="ms-4" disabled={processing}>
                            {buttonText} {/* Dynamic button text */}
                        </PrimaryButton>
                    </div>
                </form>
            </Container>
        </GuestLayout>
    );
}
