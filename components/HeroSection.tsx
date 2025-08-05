
'use client';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 to-blue-50"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20eco-friendly%20recycling%20facility%20with%20green%20technology%2C%20clean%20industrial%20environment%2C%20sustainable%20waste%20management%2C%20bright%20natural%20lighting%2C%20professional%20workers%20sorting%20recyclable%20materials%2C%20conveyor%20belts%20with%20organized%20scrap%20metal%20and%20plastic%20items%2C%20green%20and%20blue%20color%20scheme%2C%20minimalist%20clean%20background%2C%20environmental%20consciousness%2C%20modern%20equipment%2C%20spacious%20warehouse%20setting&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Turn Your
              <span className="text-green-400 block">Scrap Into Cash</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Professional scrap collection service at your doorstep. We handle metals, electronics, paper, and more with competitive pricing and eco-friendly disposal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/book-appointment" className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors text-center cursor-pointer whitespace-nowrap">
                Book Free Pickup
              </Link>
              <Link href="/about" className="bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-colors text-center cursor-pointer whitespace-nowrap">
                Learn More
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-green-600 rounded-full mx-auto mb-3">
                  <i className="ri-truck-fill text-white text-xl"></i>
                </div>
                <h3 className="text-white font-semibold mb-2">Free Pickup</h3>
                <p className="text-gray-200 text-sm">No transportation costs</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-green-600 rounded-full mx-auto mb-3">
                  <i className="ri-money-dollar-circle-fill text-white text-xl"></i>
                </div>
                <h3 className="text-white font-semibold mb-2">Best Prices</h3>
                <p className="text-gray-200 text-sm">Competitive market rates</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-green-600 rounded-full mx-auto mb-3">
                  <i className="ri-leaf-fill text-white text-xl"></i>
                </div>
                <h3 className="text-white font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-gray-200 text-sm">Sustainable recycling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
