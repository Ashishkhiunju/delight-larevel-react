import React from 'react';
import ShopLayout from '@/Layouts/ShopLayout';
import { Head } from '@inertiajs/react';

export default function About({ auth }) {
    return (
        <ShopLayout user={auth.user}>
            <Head title="About Us" />
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">
                    <h1 className="text-3xl font-bold text-green-800 mb-4">About Delight Boutique</h1>
                    <div className="prose text-gray-700">
                        <p className="mb-4">
                            Welcome to Delight Boutique, where fashion meets elegance. We are dedicated to providing you with the very best of boutique items, with an emphasis on quality, style, and uniqueness.
                        </p>
                        <p className="mb-4">
                            Founded in 2025, Delight Boutique has come a long way from its beginnings. When we first started out, our passion for eco-friendly and stylish clothing drove us to start our own business.
                        </p>
                        <p>
                            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                        </p>
                    </div>
                </div>
            </div>
        </ShopLayout>
    );
}
