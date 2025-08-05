
'use client';

export default function TeamSection() {
  const team = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO & Founder',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20businessman%20in%20his%2040s%20wearing%20dark%20suit%20smiling%20confidently%20modern%20office%20background%20environmental%20leadership%20sustainable%20business%20professional%20headshot%20clean%20background%20Indian%20CEO%20executive&width=400&height=400&seq=indian-ceo&orientation=squarish',
      bio: 'Environmental engineer with 20+ years in waste management and sustainability.'
    },
    {
      name: 'Priya Sharma',
      position: 'Operations Director',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20businesswoman%20in%20her%2030s%20wearing%20professional%20attire%20confident%20smile%20operations%20management%20background%20sustainable%20business%20professional%20headshot%20clean%20background%20Indian%20female%20executive&width=400&height=400&seq=indian-ops-director&orientation=squarish',
      bio: 'Expert in logistics and supply chain optimization for recycling operations.'
    },
    {
      name: 'Amit Patel',
      position: 'Head of Customer Relations',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20businessman%20in%20his%2030s%20wearing%20business%20casual%20attire%20friendly%20smile%20customer%20service%20background%20sustainable%20business%20professional%20headshot%20clean%20background%20Indian%20male%20executive&width=400&height=400&seq=indian-customer-head&orientation=squarish',
      bio: 'Dedicated to ensuring exceptional customer experience and satisfaction.'
    },
    {
      name: 'Kavya Reddy',
      position: 'Environmental Specialist',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20environmental%20scientist%20woman%20in%20her%2030s%20wearing%20professional%20attire%20confident%20expression%20environmental%20conservation%20background%20sustainable%20technology%20professional%20headshot%20clean%20background%20Indian%20female%20scientist&width=400&height=400&seq=indian-env-specialist&orientation=squarish',
      bio: 'PhD in Environmental Science, leading our sustainability initiatives.'
    },
    {
      name: 'Arjun Singh',
      position: 'Technology Manager',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20tech%20manager%20in%20his%2030s%20wearing%20casual%20business%20attire%20friendly%20smile%20technology%20background%20sustainable%20innovation%20professional%20headshot%20clean%20background%20Indian%20male%20tech%20professional&width=400&height=400&seq=indian-tech-manager&orientation=squarish',
      bio: 'Innovating digital solutions to streamline recycling processes.'
    },
    {
      name: 'Sneha Joshi',
      position: 'Quality Assurance Lead',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20businesswoman%20in%20her%2030s%20wearing%20professional%20attire%20confident%20smile%20quality%20control%20background%20sustainable%20business%20professional%20headshot%20clean%20background%20Indian%20female%20quality%20manager&width=400&height=400&seq=indian-qa-lead&orientation=squarish',
      bio: 'Ensuring the highest standards in all our collection and processing services.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our passionate team of professionals brings together decades of experience 
            in environmental science, logistics, and customer service to serve you better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-4">{member.position}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                
                <div className="flex space-x-3 mt-4">
                  <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-green-100 transition-colors cursor-pointer">
                    <i className="ri-linkedin-fill text-gray-600 hover:text-green-600 text-sm"></i>
                  </a>
                  <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-green-100 transition-colors cursor-pointer">
                    <i className="ri-mail-fill text-gray-600 hover:text-green-600 text-sm"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-50 rounded-2xl p-8 md:p-12 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Join Our Growing Team
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We're always looking for passionate individuals who share our commitment 
                to environmental sustainability and exceptional customer service.
              </p>
              <a href="/careers" className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap">
                View Open Positions
              </a>
            </div>
            
            <div className="text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Diverse%20team%20of%20professionals%20working%20together%20in%20modern%20sustainable%20office%20environment%20collaborative%20workspace%20environmental%20company%20teamwork%20professional%20atmosphere%20green%20technology%20background&width=500&height=300&seq=team-work&orientation=landscape"
                alt="Join Our Team"
                className="w-full rounded-xl object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
