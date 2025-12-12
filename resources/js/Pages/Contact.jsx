import React from 'react';
import ShopLayout from '@/Layouts/ShopLayout';
import { Head } from '@inertiajs/react';

export default function Contact({ auth }) {
    return (
        <ShopLayout user={auth.user}>
            <Head title="Contact Us" />
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">
                    <h1 className="text-3xl font-bold text-green-800 mb-4">Contact Us</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-gray-700 mb-4">
                                Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </p>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">Address</h3>
                                <p className="text-gray-600">123 Fashion Ave, Design District, NY 10001</p>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">Email</h3>
                                <p className="text-gray-600">contact@delightboutique.com</p>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">Phone</h3>
                                <p className="text-gray-600">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg">
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                    <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500" placeholder="Your Name" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                    <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500" placeholder="Your Email" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500" rows="4" placeholder="How can we help?"></textarea>
                                </div>
                                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </ShopLayout>
    );
}
