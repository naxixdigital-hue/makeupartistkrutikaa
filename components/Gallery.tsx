import Link from "next/link";

export function Gallery() {
  const galleryImages = [
    {
      url: '/recieption.jpeg',
      alt: 'Bridal Makeup'
    },
    {
      url: '/wedding.jpeg',
      alt: 'Elegant Makeup'
    },
    {
      url: '/SRJ00157.jpeg',
      alt: 'Party Makeup'
    },
    {
      url: '/portfolio.jpeg',
      alt: 'Professional Tools'
    },
    {
      url: '/elegant.jpeg',
      alt: 'Professional Artist'
    },
    {
      url: '/latika.JPG',
      alt: 'Wedding Look'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-black">Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse of my work - creating beautiful, confident looks for amazing clients
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all group aspect-square"
            >
              <img 
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-pink-600/0 group-hover:bg-pink-600/20 transition-colors"></div>
            </div>
          ))}
        </div>
        <Link
              href="/portfolio"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-6 py-2 rounded-full transition-colors"
            >
              View full Portfolio
            </Link>
      </div>
    </section>
  );
}
