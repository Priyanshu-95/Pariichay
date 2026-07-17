"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, Calendar, Phone, Mail, User, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import { appointmentSchema, AppointmentFormValues } from "@/lib/zodSchemas";

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

export default function AppointmentForm() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

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

      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#123E25", "#1E5E3A", "#507D62", "#0B2014"]
      });

      reset();
      router.push("/thank-you?id=PARI-" + Math.floor(1000 + Math.random() * 9000));

    } catch (error: any) {
      console.error("Submission failed:", error);
      setErrorMessage("We couldn't submit your consultation request right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/80 border border-deep-brown/5 rounded-[32px] p-6 sm:p-10 shadow-sm backdrop-blur-md relative overflow-hidden" id="appointment">
      {/* Glow ambient */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-luxury-gold/5 blur-3xl pointer-events-none" />

      <div className="flex flex-col gap-6 mb-8">
        <h3 className="font-headings text-2xl sm:text-3xl font-bold text-deep-brown">
          Schedule Consultation
        </h3>
        <p className="font-body text-xs sm:text-sm text-muted-text">
          Enter your metrics below. Required fields are marked with an asterisk (*). All information is kept completely confidential.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl font-body text-xs sm:text-sm">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Core details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="font-body text-xs font-semibold text-deep-brown flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-luxury-gold" /> Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Jignesh Prajapati"
              {...register("fullName")}
              className={`px-4 py-3 rounded-2xl border bg-white/50 text-body-text focus:outline-none focus:border-luxury-gold/50 font-body text-sm ${
                errors.fullName ? "border-red-400" : "border-deep-brown/10"
              }`}
            />
            {errors.fullName && (
              <span className="font-body text-[10px] text-red-500">{errors.fullName.message}</span>
            )}
          </div>

          {/* Mobile Number */}
          <div className="flex flex-col gap-2">
            <label className="font-body text-xs font-semibold text-deep-brown flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-luxury-gold" /> Mobile Number *
            </label>
            <input
              type="tel"
              placeholder="e.g. +91 98765 43210"
              {...register("mobile")}
              className={`px-4 py-3 rounded-2xl border bg-white/50 text-body-text focus:outline-none focus:border-luxury-gold/50 font-body text-sm ${
                errors.mobile ? "border-red-400" : "border-deep-brown/10"
              }`}
            />
            {errors.mobile && (
              <span className="font-body text-[10px] text-red-500">{errors.mobile.message}</span>
            )}
          </div>

        </div>

        {/* WhatsApp & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* WhatsApp */}
          <div className="flex flex-col gap-2">
            <label className="font-body text-xs font-semibold text-deep-brown">
              WhatsApp Number (Optional)
            </label>
            <input
              type="tel"
              placeholder="Leave blank if same as mobile"
              {...register("whatsapp")}
              className="px-4 py-3 rounded-2xl border border-deep-brown/10 bg-white/50 text-body-text focus:outline-none focus:border-luxury-gold/50 font-body text-sm"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="font-body text-xs font-semibold text-deep-brown flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-luxury-gold" /> Email Address (Optional)
            </label>
            <input
              type="email"
              placeholder="e.g. name@domain.com"
              {...register("email")}
              className={`px-4 py-3 rounded-2xl border bg-white/50 text-body-text focus:outline-none focus:border-luxury-gold/50 font-body text-sm ${
                errors.email ? "border-red-400" : "border-deep-brown/10"
              }`}
            />
            {errors.email && (
              <span className="font-body text-[10px] text-red-500">{errors.email.message}</span>
            )}
          </div>

        </div>

        {/* Age, Gender & City */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          {/* Age */}
          <div className="flex flex-col gap-2">
            <label className="font-body text-xs font-semibold text-deep-brown">
              Age (Optional)
            </label>
            <input
              type="number"
              placeholder="e.g. 14"
              {...register("age")}
              className="px-4 py-3 rounded-2xl border border-deep-brown/10 bg-white/50 text-body-text focus:outline-none focus:border-luxury-gold/50 font-body text-sm"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-2">
            <label className="font-body text-xs font-semibold text-deep-brown">
              Gender (Optional)
            </label>
            <select
              {...register("gender")}
              className="px-4 py-3 rounded-2xl border border-deep-brown/10 bg-white/50 text-body-text focus:outline-none focus:border-luxury-gold/50 font-body text-sm"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* City */}
          <div className="flex flex-col gap-2">
            <label className="font-body text-xs font-semibold text-deep-brown">
              City (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Ahmedabad"
              {...register("city")}
              className="px-4 py-3 rounded-2xl border border-deep-brown/10 bg-white/50 text-body-text focus:outline-none focus:border-luxury-gold/50 font-body text-sm"
            />
          </div>

        </div>

        {/* Birth Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Date of Birth */}
          <div className="flex flex-col gap-2">
            <label className="font-body text-xs font-semibold text-deep-brown">
              Date of Birth (Optional)
            </label>
            <input
              type="date"
              {...register("dob")}
              className="px-4 py-3 rounded-2xl border border-deep-brown/10 bg-white/50 text-body-text focus:outline-none focus:border-luxury-gold/50 font-body text-sm"
            />
          </div>

          {/* Born Time */}
          <div className="flex flex-col gap-2">
            <label className="font-body text-xs font-semibold text-deep-brown">
              Birth Time (Optional)
            </label>
            <input
              type="time"
              {...register("bornTime")}
              className="px-4 py-3 rounded-2xl border border-deep-brown/10 bg-white/50 text-body-text focus:outline-none focus:border-luxury-gold/50 font-body text-sm"
            />
          </div>

          {/* Born Place */}
          <div className="flex flex-col gap-2">
            <label className="font-body text-xs font-semibold text-deep-brown">
              Birth Place (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Mumbai"
              {...register("bornPlace")}
              className="px-4 py-3 rounded-2xl border border-deep-brown/10 bg-white/50 text-body-text focus:outline-none focus:border-luxury-gold/50 font-body text-sm"
            />
          </div>
        </div>

        {/* Service & Consultation Mode */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Service Required */}
          <div className="flex flex-col gap-2">
            <label className="font-body text-xs font-semibold text-deep-brown">
              Service Required *
            </label>
            <select
              {...register("service")}
              className={`px-4 py-3 rounded-2xl border bg-white/50 text-body-text focus:outline-none focus:border-luxury-gold/50 font-body text-sm ${
                errors.service ? "border-red-400" : "border-deep-brown/10"
              }`}
            >
              <option value="">Select Required Service</option>
              {servicesList.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <span className="font-body text-[10px] text-red-500">{errors.service.message}</span>
            )}
          </div>

          {/* Consultation Mode */}
          <div className="flex flex-col gap-2">
            <label className="font-body text-xs font-semibold text-deep-brown">
              Preferred Consultation Mode *
            </label>
            <select
              {...register("mode")}
              className={`px-4 py-3 rounded-2xl border bg-white/50 text-body-text focus:outline-none focus:border-luxury-gold/50 font-body text-sm ${
                errors.mode ? "border-red-400" : "border-deep-brown/10"
              }`}
            >
              <option value="Online">Online Video Session</option>
              <option value="Offline">Offline Clinic Session</option>
            </select>
            {errors.mode && (
              <span className="font-body text-[10px] text-red-500">{errors.mode.message}</span>
            )}
          </div>

        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Preferred Date */}
          <div className="flex flex-col gap-2">
            <label className="font-body text-xs font-semibold text-deep-brown flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-luxury-gold" /> Preferred Date *
            </label>
            <input
              type="date"
              {...register("preferredDate")}
              className={`px-4 py-3 rounded-2xl border bg-white/50 text-body-text focus:outline-none focus:border-luxury-gold/50 font-body text-sm ${
                errors.preferredDate ? "border-red-400" : "border-deep-brown/10"
              }`}
            />
            {errors.preferredDate && (
              <span className="font-body text-[10px] text-red-500">{errors.preferredDate.message}</span>
            )}
          </div>

          {/* Preferred Time */}
          <div className="flex flex-col gap-2">
            <label className="font-body text-xs font-semibold text-deep-brown">
              Preferred Time Slot *
            </label>
            <select
              {...register("preferredTime")}
              className={`px-4 py-3 rounded-2xl border bg-white/50 text-body-text focus:outline-none focus:border-luxury-gold/50 font-body text-sm ${
                errors.preferredTime ? "border-red-400" : "border-deep-brown/10"
              }`}
            >
              <option value="">Select Preferred Time</option>
              <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
              <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
              <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
              <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
              <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM</option>
            </select>
            {errors.preferredTime && (
              <span className="font-body text-[10px] text-red-500">{errors.preferredTime.message}</span>
            )}
          </div>

        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="font-body text-xs font-semibold text-deep-brown">
            Your Message (Brief description of primary challenges)
          </label>
          <textarea
            placeholder="Share details you'd like our counselor to know before the session..."
            rows={4}
            {...register("message")}
            className="px-4 py-3 rounded-2xl border border-deep-brown/10 bg-white/50 text-body-text focus:outline-none focus:border-luxury-gold/50 font-body text-sm resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-gradient-to-r from-luxury-gold to-secondary-gold text-white rounded-full font-body text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Booking Consultation...
            </>
          ) : (
            "Request Consultation Slot"
          )}
        </button>

        {/* Trust disclaimer */}
        <div className="flex items-center justify-center gap-2 text-[10px] text-muted-text mt-4">
          <ShieldCheck className="w-4 h-4 text-premium-teal" />
          <span>Your information is kept private and confidential.</span>
        </div>

      </form>
    </div>
  );
}
