"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleComplete = () => {
      setProgress(100);
      setTimeout(() => setLoading(false), 150);
    };

    if (document.readyState === "complete") {
      handleComplete();
    } else {
      window.addEventListener("load", handleComplete);
      const timer = setTimeout(handleComplete, 300); // Fallback timeout
      return () => {
        window.removeEventListener("load", handleComplete);
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-primary-bg z-50 flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-secondary-gold/10 blur-[100px] pointer-events-none animate-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-premium-teal/5 blur-[120px] pointer-events-none animate-glow" />

          <div className="flex flex-col items-center text-center px-6 relative z-10">
            {/* Logo Mark Icon */}
            <motion.div 
              className="mb-8 relative flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 relative rounded-full border border-luxury-gold/30 overflow-hidden bg-white shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Pariichay Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -inset-2 w-20 h-20 rounded-full border-t-2 border-luxury-gold animate-spin" style={{ animationDuration: "3s" }} />
            </motion.div>

            {/* Brand Title */}
            <motion.h1
              className="font-headings text-4xl sm:text-5xl font-bold text-deep-brown tracking-wide mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Pariichay
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="font-body text-sm sm:text-base text-muted-text tracking-widest uppercase mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              360° Counselling Solutions
            </motion.p>

            {/* Loading Bar & Counter */}
            <div className="w-64 relative">
              <div className="h-[2px] w-full bg-luxury-gold/15 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-luxury-gold to-premium-teal"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeInOut" }}
                />
              </div>
              <div className="flex justify-between items-center mt-3 text-xs tracking-wider text-muted-text font-body">
                <span>CLARITY TODAY, SUCCESS TOMORROW</span>
                <span className="font-semibold text-luxury-gold">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
