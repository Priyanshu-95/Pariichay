"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-bg flex items-center justify-center py-16 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-luxury-gold/5 blur-[100px] pointer-events-none animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-premium-teal/5 blur-[120px] pointer-events-none animate-glow" />

      <div className="max-w-md w-full text-center relative z-10 flex flex-col items-center">
        
        {/* Visual Mark */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 rounded-full border border-luxury-gold/20 flex items-center justify-center bg-white shadow-sm mb-8"
        >
          <Compass className="w-10 h-10 text-luxury-gold animate-spin" style={{ animationDuration: "6s" }} />
        </motion.div>

        {/* 404 Code */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-headings text-7xl font-black text-deep-brown tracking-tight"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-headings text-xl sm:text-2xl font-bold text-deep-brown mt-4"
        >
          Page Lost in Alignment
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-body text-sm text-muted-text mt-3 leading-relaxed mb-10"
        >
          The page you are looking for has been moved, renamed, or is temporarily offline. Let us guide you back to your path.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="/"
            className="px-8 py-3.5 btn-gold font-body text-sm font-semibold tracking-wide flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
