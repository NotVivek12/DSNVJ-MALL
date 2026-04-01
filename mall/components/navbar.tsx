'use client';

import React from 'react';
import Link from 'next/link';


export default function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Link href="/" className="text-2xl font-bold text-blue-600">
                            Mall
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-blue-600">
                            Home
                        </Link>
                        <Link href="/products" className="text-gray-700 hover:text-blue-600">
                            Products
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-blue-600">
                            About
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                            Contact
                        </Link>
                    </div>

                    {/* Cart Icon */}
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-700 hover:text-blue-600">
                            🛒
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}