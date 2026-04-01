'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';

type ImageType = {
  url: string;
  alt: string;
};

const galleryImages: ImageType[] = [
  { url: '/portfolio/babyshower.jpg', alt: 'Bridal Makeup' },
  { url: '/portfolio/engagement-2.jpeg', alt: 'Elegant Makeup' },
  { url: '/portfolio/engagement.jpeg', alt: 'Party Makeup' },
  { url: '/portfolio/festive-makeup.jpg', alt: 'Professional Tools' },
  { url: '/portfolio/engagement-3.JPEG', alt: 'Professional Artist' },
  { url: 'portfolio/festive-makeup.PNG', alt: 'Wedding Look' },
  { url: 'portfolio/photooshoot-2.jpeg', alt: 'Wedding Look' },
  { url: 'portfolio/wedding-2.jpeg', alt: 'Wedding Look' },
  { url: 'portfolio/photoshoot-3.jpeg', alt: 'Wedding Look' },
  { url: 'portfolio/photoshoot.JPG', alt: 'Wedding Look' },
  { url: 'portfolio/photoshoot4.PNG', alt: 'Wedding Look' },
  { url: 'portfolio/photosoot.jpeg', alt: 'Wedding Look' },
  { url: 'portfolio/reciption.PNG', alt: 'Wedding Look' },
  { url: 'portfolio/wedding-4.jpeg', alt: 'Wedding Look' },
  { url: 'portfolio/wedding.jpg', alt: 'Wedding Look' }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const selectedImage =
    currentIndex !== null ? galleryImages[currentIndex] : null;

  const nextImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) =>
      prev! === galleryImages.length - 1 ? 0 : prev! + 1
    );
  };

  const prevImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) =>
      prev! === 0 ? galleryImages.length - 1 : prev! - 1
    );
  };

  // 🔥 Keyboard support
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (currentIndex === null) return;

      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setCurrentIndex(null);
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex]);

  return (
    <div className="mt-20">
      <Navbar />

      <section className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-black">
              Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A glimpse of my work - creating beautiful, confident looks for amazing clients
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="cursor-pointer relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all group aspect-square"
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
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setCurrentIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setCurrentIndex(null)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ✕
            </button>

            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-3xl px-4"
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-3xl px-4"
            >
              ›
            </button>

            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />

          </div>
        </div>
      )}
    </div>
  );
}