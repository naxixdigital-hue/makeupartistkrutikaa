"use client";

import { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="h-10 md:h-20" />
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="https://wa.me/${WHATSAPP_NUMBER}?text=Hello%21%20I%20want%20to%20book%20a%20makeup%20appointment.%0APackage%2Foccasions%3A%20%5Bplease%20fill%5D%0ADate%3A%20%5Bplease%20fill%5D%0ATime%3A%20%5Bplease%20fill%5D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-6 py-2 rounded-full transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-pink-500 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="https://wa.me/${WHATSAPP_NUMBER}?text=Hello%21%20I%20want%20to%20book%20a%20makeup%20appointment.%0APackage%2Foccasions%3A%20%5Bplease%20fill%5D%0ADate%3A%20%5Bplease%20fill%5D%0ATime%3A%20%5Bplease%20fill%5D"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-6 py-2 rounded-full transition-colors text-center"
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
