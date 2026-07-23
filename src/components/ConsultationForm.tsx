"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Phone, 
  Mail, 
  User, 
  ShieldCheck, 
  CheckCircle2, 
  Loader2, 
  Clock, 
  MapPin, 
  Sparkles,
  MessageSquare
} from "lucide-react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { appointmentSchema, AppointmentFormValues } from "@/lib/zodSchemas";
import { useRouter } from "next/navigation";

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

interface ConsultationFormProps {
  isModal?: boolean;
  initialService?: string;
  onSuccessClose?: () => void;
}

export default function ConsultationForm({ 
  isModal = false, 
  initialService, 
  onSuccessClose 
}: ConsultationFormProps) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
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
      service: initialService || "",
      mode: "Online",
      preferredDate: "",
      preferredTime: "",
      message: "",
      dob: "",
      bornTime: "",
      bornPlace: "",
    }
  });

  useEffect(() => {
    if (initialService) {
      setValue("service", initialService);
    }
  }, [initialService, setValue]);

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
          whatsappNumber: data.whatsapp || "",
          emailAddress: data.email || "",
          age: data.age || "",
          gender: data.gender || "",
          city: data.city || "",
          dateOfBirth: data.dob || "",
          birthTime: data.bornTime || "",
          birthPlace: data.bornPlace || "",
          counsellingType: data.service,
          mode: data.mode,
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
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#123E25", "#1E5E3A", "#D89A3C", "#507D62"]
      });

      setIsSuccess(true);
      reset();

      if (!isModal) {
        setTimeout(() => {
          router.push("/thank-you?id=PARI-" + Math.floor(1000 + Math.random() * 9000));
        }, 1500);
      }

    } catch (error: any) {
      console.error("Submission failed:", error);
      setErrorMessage(error.message || "We couldn't submit your consultation request right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-8 px-4 text-center max-w-full"
      >
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4 text-green-600 shadow-inner">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-headings text-xl sm:text-2xl font-bold text-deep-brown mb-2">
          Consultation Requested!
        </h3>
        <p className="font-body text-xs sm:text-sm text-muted-text max-w-sm leading-relaxed mb-6">
          Thank you. Your details have been securely logged. Our senior advisor coordinator will connect with you shortly.
        </p>
        {isModal && onSuccessClose ? (
          <button
            onClick={onSuccessClose}
            className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#1E5E3A] to-[#123E25] hover:from-[#123E25] hover:to-[#1E5E3A] text-white rounded-full font-body text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all duration-300 min-h-[44px] cursor-pointer"
          >
            Close Window
          </button>
        ) : (
          <span className="font-body text-xs text-luxury-gold font-semibold">
            Redirecting to confirmation page...
          </span>
        )}
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-full flex flex-col gap-4 text-left">
      {/* Header Info */}
      <div className="flex flex-col items-start pr-8">
        {isModal && (
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-luxury-gold/30 bg-white shadow-sm mb-2.5">
            <Image
              src="/logo.png"
              alt="Pariichay Logo"
              fill
              className="object-cover"
            />
          </div>
        )}
        <h3 className="font-headings text-lg sm:text-xl md:text-2xl font-bold text-deep-brown leading-tight">
          Book Consultation
        </h3>
        <p className="font-body text-xs sm:text-sm text-muted-text mt-1 leading-relaxed">
          We&apos;re here to guide you. Fill in your details below and we&apos;ll reach out shortly.
        </p>
      </div>

      {errorMessage && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl font-body text-xs leading-relaxed">
          {errorMessage}
        </div>
      )}

      {/* Main Responsive Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-full space-y-3 sm:space-y-4">
        
        {/* Row 1: Full Name & Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {/* Full Name */}
          <div className="flex flex-col gap-1 w-full min-w-0">
            <label className="font-body text-[11px] sm:text-xs font-semibold text-[#1F2937] flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
              Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Jignesh Prajapati"
              {...register("fullName")}
              className={`w-full min-h-[44px] sm:min-h-[48px] px-3.5 sm:px-4 rounded-xl sm:rounded-[14px] border bg-[#FAFAFA] text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123E25] focus:bg-white focus:shadow-[0_0_12px_rgba(18,62,37,0.12)] transition-all duration-200 font-body text-xs sm:text-sm ${
                errors.fullName ? "border-red-400" : "border-[#ECECEC]"
              }`}
            />
            {errors.fullName && (
              <span className="font-body text-[10px] text-red-500 pl-0.5">{errors.fullName.message}</span>
            )}
          </div>

          {/* Mobile Number */}
          <div className="flex flex-col gap-1 w-full min-w-0">
            <label className="font-body text-[11px] sm:text-xs font-semibold text-[#1F2937] flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
              Phone Number *
            </label>
            <input
              type="tel"
              placeholder="e.g. 9876543210"
              {...register("mobile")}
              className={`w-full min-h-[44px] sm:min-h-[48px] px-3.5 sm:px-4 rounded-xl sm:rounded-[14px] border bg-[#FAFAFA] text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123E25] focus:bg-white focus:shadow-[0_0_12px_rgba(18,62,37,0.12)] transition-all duration-200 font-body text-xs sm:text-sm ${
                errors.mobile ? "border-red-400" : "border-[#ECECEC]"
              }`}
            />
            {errors.mobile && (
              <span className="font-body text-[10px] text-red-500 pl-0.5">{errors.mobile.message}</span>
            )}
          </div>
        </div>

        {/* Row 2: Email & Age */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {/* Email */}
          <div className="sm:col-span-2 flex flex-col gap-1 w-full min-w-0">
            <label className="font-body text-[11px] sm:text-xs font-semibold text-[#1F2937] flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
              Email Address *
            </label>
            <input
              type="email"
              placeholder="e.g. name@domain.com"
              {...register("email")}
              className={`w-full min-h-[44px] sm:min-h-[48px] px-3.5 sm:px-4 rounded-xl sm:rounded-[14px] border bg-[#FAFAFA] text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123E25] focus:bg-white focus:shadow-[0_0_12px_rgba(18,62,37,0.12)] transition-all duration-200 font-body text-xs sm:text-sm ${
                errors.email ? "border-red-400" : "border-[#ECECEC]"
              }`}
            />
            {errors.email && (
              <span className="font-body text-[10px] text-red-500 pl-0.5">{errors.email.message}</span>
            )}
          </div>

          {/* Age */}
          <div className="flex flex-col gap-1 w-full min-w-0">
            <label className="font-body text-[11px] sm:text-xs font-semibold text-[#1F2937]">
              Age *
            </label>
            <input
              type="number"
              placeholder="e.g. 24"
              {...register("age")}
              className={`w-full min-h-[44px] sm:min-h-[48px] px-3.5 sm:px-4 rounded-xl sm:rounded-[14px] border bg-[#FAFAFA] text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123E25] focus:bg-white focus:shadow-[0_0_12px_rgba(18,62,37,0.12)] transition-all duration-200 font-body text-xs sm:text-sm ${
                errors.age ? "border-red-400" : "border-[#ECECEC]"
              }`}
            />
            {errors.age && (
              <span className="font-body text-[10px] text-red-500 pl-0.5">{errors.age.message}</span>
            )}
          </div>
        </div>

        {/* Row 3: Service Selection & Mode */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {/* Service */}
          <div className="sm:col-span-2 flex flex-col gap-1 w-full min-w-0">
            <label className="font-body text-[11px] sm:text-xs font-semibold text-[#1F2937]">
              Select Counselling Type *
            </label>
            <select
              {...register("service")}
              className={`w-full min-h-[44px] sm:min-h-[48px] px-3.5 sm:px-4 rounded-xl sm:rounded-[14px] border bg-[#FAFAFA] text-[#1F2937] focus:outline-none focus:border-[#123E25] focus:bg-white focus:shadow-[0_0_12px_rgba(18,62,37,0.12)] transition-all duration-200 font-body text-xs sm:text-sm ${
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
              <span className="font-body text-[10px] text-red-500 pl-0.5">{errors.service.message}</span>
            )}
          </div>

          {/* Mode */}
          <div className="flex flex-col gap-1 w-full min-w-0">
            <label className="font-body text-[11px] sm:text-xs font-semibold text-[#1F2937]">
              Session Mode *
            </label>
            <select
              {...register("mode")}
              className="w-full min-h-[44px] sm:min-h-[48px] px-3.5 sm:px-4 rounded-xl sm:rounded-[14px] border border-[#ECECEC] bg-[#FAFAFA] text-[#1F2937] focus:outline-none focus:border-[#123E25] focus:bg-white focus:shadow-[0_0_12px_rgba(18,62,37,0.12)] transition-all duration-200 font-body text-xs sm:text-sm"
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline Clinic</option>
            </select>
          </div>
        </div>

        {/* Row 4: Preferred Date & Time Slot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {/* Preferred Date */}
          <div className="flex flex-col gap-1 w-full min-w-0">
            <label className="font-body text-[11px] sm:text-xs font-semibold text-[#1F2937] flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
              Preferred Date *
            </label>
            <input
              type="date"
              {...register("preferredDate")}
              className={`w-full min-h-[44px] sm:min-h-[48px] px-3.5 sm:px-4 rounded-xl sm:rounded-[14px] border bg-[#FAFAFA] text-[#1F2937] focus:outline-none focus:border-[#123E25] focus:bg-white focus:shadow-[0_0_12px_rgba(18,62,37,0.12)] transition-all duration-200 font-body text-xs sm:text-sm ${
                errors.preferredDate ? "border-red-400" : "border-[#ECECEC]"
              }`}
            />
            {errors.preferredDate && (
              <span className="font-body text-[10px] text-red-500 pl-0.5">{errors.preferredDate.message}</span>
            )}
          </div>

          {/* Preferred Time */}
          <div className="flex flex-col gap-1 w-full min-w-0">
            <label className="font-body text-[11px] sm:text-xs font-semibold text-[#1F2937] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
              Preferred Time *
            </label>
            <select
              {...register("preferredTime")}
              className={`w-full min-h-[44px] sm:min-h-[48px] px-3.5 sm:px-4 rounded-xl sm:rounded-[14px] border bg-[#FAFAFA] text-[#1F2937] focus:outline-none focus:border-[#123E25] focus:bg-white focus:shadow-[0_0_12px_rgba(18,62,37,0.12)] transition-all duration-200 font-body text-xs sm:text-sm ${
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
              <span className="font-body text-[10px] text-red-500 pl-0.5">{errors.preferredTime.message}</span>
            )}
          </div>
        </div>

        {/* Row 5: Birth Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="flex flex-col gap-1 w-full min-w-0">
            <label className="font-body text-[10px] sm:text-[11px] font-medium text-[#4B5563]">
              Date of Birth
            </label>
            <input
              type="date"
              {...register("dob")}
              className="w-full min-h-[42px] px-3.5 rounded-xl border border-[#ECECEC] bg-[#FAFAFA] text-[#1F2937] focus:outline-none focus:border-[#123E25] focus:bg-white transition-all duration-200 font-body text-xs"
            />
          </div>

          <div className="flex flex-col gap-1 w-full min-w-0">
            <label className="font-body text-[10px] sm:text-[11px] font-medium text-[#4B5563]">
              Birth Time
            </label>
            <input
              type="time"
              {...register("bornTime")}
              className="w-full min-h-[42px] px-3.5 rounded-xl border border-[#ECECEC] bg-[#FAFAFA] text-[#1F2937] focus:outline-none focus:border-[#123E25] focus:bg-white transition-all duration-200 font-body text-xs"
            />
          </div>

          <div className="flex flex-col gap-1 w-full min-w-0">
            <label className="font-body text-[10px] sm:text-[11px] font-medium text-[#4B5563]">
              Birth Place
            </label>
            <input
              type="text"
              placeholder="e.g. Ahmedabad"
              {...register("bornPlace")}
              className="w-full min-h-[42px] px-3.5 rounded-xl border border-[#ECECEC] bg-[#FAFAFA] text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123E25] focus:bg-white transition-all duration-200 font-body text-xs"
            />
          </div>
        </div>

        {/* Row 6: Message */}
        <div className="flex flex-col gap-1 w-full min-w-0">
          <label className="font-body text-[11px] sm:text-xs font-semibold text-[#1F2937]">
            Notes / Additional Message (Optional)
          </label>
          <textarea
            placeholder="Brief description of primary challenges..."
            rows={2}
            {...register("message")}
            className="w-full px-3.5 py-2.5 rounded-xl sm:rounded-[14px] border border-[#ECECEC] bg-[#FAFAFA] text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123E25] focus:bg-white focus:shadow-[0_0_12px_rgba(18,62,37,0.12)] transition-all duration-200 font-body text-xs sm:text-sm resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full min-h-[48px] sm:min-h-[52px] mt-1 bg-gradient-to-b from-[#1E5E3A] to-[#123E25] hover:from-[#123E25] hover:to-[#1E5E3A] text-white rounded-xl sm:rounded-[16px] font-body text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-[0_8px_20px_rgba(18,62,37,0.25)] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin shrink-0" />
              <span>Booking Consultation...</span>
            </>
          ) : (
            <span>Book Consultation</span>
          )}
        </button>

        {/* Privacy Note */}
        <div className="flex items-center justify-center gap-1.5 text-[10px] text-muted-text pt-0.5">
          <ShieldCheck className="w-3.5 h-3.5 text-premium-teal shrink-0" />
          <span>Your information is kept 100% private &amp; confidential.</span>
        </div>

      </form>
    </div>
  );
}
