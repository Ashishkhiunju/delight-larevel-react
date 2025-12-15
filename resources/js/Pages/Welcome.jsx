import React from 'react';
import ShopLayout from '@/Layouts/ShopLayout';
import { Head } from '@inertiajs/react';

export default function Welcome({ auth, items }) {
    return (
        <ShopLayout user={auth.user}>
            <Head title="Boutique Shop" />

            {/* Hero Section */}
            <div className="relative mb-12">
                <div className="absolute inset-0 bg-black opacity-20 z-10 rounded-lg"></div>
                <img
                    src="/images/banner3.jpg"
                    alt="Delight Boutique Banner"
                    className="w-full h-auto max-h-[400px] object-contain rounded-lg shadow-xl mx-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="text-center text-white">
                        {/* <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl drop-shadow-lg">
                            Prime Delight Boutique
                        </h1>
                        <p className="mt-4 text-xl sm:text-2xl font-light drop-shadow-md">
                            Elegance in Every Detail
                        </p> */}
                    </div>
                </div>
            </div>

            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">
                    Our Signature Creations
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
                    Discover our collection of exclusive items selected just for you.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {items && items.length > 0 ? (
                    items.map((item) => (
                        <div key={item.id} className="group relative bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                {item.image_path ? (
                                    <img
                                        src={`/uploads/${item.image_path}`}
                                        alt={item.name}
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-400">
                                        No Image
                                    </div>
                                )}
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {item.name}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{item.color} | Size {item.size}</p>
                                </div>
                                {/* <p className="text-sm font-medium text-gray-900">${item.price}</p> */}
                            </div>
                            {item.description && (
                                <p className="mt-2 text-xs text-gray-500 line-clamp-2">{item.description}</p>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-10 text-gray-500">
                        No items found in the boutique yet. Check back soon!
                    </div>
                )}
            </div>

            {/* Map Section */}
            <div className="mt-20">
                <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Visit Us</h2>
                <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                    {/* <iframe
                        src="https://maps.app.goo.gl/727hZP8ZHo2AWhws6"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe> */}
                    <iframe
                        src="https://www.google.com/maps?q=27.666755, 85.404900&z=18&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </ShopLayout>
    );
}
