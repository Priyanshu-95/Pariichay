"use client";

import Link from "next/link";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
    (e.target as HTMLFormElement).reset();
  };

  const socialLinks = [
    {
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      href: "https://www.instagram.com/pariichay369/",
      label: "Instagram"
    },
    {
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      ),
      href: "https://www.facebook.com/share/1CFt8DuYTa/?mibextid=wwXIfr",
      label: "Facebook"
    },
    {
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      href: "https://www.youtube.com/@pariichay_159",
      label: "YouTube"
    }
  ];

  return (
    <footer className="bg-[#FAF7F2] border-t border-luxury-gold/20 pt-20 pb-8 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-premium-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-deep-brown/10">
          {/* Logo & About */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 relative rounded-full border border-luxury-gold/30 overflow-hidden bg-white shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Pariichay Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headings text-xl font-bold text-deep-brown tracking-wide leading-none">
                  Pariichay
                </span>
                <span className="font-body text-[9px] text-luxury-gold tracking-widest uppercase leading-none mt-1">
                  360° Counselling
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-muted-text leading-relaxed">
              Empowering individuals, children, and families to discover their full potential through a perfect blend of scientific methodologies and Vedic wisdom.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white border border-deep-brown/5 flex items-center justify-center text-muted-text hover:text-luxury-gold hover:border-luxury-gold/50 shadow-sm transition-all duration-300 hover:-translate-y-1"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-headings text-lg font-bold text-deep-brown">Quick Links</h4>
            <ul className="flex flex-col gap-3 font-body text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Who We Help", href: "/who-we-help" },
                { name: "Know Your Child", href: "/know-your-child" },
                { name: "Counselling Process", href: "/process" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-text hover:text-luxury-gold flex items-center gap-1 transition-colors duration-300 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="flex flex-col gap-6">
            <h4 className="font-headings text-lg font-bold text-deep-brown">Services</h4>
            <ul className="flex flex-col gap-3 font-body text-sm">
              {[
                { name: "360° Personal Counselling", href: "/services" },
                { name: "Scientific Career Guidance", href: "/services" },
                { name: "Positive Parenting Workshops", href: "/services" },
                { name: "Vedic Assessment & Numerology", href: "/services" },
                { name: "Psychometric Testing & IQ", href: "/services" },
                { name: "Biometric (DMIT) Assessments", href: "/services" },
              ].map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="text-muted-text hover:text-luxury-gold flex items-center gap-1 transition-colors duration-300 group"
                  >
                    <span>{service.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h4 className="font-headings text-lg font-bold text-deep-brown">Contact Us</h4>
            <p className="font-body text-sm text-muted-text leading-relaxed">
              Reach out to our care coordination desk for guidance or to schedule a session directly.
            </p>
            <div className="flex flex-col gap-4 font-body text-sm text-body-text/90">
              <a 
                href="tel:+919313812657" 
                className="flex items-center gap-3 group text-muted-text hover:text-luxury-gold transition-colors duration-300"
              >
                <div className="w-9 h-9 rounded-full bg-luxury-gold/10 text-luxury-gold flex items-center justify-center border border-luxury-gold/15 shrink-0 group-hover:bg-premium-teal/10 group-hover:text-premium-teal group-hover:border-premium-teal/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-text/60 uppercase tracking-widest leading-none">Phone 1</span>
                  <span className="mt-1 font-semibold text-deep-brown group-hover:text-luxury-gold transition-colors">+91 93138 12657</span>
                </div>
              </a>
              <a 
                href="tel:+919909427379" 
                className="flex items-center gap-3 group text-muted-text hover:text-luxury-gold transition-colors duration-300"
              >
                <div className="w-9 h-9 rounded-full bg-luxury-gold/10 text-luxury-gold flex items-center justify-center border border-luxury-gold/15 shrink-0 group-hover:bg-premium-teal/10 group-hover:text-premium-teal group-hover:border-premium-teal/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-text/60 uppercase tracking-widest leading-none">Phone 2</span>
                  <span className="mt-1 font-semibold text-deep-brown group-hover:text-luxury-gold transition-colors">+91 99094 27379</span>
                </div>
              </a>
              <a 
                href="mailto:info@pariichay.com" 
                className="flex items-center gap-3 group text-muted-text hover:text-luxury-gold transition-colors duration-300"
              >
                <div className="w-9 h-9 rounded-full bg-luxury-gold/10 text-luxury-gold flex items-center justify-center border border-luxury-gold/15 shrink-0 group-hover:bg-premium-teal/10 group-hover:text-premium-teal group-hover:border-premium-teal/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-text/60 uppercase tracking-widest leading-none">Email</span>
                  <span className="mt-1 font-semibold text-deep-brown group-hover:text-luxury-gold transition-colors">info@pariichay.com</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4 font-body text-xs text-muted-text">
          <p>© {new Date().getFullYear()} Pariichay. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-luxury-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-luxury-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
