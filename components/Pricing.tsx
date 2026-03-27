import { Check, Sparkles, Crown, Star, Gift } from 'lucide-react';

const packages = [
  {
    id: 1,
    packageName: 'Bridal Makeup',
    price: '₹17,000',
    icon: Crown,
    popular: false,
    layout: 'top',
    description: 'Luxury Bridal Experience.',
    features: [
      'Professional makeup',
      'Airbrush makeup',
      'Hair styling & accessories',
      'Eye lash & lenses',
      'Draping',
      'All-day coverage',
    ],
  },
  {
    id: 2,
    packageName: 'Bridal Premium',
    price: '₹40,000',
    icon: Sparkles,
    popular: true,
    layout: 'top',
    description: 'The Ultimate Bridal Experience.',
    features: [
      'Engagement, haldi & wedding makeup',
      'Pre Bridal',
      'Airbrush makeup',
      'All-day coverage',
      'Hair styling & accessories',
      'Eye lash & lenses',
      'Nail Art',
      'Mehndi',
    ],
  },
  {
    id: 3,
    packageName: 'Engagement Makeup',
    price: '₹15,000',
    icon: Star,
    popular: false,
    layout: 'top',
    description: 'Stunning engagement look.',
    features: [
      'Professional makeup',
      'Hair styling & accessories',
      'Draping',
      'Eye lash & lenses',
      'Airbrush makeup',
    ],
  },
  {
    id: 4,
    packageName: 'Baby Shower Bliss',
    price: '₹3,500',
    icon: Gift,
    popular: false,
    layout: 'top',
    description: 'Radiant mom-to-be look.',
    features: [
      'Professional makeup',
      'Hair styling',
      'Draping',
      'Eye lash',
    ],
  },
  {
    id: 5,
    packageName: 'Festive & Party Makeup',
    price: '₹2,000+',
    icon: Sparkles,
    popular: false,
    layout: 'bottom',
    description:
      'Perfect for birthdays, small events & festive celebrations.',
    features: [
      'Basic glow finish',
      'Soft & natural look',
      'Lightweight, photo-ready makeup',
    ],
  },
  {
    id: 6,
    packageName: 'Sider Makeup',
    price: '₹2,500+',
    icon: Sparkles,
    popular: true,
    layout: 'bottom',
    description:
      'Signature sider glow look for weddings & receptions.',
    features: [
      'Lightweight, photo-ready makeup',
      'Highlights your natural features',
      'Long-lasting & comfortable',
    ],
  },
];

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
export function Pricing() {
  const generateWhatsAppLink = (packageName: string) => {
    const message = `Hello! I want to book a makeup appointment.%0APackage: ${packageName}%0ADate: [please fill]%0ATime: [please fill]`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  return (
    <section id="pricing" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-black text-4xl md:text-5xl mb-4">
            Choose Your Perfect Package
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Affordable packages tailored to make you look stunning for every special occasion
          </p>
        </div>

        {/* TOP 4 PREMIUM PACKAGES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages
            .filter((pkg) => pkg.layout === 'top')
            .map((pkg) => {
              const Icon = pkg.icon;
              return (
                <div
                  key={pkg.id}
                  className={`w-full relative rounded-2xl p-8 transition-all hover:scale-105 flex flex-col h-full ${
                    pkg.popular
                      ? 'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary)] text-white shadow-2xl'
                      : 'bg-white border-2 border-gray-200 hover:border-[var(--color-primary)] shadow-lg'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                        pkg.popular ? 'bg-white/20' : 'bg-[var(--color-primary)]'
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 ${
                          pkg.popular ? 'text-white' : 'text-[var(--color-secondary)]'
                        }`}
                      />
                    </div>

                    <h3
                      className={`text-2xl font-semibold mb-2 ${
                        pkg.popular ? 'text-white' : 'text-black'
                      }`}
                    >
                      {pkg.packageName}
                    </h3>

                    <p
                      className={`text-sm mb-4 ${
                        pkg.popular ? 'text-white/90' : 'text-gray-600'
                      }`}
                    >
                      {pkg.description}
                    </p>

                    <div className="mb-6">
                      <span
                        className={`text-5xl font-bold ${
                          pkg.popular ? 'text-white/90' : 'text-black'
                        }`}
                      >
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 mt-0.5 ${
                            pkg.popular
                              ? 'text-white'
                              : 'text-[var(--color-secondary)]'
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            pkg.popular ? 'text-white' : 'text-gray-600'
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={generateWhatsAppLink(pkg.packageName)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto w-full py-3 rounded-lg font-semibold transition-all text-center ${
                      pkg.popular
                        ? 'bg-white text-[var(--color-secondary)] hover:bg-gray-100'
                        : 'bg-[var(--color-secondary)] text-white hover:bg-[var(--color-primary)]'
                    }`}
                  >
                    Book Now
                  </a>
                </div>
              );
            })}
        </div>

        {/* BOTTOM 2 STARTER PACKAGES - Left Title, Right Bullets on desktop */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {packages
            .filter((pkg) => pkg.layout === 'bottom')
            .map((pkg) => {
              const Icon = pkg.icon;
              return (
                <div
                  key={pkg.id}
                  className={`w-full relative rounded-2xl p-8 transition-all flex flex-col md:flex-row h-full ${
                    pkg.popular
                      ? 'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary)] text-white shadow-2xl'
                      : 'bg-white border-2 border-gray-200 hover:border-[var(--color-primary)] shadow-lg'
                  }`}
                >
                  {/* LEFT SIDE - Icon, Name, Description, Price */}
                  <div className="md:w-1/2 flex flex-col justify-start items-start mb-6 md:mb-0 md:pr-6 text-center md:text-left">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                        pkg.popular ? 'bg-white/20' : 'bg-[var(--color-primary)]'
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 ${
                          pkg.popular ? 'text-white' : 'text-[var(--color-secondary)]'
                        }`}
                      />
                    </div>

                    <h3
                      className={`text-2xl font-semibold mb-2 ${
                        pkg.popular ? 'text-white' : 'text-black'
                      }`}
                    >
                      {pkg.packageName}
                    </h3>

                    <p
                      className={`text-sm mb-4 ${
                        pkg.popular ? 'text-white/90' : 'text-gray-600'
                      }`}
                    >
                      {pkg.description}
                    </p>

                    <span
                      className={`text-3xl font-bold ${
                        pkg.popular ? 'text-white/90' : 'text-black'
                      }`}
                    >
                      {pkg.price}
                    </span>
                  </div>

                  {/* RIGHT SIDE - Bullet Points + Book Button */}
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <ul className="space-y-4 mb-6">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check
                            className={`w-5 h-5 mt-0.5 ${
                              pkg.popular ? 'text-white' : 'text-[var(--color-secondary)]'
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              pkg.popular ? 'text-white' : 'text-gray-600'
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={generateWhatsAppLink(pkg.packageName)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto w-full py-3 rounded-lg font-semibold transition-all text-center ${
                        pkg.popular
                          ? 'bg-white text-[var(--color-secondary)] hover:bg-gray-100'
                          : 'bg-[var(--color-secondary)] text-white hover:bg-[var(--color-primary)]'
                      }`}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom package? Let's create something special for you!
          </p>
          <button className="text-[var(--color-secondary)] font-semibold hover:text-[var(--color-primary)] transition-colors">
            Contact for Custom Quote →
          </button>
        </div>

      </div>
    </section>
  );
}