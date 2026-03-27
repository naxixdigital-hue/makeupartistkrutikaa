import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Hero() {

  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <section className="relative h-[35rem] md:h-[50rem] flex items-end pb-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/shalaka.JPG)'
        }}
      >
<div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent"></div>      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-4 text-left text-white">
        <h1 className="text-5xl md:text-7xl mb-6 tracking-wide">
          Glamour & Grace
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-pink-100">
          Professional Makeup Artist
        </p>

        <p className="text-lg md:text-xl mb-10 max-w-2xl opacity-90">
          Transforming beauty for every occasion - from your special day to life's precious moments
        </p>

        <Link 
          href="https://wa.me/${WHATSAPP_NUMBER}?text=Hello%21%20I%20want%20to%20book%20a%20makeup%20appointment.%0APackage%2Foccasions%3A%20%5Bplease%20fill%5D%0ADate%3A%20%5Bplease%20fill%5D%0ATime%3A%20%5Bplease%20fill%5D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-6 py-2 rounded-full transition-colors text-lg"
        >
          Book Your Appointment
        </Link>
      </div>
    </section>
  );
}