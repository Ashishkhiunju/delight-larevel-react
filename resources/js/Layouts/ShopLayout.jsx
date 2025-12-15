import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function ShopLayout({ user, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

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
                                    {/* <Link
                                        href={route('register')}
                                        className="ml-4 text-sm text-gray-700 hover:text-gray-900 underline"
                                    >
                                        Register
                                    </Link> */}
                                </>
                            )}
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-green-800 hover:text-green-900 hover:bg-green-300 focus:outline-none focus:bg-green-300 focus:text-green-900 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <Link
                            href="/"
                            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition duration-150 ease-in-out ${route().current('home')
                                ? 'border-green-600 text-green-900 bg-green-100'
                                : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-green-50 hover:border-gray-300'
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href={route('about')}
                            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition duration-150 ease-in-out ${route().current('about')
                                ? 'border-green-600 text-green-900 bg-green-100'
                                : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-green-50 hover:border-gray-300'
                                }`}
                        >
                            About Us
                        </Link>
                        {/* <Link
                            href={route('contact')}
                            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition duration-150 ease-in-out ${
                                route().current('contact')
                                    ? 'border-green-600 text-green-900 bg-green-100'
                                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-green-50 hover:border-gray-300'
                            }`}
                        >
                            Contact
                        </Link> */}
                    </div>

                    <div className="pt-4 pb-1 border-t border-green-300">
                        <div className="px-4">
                            {user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="block font-medium text-base text-gray-800"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <div className="space-y-1">
                                    {/* <Link
                                        href={route('login')}
                                        className="block font-medium text-base text-gray-800"
                                    >
                                        Log in
                                    </Link> */}
                                    {/* <Link
                                        href={route('register')}
                                        className="block font-medium text-base text-gray-800"
                                    >
                                        Register
                                    </Link> */}
                                </div>
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
