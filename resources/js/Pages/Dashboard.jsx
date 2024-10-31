import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrimaryButton from '@/Components/PrimaryButton';
import { Inertia } from '@inertiajs/inertia';
import axios from 'axios';
export default function Dashboard() {

    const handleAddProduct = () => {
        Inertia.visit('/add-book');
    };
    return (
        <AuthenticatedLayout
            header={
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                       Book Dashboard
                    </h2>
                    <PrimaryButton className="ms-4" onClick={handleAddProduct}>
                                Add Product
                    </PrimaryButton>

                </div>
        }
        >
            <Head title="Dashboard" />


                        <div className="p-6 text-gray-900">
                           
                            <Home/>
                        </div>
                
        </AuthenticatedLayout>
    );
}
