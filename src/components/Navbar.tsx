"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBookingModal } from "@/context/BookingModalContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Who We Help", href: "/who-we-help" },
  { name: "Know Your Child", href: "/know-your-child" },
  { name: "Process", href: "/process" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useBookingModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-primary-bg/75 backdrop-blur-xl border-b border-deep-brown/5 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 relative rounded-full border border-luxury-gold/30 overflow-hidden bg-white shadow-sm transition-transform duration-500 group-hover:scale-105">
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
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-4 xl:gap-5 2xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-body text-xs xl:text-sm font-medium transition-colors duration-300 relative group py-2 whitespace-nowrap ${
                    isActive ? "text-luxury-gold" : "text-body-text/80 hover:text-luxury-gold"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-luxury-gold transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA & Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={openModal}
              className="hidden md:flex items-center justify-center px-6 py-2.5 btn-gold font-body text-sm font-semibold tracking-wide border-none cursor-pointer"
            >
              Book Consultation
            </button>

            {/* Hamburger Trigger */}
            <button
              onClick={toggleMenu}
              className="xl:hidden w-11 h-11 rounded-full flex items-center justify-center bg-white/80 border border-deep-brown/5 shadow-sm text-deep-brown hover:text-luxury-gold transition-colors focus:outline-none relative z-50"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-30 bg-secondary-bg flex flex-col justify-between px-8 py-24 md:px-16 overflow-y-auto"
          >
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none animate-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-premium-teal/5 blur-[140px] pointer-events-none animate-glow" />

            <div className="flex flex-col gap-8 mt-6">
              <span className="font-body text-xs font-semibold text-luxury-gold tracking-widest uppercase">
                Explore Pariichay
              </span>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 + 0.2, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => {
                          setIsOpen(false);
                          document.body.style.overflow = "unset";
                        }}
                        className={`font-headings text-3xl sm:text-4xl font-bold transition-colors duration-300 inline-block ${
                          isActive ? "text-luxury-gold" : "text-deep-brown hover:text-luxury-gold"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-deep-brown/10 pt-8 gap-6 mt-8"
            >
              <div className="flex flex-col">
                <span className="font-body text-xs text-muted-text">Have questions?</span>
                <a href="mailto:info@pariichay.com" className="font-body text-sm font-semibold text-deep-brown mt-1">
                  info@pariichay.com
                </a>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  document.body.style.overflow = "unset";
                  openModal();
                }}
                className="w-full sm:w-auto px-8 py-3.5 btn-gold font-body text-sm font-semibold tracking-wide flex items-center justify-center gap-2 border-none cursor-pointer"
              >
                Book Consultation <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
