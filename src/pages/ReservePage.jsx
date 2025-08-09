import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header.jsx';

export default function ReservePage() {
  const { t } = useTranslation();

  useEffect(() => {
    // Load BookingNinja script dynamically
    const script = document.createElement('script');
    script.src = 'https://app.bookingninja.io/build/embed/booking.js';
    script.async = true;
    script.onload = () => {
      if (window.BookingNinja) {
        window.BookingNinja.embed({
          storeId: 'delice-brugge',
          container: '#booking-widget',
          baseUrl: 'https://bookings.letsbookfor.com',
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="container-responsive py-10 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">{t('common.reserve.heading')}</h1>

        <div id="booking-widget" className="mt-6 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm" />
      </div>
    </div>
  );
}


