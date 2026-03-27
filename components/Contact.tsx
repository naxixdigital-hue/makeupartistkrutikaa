import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-black">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to look stunning for your special occasion? Let's create magic together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl mb-6 text-black">Contact Information</h3>
            <div className="space-y-6">
              <Link href="tel:+919967482755" className="flex items-start gap-4 hover:opacity-80 transition">
                <div className="bg-[var(--color-primary)] p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[var(--color-secondary)]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 text-black">Phone</p>
                  <p className="text-lg text-black">+91 9967482755</p>
                </div>
              </Link>

              <Link href="mailto:makeupartistkrutika@gmail.com" className="flex items-start gap-4 hover:opacity-80 transition">
                <div className="bg-[var(--color-primary)] p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[var(--color-secondary)]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 text-black">Email</p>
                  <p className="text-lg text-black">makeupartistkrutika@gmail.com</p>
                </div>
              </Link>

              <Link href="https://instagram.com/makeupartistkrutikaa" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:opacity-80 transition">
                <div className="bg-[var(--color-primary)] p-3 rounded-lg">
                  <Instagram className="w-6 h-6 text-[var(--color-secondary)]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Instagram</p>
                  <p className="text-lg text-black">@makeupartistkrutikaa</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
