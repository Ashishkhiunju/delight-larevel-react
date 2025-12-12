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
                    src="/images/banner.png"
                    alt="Delight Boutique Banner"
                    className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl drop-shadow-lg">
                            Prime Delight Boutique
                        </h1>
                        <p className="mt-4 text-xl sm:text-2xl font-light drop-shadow-md">
                            Elegance in Every Detail
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">
                    Latest Collection
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
                                        src={`/storage/${item.image_path}`}
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
                                <p className="text-sm font-medium text-gray-900">${item.price}</p>
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
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184126488506!2d-73.98773128459411!3d40.74844057932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629789876543!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </ShopLayout>
    );
}
