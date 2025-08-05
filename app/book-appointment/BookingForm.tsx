
'use client';
import { useState } from 'react';

export default function BookingForm() {
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    preferredDate: '',
    preferredTime: '',
    estimatedWeight: '',
    specialInstructions: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const materials = [
    { id: 'metal', name: 'Metal Scrap', price: '₹25 - ₹180/kg' },
    { id: 'electronics', name: 'Electronic Waste', price: '₹15 - ₹500/item' },
    { id: 'paper', name: 'Paper & Cardboard', price: '₹8 - ₹15/kg' },
    { id: 'plastic', name: 'Plastic Materials', price: '₹12 - ₹35/kg' },
    { id: 'vehicle', name: 'Vehicle Parts', price: '₹50 - ₹1,500/item' },
    { id: 'household', name: 'Household Items', price: '₹30 - ₹800/item' }
  ];

  const timeSlots = [
    '8:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM'
  ];

  const handleMaterialToggle = (materialId: string) => {
    setSelectedMaterials(prev => 
      prev.includes(materialId) 
        ? prev.filter(id => id !== materialId)
        : [...prev, materialId]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Validate materials selection
    if (selectedMaterials.length === 0) {
      setSubmitStatus('Please select at least one material type.');
      setIsSubmitting(false);
      return;
    }

    // Validate text area length
    if (formData.specialInstructions.length > 500) {
      setSubmitStatus('Special instructions cannot exceed 500 characters.');
      setIsSubmitting(false);
      return;
    }

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'address', 'city', 'zipCode', 'preferredDate', 'preferredTime'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData].trim());
    
    if (missingFields.length > 0) {
      setSubmitStatus('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate successful submission since there's no backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        preferredDate: '',
        preferredTime: '',
        estimatedWeight: '',
        specialInstructions: ''
      });
      setSelectedMaterials([]);
    } catch (error) {
      setSubmitStatus('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <form id="indiescrap-booking" onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Street Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      placeholder="Enter your address"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">ZIP Code *</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                        placeholder="ZIP"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Pickup Details</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Materials to Collect *</label>
                    <div className="grid grid-cols-1 gap-3">
                      {materials.map((material) => (
                        <label key={material.id} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            name="materials"
                            value={material.id}
                            checked={selectedMaterials.includes(material.id)}
                            onChange={() => handleMaterialToggle(material.id)}
                            className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                          />
                          <div className="ml-3 flex-1">
                            <div className="font-medium text-gray-900">{material.name}</div>
                            <div className="text-sm text-green-600">{material.price}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date *</label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time *</label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      >
                        <option value="">Select time slot</option>
                        {timeSlots.map((slot, index) => (
                          <option key={index} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Weight/Quantity</label>
                    <input
                      type="text"
                      name="estimatedWeight"
                      value={formData.estimatedWeight}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      placeholder="e.g., 50 kg, 10 items, 5 bags"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Special Instructions</label>
                    <textarea
                      name="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={handleInputChange}
                      maxLength={500}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm resize-none"
                      placeholder="Any special instructions for pickup (max 500 characters)"
                    ></textarea>
                    <div className="text-xs text-gray-500 mt-1">
                      {formData.specialInstructions.length}/500 characters
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-check-circle-fill text-green-600 text-xl mr-3"></i>
                    <div>
                      <div className="font-semibold">Booking Confirmed!</div>
                      <div className="text-sm">Thank you! Your appointment has been booked successfully. We'll contact you within 24 hours to confirm the pickup details.</div>
                    </div>
                  </div>
                </div>
              )}
              
              {submitStatus && submitStatus !== 'success' && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-error-warning-fill text-red-600 text-xl mr-3"></i>
                    <div>
                      <div className="font-semibold">Error</div>
                      <div className="text-sm">{submitStatus}</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="text-sm text-gray-600">
                  * Required fields. We'll contact you within 24 hours to confirm your appointment.
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin text-xl"></i>
                      Booking...
                    </>
                  ) : (
                    <>
                      <i className="ri-calendar-check-fill text-xl"></i>
                      Book Appointment
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
