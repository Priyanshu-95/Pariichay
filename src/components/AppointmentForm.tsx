"use client";

import ConsultationForm from "./ConsultationForm";

export default function AppointmentForm() {
  return (
    <div 
      className="bg-white/90 border border-deep-brown/5 rounded-[28px] sm:rounded-[32px] p-5 sm:p-8 md:p-10 shadow-sm backdrop-blur-md relative overflow-hidden" 
      id="appointment"
    >
      {/* Ambient background glow */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-luxury-gold/5 blur-3xl pointer-events-none" />

      <ConsultationForm isModal={false} />
    </div>
  );
}

