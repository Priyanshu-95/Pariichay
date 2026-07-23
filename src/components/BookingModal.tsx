"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";
import ConsultationForm from "./ConsultationForm";

export default function BookingModal() {
  const { isOpen, selectedService, closeModal } = useBookingModal();
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock body scroll and Escape key close
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          closeModal();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, closeModal]);

  // Click outside to close
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-[6px] overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {/* Outer Glass Shell */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[min(92vw,560px)] max-h-[88vh] sm:max-h-[90vh] rounded-[24px] sm:rounded-[28px] border border-white/25 backdrop-blur-[18px] p-2 sm:p-2.5 text-left select-none shadow-[0_18px_40px_rgba(0,0,0,0.15),_0_35px_90px_rgba(0,0,0,0.2)] flex flex-col"
            style={{
              background: "rgba(255, 255, 255, 0.12)",
            }}
          >
            {/* Inner Solid Card with Internal Scrollbar */}
            <div className="relative w-full max-h-[calc(88vh-16px)] sm:max-h-[calc(90vh-20px)] rounded-[18px] sm:rounded-[22px] bg-white border border-[#F2F2F2] p-4 sm:p-6 md:p-7 flex flex-col overflow-y-auto custom-scrollbar">
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#ECECEC] hover:bg-[#F2F2F2] text-deep-brown hover:text-luxury-gold flex items-center justify-center transition-all duration-200 cursor-pointer hover:rotate-90 z-30 touch-manipulation min-w-[36px] min-h-[36px]"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              <ConsultationForm 
                isModal={true} 
                initialService={selectedService} 
                onSuccessClose={closeModal} 
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
