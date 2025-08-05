
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BookingForm from './BookingForm';
import BookingHero from './BookingHero';

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <BookingHero />
      <BookingForm />
      <Footer />
    </div>
  );
}
