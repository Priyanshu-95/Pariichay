"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, Home, Sparkles } from "lucide-react";
import { Suspense, useEffect } from "react";
import confetti from "canvas-confetti";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const inquiryId = searchParams.get("id") || "PARI-LEAD";

  useEffect(() => {
    // Fire a second round of subtle success confetti on mount
    const timer = setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#123E25", "#1E5E3A", "#507D62"]
      });
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#123E25", "#1E5E3A", "#507D62"]
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-xl w-full relative z-10 flex flex-col items-center">
      {/* Luxury success card */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", damping: 15 }}
        className="glass-card rounded-[36px] p-8 sm:p-12 border border-white/60 shadow-lg text-center flex flex-col items-center"
      >
        {/* Animated Checkmark */}
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 flex items-center justify-center mb-8"
        >
          <CheckCircle2 className="w-10 h-10" />
        </motion.div>

        {/* Heading */}
        <h1 className="font-headings text-2xl sm:text-3xl font-bold text-deep-brown">
          Inquiry Submitted Successfully
        </h1>

        {/* Sub-label showing lead ID */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 text-luxury-gold font-body text-xs font-semibold mt-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ID: {inquiryId}</span>
        </div>

        {/* Description */}
        <p className="font-body text-sm sm:text-base text-muted-text mt-6 leading-relaxed">
          Thank you for contacting <strong>Pariichay</strong>.
        </p>
        <p className="font-body text-xs sm:text-sm text-muted-text mt-2 leading-relaxed">
          Our counselling team has received your application. We will evaluate your profile and contact you shortly via phone or WhatsApp to finalize your consultation time slot.
        </p>

        {/* Separator line */}
        <div className="w-full h-[1px] bg-deep-brown/5 my-8" />

        {/* Back Home CTA */}
        <Link
          href="/"
          className="px-8 py-3.5 btn-gold font-body text-sm font-semibold tracking-wide flex items-center justify-center gap-2"
        >
          <Home className="w-4 h-4" /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-primary-bg flex items-center justify-center py-16 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-luxury-gold/5 blur-[100px] pointer-events-none animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-premium-teal/5 blur-[120px] pointer-events-none animate-glow" />

      <Suspense fallback={
        <div className="text-center font-body text-sm text-muted-text">
          Loading success confirmation details...
        </div>
      }>
        <ThankYouContent />
      </Suspense>
    </div>
  );
}
