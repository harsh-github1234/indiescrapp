
'use client';
import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-metal-fill',
      title: 'Metal Scrap',
      description: 'Aluminum, copper, steel, iron, and other metals at competitive prices',
      price: '₹25 - ₹180/kg',
      image: 'https://readdy.ai/api/search-image?query=Organized%20metal%20scrap%20collection%20with%20various%20types%20of%20metals%20including%20aluminum%20cans%20copper%20pipes%20steel%20sheets%20iron%20bars%20neatly%20sorted%20in%20industrial%20containers%20bright%20clean%20facility%20professional%20recycling%20environment%20green%20technology%20sustainable%20practice&width=400&height=300&seq=metal-scrap&orientation=landscape'
    },
    {
      icon: 'ri-computer-fill',
      title: 'Electronic Waste',
      description: 'Phones, laptops, TVs, appliances - safe disposal with data security',
      price: '₹15 - ₹500/item',
      image: 'https://readdy.ai/api/search-image?query=Electronic%20waste%20collection%20with%20old%20computers%20smartphones%20laptops%20tablets%20circuit%20boards%20properly%20organized%20for%20recycling%20modern%20facility%20sustainable%20technology%20disposal%20environmental%20responsibility%20clean%20sorting%20area&width=400&height=300&seq=electronics&orientation=landscape'
    },
    {
      icon: 'ri-file-paper-fill',
      title: 'Paper & Cardboard',
      description: 'Newspapers, magazines, cardboard boxes, office paper',
      price: '₹8 - ₹15/kg',
      image: 'https://readdy.ai/api/search-image?query=Paper%20and%20cardboard%20recycling%20with%20neatly%20stacked%20newspapers%20magazines%20cardboard%20boxes%20office%20documents%20organized%20in%20recycling%20facility%20clean%20industrial%20environment%20sustainable%20paper%20waste%20management%20green%20recycling%20process&width=400&height=300&seq=paper&orientation=landscape'
    },
    {
      icon: 'ri-recycle-fill',
      title: 'Plastic Materials',
      description: 'All types of plastic containers, bottles, and packaging materials',
      price: '₹12 - ₹35/kg',
      image: 'https://readdy.ai/api/search-image?query=Plastic%20recycling%20facility%20with%20sorted%20plastic%20bottles%20containers%20packaging%20materials%20organized%20in%20color-coded%20bins%20modern%20clean%20industrial%20environment%20sustainable%20plastic%20waste%20management%20eco-friendly%20recycling%20process&width=400&height=300&seq=plastic&orientation=landscape'
    },
    {
      icon: 'ri-car-fill',
      title: 'Vehicle Parts',
      description: 'Auto batteries, tires, car parts, and automotive scrap',
      price: '₹50 - ₹1,500/item',
      image: 'https://readdy.ai/api/search-image?query=Automotive%20scrap%20yard%20with%20organized%20car%20parts%20batteries%20tires%20engine%20components%20professional%20vehicle%20recycling%20facility%20clean%20industrial%20environment%20sustainable%20auto%20parts%20disposal%20green%20recycling%20technology&width=400&height=300&seq=vehicle&orientation=landscape'
    },
    {
      icon: 'ri-home-fill',
      title: 'Household Items',
      description: 'Furniture, appliances, and other household recyclables',
      price: '₹30 - ₹800/item',
      image: 'https://readdy.ai/api/search-image?query=Household%20items%20recycling%20with%20old%20furniture%20appliances%20kitchen%20equipment%20organized%20in%20clean%20recycling%20facility%20sustainable%20household%20waste%20management%20professional%20sorting%20area%20eco-friendly%20disposal%20process&width=400&height=300&seq=household&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Collect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We accept a wide range of materials and offer competitive prices for all types of scrap. 
            Our expert team ensures proper handling and maximum value for your materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-xl mb-4">
                  <i className={`${service.icon} text-green-600 text-xl`}></i>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">{service.price}</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/book-appointment" className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap">
            Schedule Pickup Now
          </Link>
        </div>
      </div>
    </section>
  );
}
