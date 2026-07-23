"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Mail, Phone } from "lucide-react";
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

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const itemVariants = {
    hidden: { opacity: 0, x: 25 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.12 + i * 0.05,
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      x: 15,
      transition: {
        duration: 0.15,
        delay: (navLinks.length - i) * 0.015,
      },
    }),
  };

  const footerInfoVariants = {
    hidden: { opacity: 0, x: 25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.12 + navLinks.length * 0.05,
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: { opacity: 0, x: 15, transition: { duration: 0.15 } },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.12 + navLinks.length * 0.05 + 0.08,
        duration: 0.38,
        ease: "easeOut" as const,
      },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } },
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
              onClick={() => openModal()}
              className="hidden md:flex items-center justify-center px-6 py-2.5 btn-gold font-body text-sm font-semibold tracking-wide border-none cursor-pointer"
            >
              Book Consultation
            </button>

            {/* Hamburger Trigger Button */}
            <button
              onClick={toggleMenu}
              className="xl:hidden w-11 h-11 rounded-full flex items-center justify-center bg-white/90 border border-deep-brown/8 shadow-sm text-deep-brown hover:text-luxury-gold active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 relative z-50 cursor-pointer"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer System */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm xl:hidden cursor-pointer"
              aria-hidden="true"
            />

            {/* Slide-in Drawer from Right */}
            <motion.div
              id="mobile-navigation-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] as const }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(88vw,420px)] bg-[#FAF7F2] border-l border-luxury-gold/20 shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto xl:hidden"
            >
              {/* Ambient Glows */}
              <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-luxury-gold/5 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-premium-teal/5 blur-[100px] pointer-events-none" />

              {/* Header inside drawer */}
              <div className="flex items-center justify-between pt-2 pb-6 border-b border-deep-brown/10 mb-6">
                <span className="font-body text-xs font-semibold text-luxury-gold tracking-widest uppercase">
                  Explore Pariichay
                </span>
                <button
                  onClick={closeMenu}
                  className="w-9 h-9 rounded-full bg-white/80 border border-deep-brown/10 flex items-center justify-center text-deep-brown hover:text-luxury-gold transition-colors cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Sequential Staggered Navigation Links */}
              <nav className="flex flex-col gap-3 my-auto">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      custom={idx}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      whileTap={{ scale: 0.97 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`font-headings text-2xl sm:text-3xl font-bold transition-colors duration-300 inline-block py-1 ${
                          isActive 
                            ? "text-luxury-gold" 
                            : "text-deep-brown hover:text-luxury-gold active:text-[#124E2F]"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Footer Information & CTA Button (Appears Last) */}
              <div className="pt-6 border-t border-deep-brown/10 mt-6 flex flex-col gap-5">
                {/* Footer Info */}
                <motion.div
                  variants={footerInfoVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col gap-1.5"
                >
                  <span className="font-body text-[10px] uppercase tracking-widest text-muted-text font-semibold">
                    Care Coordination Desk
                  </span>
                  <a 
                    href="mailto:info@pariichay.com" 
                    className="font-body text-xs font-semibold text-deep-brown hover:text-luxury-gold transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5 text-luxury-gold" /> info@pariichay.com
                  </a>
                  <a 
                    href="tel:+919313812657" 
                    className="font-body text-xs font-semibold text-deep-brown hover:text-luxury-gold transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-luxury-gold" /> +91 93138 12657
                  </a>
                </motion.div>

                {/* Book Consultation Button */}
                <motion.button
                  variants={ctaVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    closeMenu();
                    openModal();
                  }}
                  className="w-full py-3.5 btn-gold font-body text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 border-none cursor-pointer shadow-md hover:shadow-lg transition-all min-h-[44px]"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
