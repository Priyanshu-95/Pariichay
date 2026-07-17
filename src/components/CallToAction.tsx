"use client";

import { Sparkles, ArrowRight } from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";

export default function CallToAction() {
  const { openModal } = useBookingModal();

  return (
    <section className="py-12 md:py-16 bg-transparent relative overflow-visible">
      {/* 
        NO GRADIENT GLOWS OR OVERLAYS REMAIN
      */}

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative z-20">
        <div 
          className="relative w-full py-10 px-8 sm:px-12 md:px-16 rounded-[24px] border border-[#EAE6DF]/60 shadow-[0_15px_35px_rgba(106,74,43,0.02)] flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden bg-white"
        >
          <div className="flex flex-col gap-3 text-left max-w-2xl">
            <span className="font-body text-xs font-semibold tracking-widest text-luxury-gold uppercase inline-flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Start Your Alignment
            </span>
            <h3 className="font-headings text-3xl sm:text-4xl font-bold text-deep-brown leading-tight">
              Begin Your Journey to Absolute Self-Discovery
            </h3>
            <p className="font-body text-xs sm:text-sm text-muted-text mt-1.5 leading-relaxed">
              Connect with our certified psychological advisors and Vedic scholars to map your potential and build conscious growth frameworks.
            </p>
          </div>

          <button
            onClick={openModal}
            className="px-10 py-4.5 bg-gradient-to-r from-[#C89B3C] to-[#E5C16A] text-[#0B2014] rounded-full font-body text-sm font-semibold tracking-wide shadow-md hover:shadow-[0_0_25px_rgba(204,153,51,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 border-none cursor-pointer shrink-0"
          >
            Schedule Free Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
