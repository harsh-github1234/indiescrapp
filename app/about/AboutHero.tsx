
'use client';

export default function AboutHero() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-green-600 to-blue-600 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://readdy.ai/api/search-image?query=Sustainable%20recycling%20industry%20with%20modern%20eco-friendly%20facility%20workers%20in%20safety%20gear%20processing%20recyclable%20materials%20conveyor%20systems%20organized%20waste%20sorting%20green%20technology%20environmental%20conservation%20industrial%20setting%20with%20natural%20lighting%20professional%20atmosphere&width=1920&height=800&seq=about-hero&orientation=landscape"
          alt="About Us Background"
          className="w-full h-full object-cover object-top"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Leading the Way in 
            <span className="block text-green-200">Sustainable Recycling</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed mb-8 text-green-100">
            For over 15 years, IndieScrap has been transforming waste into value, 
            building a greener future through innovative recycling solutions and exceptional customer service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-green-200">Years of Experience</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-green-200">Happy Customers</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">2M+</div>
              <div className="text-green-200">Tons Recycled</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
