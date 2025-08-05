
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-green-600" style={{fontFamily: 'Pacifico, serif'}}>
            IndieScrap
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
              Services
            </Link>
            <Link href="/book-appointment" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap">
              Book Now
            </Link>
          </nav>

          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
                Services
              </Link>
              <Link href="/book-appointment" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors text-center cursor-pointer whitespace-nowrap">
                Book Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
