import { Award, Heart, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/krutika.JPG"
                alt="Makeup Artist"
                className="w-full h-[700px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 md:-right-6 bg-[var(--color-primary)] text-white p-6 rounded-2xl shadow-xl">
              <p className="text-4xl">4+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 text-black">About Me</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Welcome! I'm a passionate makeup artist dedicated to enhancing your natural beauty and making you feel confident for every special occasion. With over a decade of experience in the beauty industry, I've had the privilege of working with beautiful clients.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether it's your wedding day, a milestone celebration, or any special event, I use premium products and personalized techniques to create looks that photograph beautifully and last all day.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-primary)] p-3 rounded-lg">
                  <Award className="w-6 h-6 text-[var(--color-secondary)]" />
                </div>
                <div>
                  <h3 className="text-xl mb-1 text-black">Certified Professional</h3>
                  <p className="text-gray-600">Certified and trained in the latest makeup techniques</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-primary)] p-3 rounded-lg">
                  <Sparkles className="w-6 h-6 text-[var(--color-secondary)]" />
                </div>
                <div>
                  <h3 className="text-xl mb-1 text-black">Premium Products</h3>
                  <p className="text-gray-600">Using only high-quality, long-lasting cosmetics</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-primary)] p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-[var(--color-secondary)]" />
                </div>
                <div>
                  <h3 className="text-xl mb-1 text-black">Personalized Service</h3>
                  <p className="text-gray-600">Every look is customized to match your unique style</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
