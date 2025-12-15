import React from 'react';
import { Link } from '@inertiajs/react';

export default function ShopLayout({ user, children }) {
    return (
        <div className="min-h-screen bg-green-50 text-gray-800 font-sans">
            <nav className="bg-green-200 border-b border-green-300 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/" className="text-2xl font-bold text-green-800">
                                    Prime Delight Boutique
                                </Link>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <Link
                                    href="/"
                                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out ${route().current('home')
                                        ? 'border-green-600 text-gray-900 focus:border-green-700'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'
                                        }`}
                                >
                                    Home
                                </Link>
                                <Link
                                    href={route('about')}
                                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out ${route().current('about')
                                        ? 'border-green-600 text-gray-900 focus:border-green-700'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'
                                        }`}
                                >
                                    About Us
                                </Link>
                                {/* <Link
                                    href={route('contact')}
                                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out ${route().current('contact')
                                        ? 'border-green-600 text-gray-900 focus:border-green-700'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'
                                        }`}
                                >
                                    Contact
                                </Link> */}
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            {user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="text-sm text-gray-700 hover:text-gray-900 underline"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    {/* <Link
                                        href={route('login')}
                                        className="text-sm text-gray-700 hover:text-gray-900 underline"
                                    >
                                        Log in
                                    </Link> */}
                                    <Link
                                        href={route('register')}
                                        className="ml-4 text-sm text-gray-700 hover:text-gray-900 underline"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            <main className="py-10">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>

            <footer className="bg-green-800 text-white mt-auto">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm">
                        &copy; 2025 Delight Boutique. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
