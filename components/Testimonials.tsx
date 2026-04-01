import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Snehal Sawant',
    occasion: 'Bridal Makeup',
    image: '/recieption.jpeg',
    text: 'She is amazing makeup artist! She exceeded my expectations in every way extremely skilled ,professional, and very solution oriented. I truly enjoyed working with her and can’t wait to work with her again. Highly recommend',
  },
  {
    id: 2,
    name: 'Priyanka Malap ',
    occasion: 'Sider Makeup',
    image: '/priyanka.jpeg',
    text: 'I had an amazing experience with your makeup service! You understood exactly what I wanted and created a beautiful, natural look. The makeup was flawless and long-lasting.Thank you for your professionalism and lovely work. Highly recommended',
  },
  {
    id: 3,
    name: 'Siddhi parab',
    occasion: 'Sider Makeup',
    image: '/siddhi.jpeg',
    text: 'What I loved the most is how she kept my makeup looking natural but still enhanced my features. The base was so smooth and lightweight, and it stayed perfect for hours.She knows how to bring out your natural beauty beautifully.So happy with my makeup! Thank you for the lovely experience 💫',
  },
  {
    id: 4,
    name: 'Priya shirodkar',
    occasion: 'Baby Shower',
    image: '/baby-shower.jpg',
    text: 'I had my baby shower makeup done, and I couldn’t be happier with the experience! You created such a soft, glowing look that felt perfect for the occasion and made me feel really special. The makeup was beautifully done, not too heavy, and lasted throughout the entire event without any issues. You was very patient, understanding, and made sure I was comfortable the whole time. I received so many compliments from everyone! I would definitely recommend you to anyone looking for a talented and caring makeup artist.',
  },
  {
    id: 5,
    name: 'Alpana Bendugade ',
    occasion: 'Festive Makeup',
    image: '/alpana.JPG',
    text: 'I was never really into makeup before, but after seeing your work, I honestly feel like it can make such a beautiful difference. You always understand exactly what people want and create the perfect look every time. Even for me, you’ve always done such an amazing job—no matter the occasion, the makeup is always just right. I have recommended you to so many people already, and I will definitely keep doing it! 💕',
  },
  {
    id: 6,
    name: 'Latika Musale',
    occasion: 'Photoshoot',
    image: '/latika.JPG',
    text: 'Absolutely loved your work! ✨ You made me feel so comfortable during the photoshoot, and your makeup skills are truly amazing. The final look was beyond my expectations—I felt so confident and got so many compliments! Thank you for your professionalism, creativity, and for making the whole experience so enjoyable. Highly recommend you to anyone looking for a flawless look! 💄📸',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">What My Clients Say</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take my word for it - hear from the beautiful brides and clients I've had the pleasure to work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[var(--color-secondary)]" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-[var(--color-secondary)]"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-[var(--color-secondary)] text-sm">{testimonial.occasion}</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
