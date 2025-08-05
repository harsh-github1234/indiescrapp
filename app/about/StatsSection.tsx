
'use client';

export default function StatsSection() {
  const stats = [
    {
      number: '50,000+',
      label: 'Satisfied Customers',
      icon: 'ri-user-heart-fill',
      description: 'Trust us with their recycling needs'
    },
    {
      number: '2.5M',
      label: 'Tons Recycled',
      icon: 'ri-recycle-fill',
      description: 'Materials diverted from landfills'
    },
    {
      number: '98%',
      label: 'Customer Satisfaction',
      icon: 'ri-star-fill',
      description: 'Rate us 5 stars for our service'
    },
    {
      number: '24/7',
      label: 'Support Available',
      icon: 'ri-customer-service-2-fill',
      description: 'Round-the-clock assistance'
    },
    {
      number: '15+',
      label: 'Years Experience',
      icon: 'ri-award-fill',
      description: 'Leading the recycling industry'
    },
    {
      number: '85%',
      label: 'Carbon Reduction',
      icon: 'ri-leaf-fill',
      description: 'Compared to traditional disposal'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These numbers represent our commitment to excellence and our positive impact 
            on the environment and community over the years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-6">
                <i className={`${stat.icon} text-green-600 text-2xl`}></i>
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {stat.label}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 mt-16 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Environmental Mission
          </h3>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Every piece of scrap you recycle with us makes a difference. 
            Together, we're building a more sustainable future for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book-appointment" className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
              Start Recycling Today
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap">
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
