"use client";

import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Phone, Mail, User, ShieldCheck, CheckCircle2, Loader2 } from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";
import { appointmentSchema, AppointmentFormValues } from "@/lib/zodSchemas";
import Image from "next/image";
import confetti from "canvas-confetti";

const servicesList = [
  "360° Personal Counselling",
  "Mind Power Workshop",
  "Scientific Assessment",
  "Psychometric Assessment",
  "IQ Testing",
  "Career Guidance",
  "Academic Counselling",
  "Positive Parenting",
  "Child Behaviour Counselling",
  "Numerology Analysis",
  "Vedic Astrology & Kundali",
  "Bio Metric (DMIT) Assessment",
  "Know Your Child Assessment",
  "Relationship Counselling",
  "Family Counselling",
  "Corporate Counselling"
];

export default function BookingModal() {
  const { isOpen, closeModal } = useBookingModal();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const modalRef = useRef<HTMLDivElement>(null);
  const autoCloseTimer = useRef<NodeJS.Timeout | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullName: "",
      mobile: "",
      whatsapp: "",
      email: "",
      age: "",
      gender: "",
      city: "",
      service: "",
      mode: "Online",
      preferredDate: "",
      preferredTime: "",
      message: "",
      dob: "",
      bornTime: "",
      bornPlace: "",
    }
  });

  // Lock body scroll and Escape key close
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsSuccess(false);
      setErrorMessage(null);
      reset();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          closeModal();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
        if (autoCloseTimer.current) clearTimeout(autoCloseTimer.current);
      };
    }
  }, [isOpen, closeModal, reset]);

  // Click outside to close
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  const onSubmit = async (data: AppointmentFormValues) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: data.fullName,
          phoneNumber: data.mobile,
          emailAddress: data.email || "",
          age: data.age || "",
          dateOfBirth: data.dob || "",
          birthTime: data.bornTime || "",
          birthPlace: data.bornPlace || "",
          counsellingType: data.service,
          preferredDate: data.preferredDate,
          preferredTime: data.preferredTime,
          message: data.message || "",
        }),
      });

      const resData = await response.json();

      if (!response.ok || !resData.success) {
        throw new Error(resData.message || "We couldn't submit your consultation request right now. Please try again.");
      }

      // Trigger Confetti
      confetti({
        particleCount: 100,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#123E25", "#1E5E3A", "#507D62"]
      });

      setIsSuccess(true);
      reset();

      // Automatically close modal after 3.5 seconds
      autoCloseTimer.current = setTimeout(() => {
        closeModal();
      }, 3500);

    } catch (error: any) {
      console.error("Submission failed:", error);
      setErrorMessage("We couldn't submit your consultation request right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-[4px] overflow-y-auto"
        >
          {/* Outer Glass Shell */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[520px] rounded-[28px] border border-white/25 backdrop-blur-[18px] p-[10px] text-left my-4 sm:my-6 select-none shadow-[0_18px_40px_rgba(0,0,0,0.1),_0_35px_90px_rgba(0,0,0,0.12),_inset_0_0_0_1px_rgba(255,255,255,0.45)]"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
            }}
          >
            {/* Inner Solid Card */}
            <div className="relative w-full rounded-[22px] bg-white border border-[#F2F2F2] p-5 sm:p-7 flex flex-col gap-4 sm:gap-5">
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#ECECEC] hover:bg-[#F2F2F2] text-deep-brown hover:text-luxury-gold flex items-center justify-center transition-all duration-300 cursor-pointer hover:rotate-90 z-20"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Success View */}
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5 text-green-600 shadow-inner">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-headings text-2xl font-bold text-deep-brown mb-2">
                    Thank You!
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-muted-text max-w-sm leading-relaxed">
                    Your details are recorded. Our advisor coordinator team will get in touch with you shortly.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-6 px-6 py-2.5 bg-gradient-to-r from-[#1E5E3A] to-[#123E25] hover:from-[#123E25] hover:to-[#1E5E3A] text-white rounded-full font-body text-xs font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-300"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                // Form View
                <>
                  {/* Header */}
                  <div className="flex flex-col items-start text-left pr-10">
                    {/* Parichay Logo */}
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-luxury-gold/30 bg-white shadow-sm mb-3">
                      <Image
                        src="/logo.png"
                        alt="Pariichay Logo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-headings text-[20px] font-semibold text-[#1C1C1C] leading-tight">
                      Book Consultation
                    </h3>
                    <p className="font-body text-[13px] text-[#6B7280] mt-1 leading-relaxed">
                      We'd love to understand your needs. Fill in a few details and we'll get in touch shortly.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl font-body text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
                    
                    {/* Row 1: Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="flex flex-col gap-1">
                        <label className="font-body text-[11px] font-semibold text-[#1F2937] pl-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Jignesh Prajapati"
                          {...register("fullName")}
                          className={`w-full h-[48px] px-4 rounded-[14px] border bg-[#FAFAFA] text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123E25] focus:bg-white focus:shadow-[0_0_12px_rgba(18,62,37,0.15)] transition-all duration-300 font-body text-xs sm:text-sm ${
                            errors.fullName ? "border-red-400" : "border-[#ECECEC]"
                          }`}
                        />
                        {errors.fullName && (
                          <span className="font-body text-[9px] text-red-500 pl-1">{errors.fullName.message}</span>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div className="flex flex-col gap-1">
                        <label className="font-body text-[11px] font-semibold text-[#1F2937] pl-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. 9876543210"
                          {...register("mobile")}
                          className={`w-full h-[48px] px-4 rounded-[14px] border bg-[#FAFAFA] text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123E25] focus:bg-white focus:shadow-[0_0_12px_rgba(18,62,37,0.15)] transition-all duration-300 font-body text-xs sm:text-sm ${
                            errors.mobile ? "border-red-400" : "border-[#ECECEC]"
                          }`}
                        />
                        {errors.mobile && (
                          <span className="font-body text-[9px] text-red-500 pl-1">{errors.mobile.message}</span>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Email & Age */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Email */}
                      <div className="sm:col-span-2 flex flex-col gap-1">
                        <label className="font-body text-[11px] font-semibold text-[#1F2937] pl-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. name@domain.com"
                          {...register("email")}
                          className={`w-full h-[48px] px-4 rounded-[14px] border bg-[#FAFAFA] text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123E25] focus:bg-white focus:shadow-[0_0_12px_rgba(18,62,37,0.15)] transition-all duration-300 font-body text-xs sm:text-sm ${
                            errors.email ? "border-red-400" : "border-[#ECECEC]"
                          }`}
                        />
                        {errors.email && (
                          <span className="font-body text-[9px] text-red-500 pl-1">{errors.email.message}</span>
                        )}
                      </div>

                      {/* Age */}
                      <div className="flex flex-col gap-1">
                        <label className="font-body text-[11px] font-semibold text-[#1F2937] pl-1">
                          Age
                        </label>
                        <input
                          type="number"
                          placeholder="e.g. 24"
                          {...register("age")}
                          className="w-full h-[48px] px-4 rounded-[14px] border border-[#ECECEC] bg-[#FAFAFA] text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123E25] focus:bg-white focus:shadow-[0_0_12px_rgba(18,62,37,0.15)] transition-all duration-300 font-body text-xs sm:text-sm"
                        />
                      </div>
                    </div>

                    {/* Row: Birth Details (Optional) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Date of Birth */}
                      <div className="flex flex-col gap-1">
                        <label className="font-body text-[11px] font-semibold text-[#1F2937] pl-1">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          {...register("dob")}
                          className="w-full h-[48px] px-4 rounded-[14px] border border-[#ECECEC] bg-[#FAFAFA] text-[#1F2937] focus:outline-none focus:border-[#123E25] focus:bg-white focus:shadow-[0_0_12px_rgba(18,62,37,0.15)] transition-all duration-300 font-body text-xs sm:text-sm"
                        />
                      </div>

                      {/* Born Time */}
                      <div className="flex flex-col gap-1">
                        <label className="font-body text-[11px] font-semibold text-[#1F2937] pl-1">
                          Birth Time
                        </label>
                        <input
                          type="time"
                          {...register("bornTime")}
                          className="w-full h-[48px] px-4 rounded-[14px] border border-[#ECECEC] bg-[#FAFAFA] text-[#1F2937] focus:outline-none focus:border-[#123E25] focus:bg-white focus:shadow-[0_0_12px_rgba(18,62,37,0.15)] transition-all duration-300 font-body text-xs sm:text-sm"
                        />
                      </div>

                      {/* Born Place */}
                      <div className="flex flex-col gap-1">
                        <label className="font-body text-[11px] font-semibold text-[#1F2937] pl-1">
                          Birth Place
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Mumbai"
                          {...register("bornPlace")}
                          className="w-full h-[48px] px-4 rounded-[14px] border border-[#ECECEC] bg-[#FAFAFA] text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123E25] focus:bg-white focus:shadow-[0_0_12px_rgba(18,62,37,0.15)] transition-all duration-300 font-body text-xs sm:text-sm"
                        />
                      </div>
                    </div>

                    {/* Row 3: Category */}
                    <div className="flex flex-col gap-1">
                      <label className="font-body text-[11px] font-semibold text-[#1F2937] pl-1">
                        Select Counselling Type *
                      </label>
                      <select
                        {...register("service")}
                        className={`w-full h-[48px] px-4 rounded-[14px] border bg-[#FAFAFA] text-[#1F2937] focus:outline-none focus:border-[#123E25] focus:bg-white focus:shadow-[0_0_12px_rgba(18,62,37,0.15)] transition-all duration-300 font-body text-xs sm:text-sm ${
                          errors.service ? "border-red-400" : "border-[#ECECEC]"
                        }`}
                      >
                        <option value="">Select Category</option>
                        {servicesList.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <span className="font-body text-[9px] text-red-500 pl-1">{errors.service.message}</span>
                      )}
                    </div>

                    {/* Row 4: Date & Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Preferred Date */}
                      <div className="flex flex-col gap-1">
                        <label className="font-body text-[11px] font-semibold text-[#1F2937] flex items-center gap-1 pl-1">
                          <Calendar className="w-3.5 h-3.5 text-luxury-gold" /> Preferred Date *
                        </label>
                        <input
                          type="date"
                          {...register("preferredDate")}
                          className={`w-full h-[48px] px-4 rounded-[14px] border bg-[#FAFAFA] text-[#1F2937] focus:outline-none focus:border-[#123E25] focus:bg-white focus:shadow-[0_0_12px_rgba(18,62,37,0.15)] transition-all duration-300 font-body text-xs sm:text-sm ${
                            errors.preferredDate ? "border-red-400" : "border-[#ECECEC]"
                          }`}
                        />
                        {errors.preferredDate && (
                          <span className="font-body text-[9px] text-red-500 pl-1">{errors.preferredDate.message}</span>
                        )}
                      </div>

                      {/* Preferred Time */}
                      <div className="flex flex-col gap-1">
                        <label className="font-body text-[11px] font-semibold text-[#1F2937] pl-1">
                          Preferred Time *
                        </label>
                        <select
                          {...register("preferredTime")}
                          className={`w-full h-[48px] px-4 rounded-[14px] border bg-[#FAFAFA] text-[#1F2937] focus:outline-none focus:border-[#123E25] focus:bg-white focus:shadow-[0_0_12px_rgba(18,62,37,0.15)] transition-all duration-300 font-body text-xs sm:text-sm ${
                            errors.preferredTime ? "border-red-400" : "border-[#ECECEC]"
                          }`}
                        >
                          <option value="">Select Time Slot</option>
                          <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
                          <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
                          <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                          <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
                          <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM</option>
                        </select>
                        {errors.preferredTime && (
                          <span className="font-body text-[9px] text-red-500 pl-1">{errors.preferredTime.message}</span>
                        )}
                      </div>
                    </div>

                    {/* Row 5: Message */}
                    <div className="flex flex-col gap-1">
                      <label className="font-body text-[11px] font-semibold text-[#1F2937] pl-1">
                        Message
                      </label>
                      <textarea
                        placeholder="Brief description of primary challenges..."
                        rows={2}
                        {...register("message")}
                        className="w-full px-4 py-2.5 rounded-[14px] border border-[#ECECEC] bg-[#FAFAFA] text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123E25] focus:bg-white focus:shadow-[0_0_12px_rgba(18,62,37,0.15)] transition-all duration-300 font-body text-xs sm:text-sm resize-none"
                      />
                    </div>

                    {/* Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full h-[52px] mt-1 bg-gradient-to-b from-[#1E5E3A] to-[#123E25] hover:from-[#123E25] hover:to-[#1E5E3A] text-white rounded-[16px] font-body text-sm font-semibold tracking-wide shadow-md hover:shadow-[0_8px_20px_rgba(18,62,37,0.3)] hover:-translate-y-[2px] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Booking Consultation...
                        </>
                      ) : (
                        "Book Consultation"
                      )}
                    </button>

                    {/* Privacy */}
                    <div className="flex items-center justify-center gap-1 text-[9px] text-muted-text pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-premium-teal" />
                      <span>Your information is kept private and confidential.</span>
                    </div>

                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
