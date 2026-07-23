"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Sparkles, Phone, MessageSquare, Eye } from "lucide-react";
import Image from "next/image";
import confetti from "canvas-confetti";

// Target Launch Time: July 24, 2026, at 1:10:00 PM IST (UTC+05:30)
const LAUNCH_DATE = new Date("2026-07-24T13:10:00+05:30").getTime();

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
  isPassed: boolean;
}

export default function LaunchGuard({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0, isPassed: true });
  const [hasUnlocked, setHasUnlocked] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Allow owner preview mode via URL query string: ?preview=true
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("preview") === "true") {
        setIsPreview(true);
      }
    }

    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date().getTime();
      const difference = LAUNCH_DATE - now;

      if (difference <= 0) {
        return { hours: 0, minutes: 0, seconds: 0, isPassed: true };
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { hours, minutes, seconds, isPassed: false };
    };

    const initial = calculateTimeLeft();
    setTimeLeft(initial);

    if (initial.isPassed) {
      setHasUnlocked(true);
      return;
    }

    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);

      if (updated.isPassed) {
        clearInterval(timer);
        setHasUnlocked(true);
        // Trigger celebratory launch confetti
        try {
          confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.5 },
            colors: ["#D89A3C", "#123E25", "#1E5E3A", "#F5E6CA"],
          });
        } catch (e) {
          // fallback if confetti fails
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // SSR or Preview or Past Launch Time -> Render regular website
  if (!isClient || isPreview || timeLeft.isPassed || hasUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0E1F18] text-white flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden select-none">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#D89A3C]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#1E5E3A]/20 blur-[140px] pointer-events-none" />

      {/* Main Glass Shell */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-xl w-full bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-6 sm:p-10 text-center flex flex-col items-center shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
      >
        {/* Brand Logo */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#D89A3C]/40 bg-white p-1 shadow-lg mb-6 flex items-center justify-center">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/logo.png"
              alt="Pariichay Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D89A3C]/15 border border-[#D89A3C]/30 text-[#D89A3C] font-body text-xs font-semibold tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Official Grand Launch
        </div>

        {/* Heading */}
        <h1 className="font-headings text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
          Pariichay
        </h1>
        <p className="font-body text-xs sm:text-sm text-white/70 max-w-md mb-8 leading-relaxed">
          360° Counselling Solutions — Integrating Psychometric Insights &amp; Vedic Wisdom for Complete Life Alignment.
        </p>

        {/* Live Ticking Countdown Box */}
        <div className="w-full bg-black/30 border border-white/10 rounded-2xl p-4 sm:p-6 mb-8 flex items-center justify-around">
          {/* Hours */}
          <div className="flex flex-col items-center">
            <span className="font-headings text-3xl sm:text-5xl font-black text-[#D89A3C]">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="font-body text-[10px] sm:text-xs font-medium text-white/50 tracking-wider uppercase mt-1">
              Hours
            </span>
          </div>

          <span className="font-headings text-2xl sm:text-4xl font-bold text-white/30 mb-4">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <span className="font-headings text-3xl sm:text-5xl font-black text-[#D89A3C]">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="font-body text-[10px] sm:text-xs font-medium text-white/50 tracking-wider uppercase mt-1">
              Minutes
            </span>
          </div>

          <span className="font-headings text-2xl sm:text-4xl font-bold text-white/30 mb-4">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <span className="font-headings text-3xl sm:text-5xl font-black text-white">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="font-body text-[10px] sm:text-xs font-medium text-white/50 tracking-wider uppercase mt-1">
              Seconds
            </span>
          </div>
        </div>

        {/* Time Detail Announcement */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#D89A3C] mb-6">
          <Clock className="w-4 h-4" />
          <span>Website Unlocks Automatically at 01:10 PM (24th July 2026)</span>
        </div>

        {/* Direct Contact Options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
          <a
            href="tel:+919313812657"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-body text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200"
          >
            <Phone className="w-3.5 h-3.5 text-[#D89A3C]" />
            <span>Call +91 93138 12657</span>
          </a>
          <a
            href="https://wa.me/919313812657?text=Hi%20Pariichay,%20I'm%20inquiring%20about%20the%20grand%20launch."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1E5E3A] hover:bg-[#123E25] border border-[#1E5E3A] text-white font-body text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-md"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Inquiry</span>
          </a>
        </div>

        {/* Owner Preview Link Note */}
        <button
          onClick={() => setIsPreview(true)}
          className="mt-6 text-[11px] text-white/40 hover:text-white/80 underline underline-offset-4 flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Client / Owner Preview Mode</span>
        </button>

      </motion.div>
    </div>
  );
}
