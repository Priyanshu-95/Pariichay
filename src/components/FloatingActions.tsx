"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, ArrowUp } from "lucide-react";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919313812657?text=Hello%20Pariichay,%20I%20would%20like%20to%20book%20a%20consultation%20session."
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-white/90 hover:bg-white text-green-600 rounded-full flex items-center justify-center border border-green-200/50 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
        aria-label="Contact on WhatsApp"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="absolute right-14 bg-white/95 text-green-700 text-xs font-semibold font-body px-3 py-1.5 rounded-lg border border-green-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-sm">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919313812657"
        className="w-12 h-12 bg-white/90 hover:bg-white text-premium-teal rounded-full flex items-center justify-center border border-teal-200/30 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
        aria-label="Call Us"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1 }}
      >
        <Phone className="w-5 h-5 fill-current text-premium-teal" />
        <span className="absolute right-14 bg-white/95 text-premium-teal text-xs font-semibold font-body px-3 py-1.5 rounded-lg border border-teal-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-sm">
          Call Counselor
        </span>
      </motion.a>

      {/* Back to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 bg-luxury-gold hover:bg-luxury-gold/90 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 group border border-white/20"
            aria-label="Back to top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <ArrowUp className="w-5 h-5" />
            <span className="absolute right-14 bg-white/95 text-deep-brown text-xs font-semibold font-body px-3 py-1.5 rounded-lg border border-luxury-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-sm">
              Back to Top
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
