import { Sparkles, Crown, Palette, Star } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: 'Bridal Makeup',
      description: 'Make your special day unforgettable with flawless bridal makeup that lasts from ceremony to reception.',
      features: ['Complimentary trial session', 'Airbrush or traditional', 'Long-lasting, photo-ready finish', 'Customized to suit your style and skin tone'],
      image: '/sulbha.jpg',
      featured: true
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Sider Makeup',
      description: 'Look stunning for any occasion with professional makeup tailored to your event and personal style.',
      features: ['Customized looks', 'Professional products', 'Photo-ready finish', 'Quick service'],
      image: '/sider.jpeg',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Festive Glow',
      description: 'Bold, glamorous looks for parties, photoshoots, or any event where you want to shine.',
      features: ['Bold & creative', 'Glitter & glam options', 'Long-lasting', 'Instagram-worthy'],
      image: '/alpana.JPG'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Baby Shower',
      description: 'Elegant, radiant looks designed to make you glow beautifully on your special day.',
      features: ['Pregnancy-safe products', 'Soft & fresh finish', 'Comfortable application', 'Photo-ready finish'],
      image: '/baby-shower.jpg'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-black">My Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional makeup services tailored to bring out your natural beauty for every special moment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow ${
                service.featured ? 'md:col-span-3 md:grid md:grid-cols-2 md:gap-8' : ''
              }`}
            >
              <div className={`relative h-100 ${service.featured ? 'md:h-auto' : ''}`}>
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {service.featured && (
                  <div className="absolute top-4 right-4 bg-[var(--color-primary)] text-white px-4 py-2 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[var(--color-primary)] p-3 rounded-lg text-[var(--color-secondary)]">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl text-black">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {service.featured && (
                  <div className="grid sm:grid-cols-2 gap-6">
                  
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
