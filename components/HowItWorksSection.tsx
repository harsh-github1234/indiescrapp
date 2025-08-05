
'use client';
import Link from 'next/link';

export default function HowItWorksSection() {
  const steps = [
    {
      step: '01',
      title: 'Book Online',
      description: 'Schedule your pickup through our easy booking form. Choose your preferred date and time.',
      icon: 'ri-calendar-check-fill'
    },
    {
      step: '02',
      title: 'We Come to You',
      description: 'Our professional team arrives at your location with proper equipment and vehicles.',
      icon: 'ri-truck-fill'
    },
    {
      step: '03',
      title: 'Evaluate & Weigh',
      description: 'We assess your materials, provide transparent pricing, and weigh everything accurately.',
      icon: 'ri-scales-3-fill'
    },
    {
      step: '04',
      title: 'Get Paid',
      description: 'Receive instant payment via cash, check, or digital transfer. No waiting required.',
      icon: 'ri-money-dollar-circle-fill'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple 4-step process makes selling your scrap hassle-free. 
            From booking to payment, we handle everything professionally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 flex items-center justify-center bg-green-600 rounded-full mx-auto mb-6">
                  <i className={`${step.icon} text-white text-2xl`}></i>
                </div>
                
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <i className="ri-arrow-right-line text-green-600 text-2xl"></i>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-green-600 rounded-2xl p-8 md:p-12 mt-16 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Turn Your Scrap Into Cash?</h3>
          <p className="text-xl mb-6 text-green-100">
            Join thousands of satisfied customers who trust us with their scrap collection needs.
          </p>
          <Link href="/book-appointment" className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
            Book Your Pickup Today
          </Link>
        </div>
      </div>
    </section>
  );
}
