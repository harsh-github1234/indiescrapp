
'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4" style={{ fontFamily: 'Pacifico, serif' }}>
              IndieScrap
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for eco-friendly scrap collection and recycling services. Making waste management simple and sustainable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-green-600 rounded-full hover:bg-green-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-green-600 rounded-full hover:bg-green-700 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-green-600 rounded-full hover:bg-green-700 transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-sm"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Metal Scrap Collection</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Paper & Carboard</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Electronic Waste</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Plastic Recycling</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/book-appointment" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Book Appointment</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <i className="ri-phone-fill text-green-400 mr-3"></i>
                <span className="text-gray-400"> 919919235546</span>
              </div>
              <div className="flex items-center">
                <i className="ri-mail-fill text-green-400 mr-3"></i>
                <span className="text-gray-400">info@IndieScrap.com</span>
              </div>
              <div className="flex items-center">
                <i className="ri-map-pin-fill text-green-400 mr-3"></i>
                <span className="text-gray-400">Supermarket lalbagh kaiserbagh lucknow  </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            2024 IndieScrap. All rights reserved. | Making recycling easier for everyone.
          </p>
        </div>
      </div>
    </footer>
  );
}
