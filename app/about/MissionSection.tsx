
'use client';

export default function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Our Mission & Vision
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-xl flex-shrink-0">
                  <i className="ri-target-fill text-green-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide convenient, reliable, and environmentally responsible scrap collection services 
                    while offering fair compensation to our customers. We aim to make recycling accessible 
                    and profitable for everyone.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl flex-shrink-0">
                  <i className="ri-eye-fill text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To become the leading sustainable waste management company, creating a circular economy 
                    where nothing goes to waste. We envision a world where every material finds new life 
                    through innovative recycling solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-xl flex-shrink-0">
                  <i className="ri-heart-fill text-purple-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Integrity, sustainability, and customer satisfaction guide everything we do. 
                    We believe in transparent pricing, reliable service, and building long-term 
                    relationships with our community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Modern%20sustainable%20recycling%20facility%20with%20advanced%20sorting%20technology%20clean%20industrial%20environment%20workers%20in%20professional%20uniforms%20processing%20various%20recyclable%20materials%20conveyor%20belts%20organized%20waste%20management%20green%20technology%20eco-friendly%20operations%20natural%20lighting&width=600&height=700&seq=mission-image&orientation=portrait"
              alt="Our Mission"
              className="w-full rounded-2xl shadow-2xl object-cover object-top"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Eco-Friendly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
