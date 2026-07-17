"use client";

import { MapPin, Phone, MessageSquare, Mail, Clock, Navigation } from "lucide-react";
import AppointmentForm from "./AppointmentForm";

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-secondary-bg relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-luxury-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact Channels & Map */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <span className="font-body text-xs font-semibold tracking-widest text-luxury-gold uppercase block mb-3">
                Contact Us
              </span>
              <h2 className="font-headings text-3xl sm:text-4xl font-bold text-deep-brown leading-tight">
                Connect With Our Care Team
              </h2>
              <p className="font-body text-sm sm:text-base text-muted-text mt-4 leading-relaxed">
                Have questions about our testing packages, consultation pricing, or appointment slots? We are here to guide you.
              </p>
            </div>

            {/* Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Phone,
                  title: "Phone Inquiry",
                  value: "+91 93138 12657 / +91 99094 27379",
                  href: "tel:+919313812657",
                  desc: "Call for immediate slots",
                },
                {
                  icon: MessageSquare,
                  title: "WhatsApp Chat",
                  value: "+91 93138 12657",
                  href: "https://wa.me/919313812657?text=Hi%20Pariichay,%20I'm%20looking%20to%20schedule%20a%20consultation.",
                  desc: "Quick replies 9AM - 7PM",
                },
                {
                  icon: Mail,
                  title: "Email Support",
                  value: "info@pariichay.com",
                  href: "mailto:info@pariichay.com",
                  desc: "Detailed inquiries",
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  value: "Appointment Based",
                  href: "#",
                  desc: "Mon - Sat: Prior booking required",
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass-card rounded-2xl p-5 border border-white/60 shadow-sm flex items-start gap-4 hover:border-luxury-gold/30 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 text-luxury-gold flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headings text-sm font-bold text-deep-brown group-hover:text-premium-teal transition-colors">
                        {item.title}
                      </span>
                      <span className="font-body text-xs text-body-text/90 font-medium mt-1">
                        {item.value}
                      </span>
                      <span className="font-body text-[10px] text-muted-text mt-0.5">
                        {item.desc}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Google Map Mock/Placeholder */}
            <div className="glass-card rounded-[28px] p-6 border border-white/60 shadow-sm flex flex-col gap-5 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-premium-teal/10 text-premium-teal flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-headings text-sm font-bold text-deep-brown">Pariichay Counselling Hub</span>
                  <span className="font-body text-[11px] text-muted-text">204, Pushkar Icon Near Kalyan Chawk, Shukan Cross Road, Nikol - Naroda Rd, Nikol, Ahmedabad, Gujarat 382350</span>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="h-48 rounded-2xl border border-deep-brown/5 shadow-sm relative overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=204,%20Pushkar%20Icon%20Near%20Kalyan%20Chawk,%20Shukan%20Cross%20Road,%20Nikol%20-%20Naroda%20Rd,%20Nikol,%20Ahmedabad,%20Gujarat%20382350&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-none"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pariichay Counselling Hub Location"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919313812657"
                  className="flex-1 py-3 border border-deep-brown/10 hover:border-luxury-gold/50 rounded-full font-body text-xs font-semibold text-deep-brown flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-luxury-gold" /> Call Hub
                </a>
                <a
                  href="https://wa.me/919313812657?text=Hi%20Pariichay,%20please%20share%20directions%20to%20your%20office."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 border border-deep-brown/10 hover:border-luxury-gold/50 rounded-full font-body text-xs font-semibold text-deep-brown flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-luxury-gold" /> WhatsApp Directions
                </a>
                <a
                  href="https://maps.google.com/?q=204,+Pushkar+Icon+Near+Kalyan+Chawk,+Shukan+Cross+Road,+Nikol+-+Naroda+Rd,+Nikol,+Ahmedabad,+Gujarat+382350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-premium-teal hover:bg-premium-teal/90 text-white rounded-full font-body text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-4 h-4" /> Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7">
            <AppointmentForm />
          </div>

        </div>

      </div>
    </section>
  );
}
