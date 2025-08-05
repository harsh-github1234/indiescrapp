
'use client';

export default function BookingHero() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Schedule Your Scrap Pickup
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-green-100">
          Fill out the form below and we'll come to your location at your convenience. 
          Get instant quotes and competitive prices for all your recyclable materials.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4">
              <i className="ri-calendar-check-fill text-white text-xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-sm text-green-100">Choose your preferred date and time</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4">
              <i className="ri-truck-fill text-white text-xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Free Pickup</h3>
            <p className="text-sm text-green-100">No transportation costs involved</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4">
              <i className="ri-money-dollar-circle-fill text-white text-xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Instant Payment</h3>
            <p className="text-sm text-green-100">Get paid on the spot</p>
          </div>
        </div>
      </div>
    </section>
  );
}
