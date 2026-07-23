"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Activity, 
  Heart, 
  FileSpreadsheet, 
  Award, 
  ShieldCheck, 
  Map, 
  Clock, 
  Sparkles, 
  Sliders,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    icon: Activity,
    title: "Scientific Methods",
    desc: "Every recommendation is grounded in verified cognitive psychological research and scientific intelligence metrics."
  },
  {
    icon: Heart,
    title: "Holistic Guidance",
    desc: "We look at the whole person, integrating mental, behavioral, environmental, and spiritual metrics."
  },
  {
    icon: FileSpreadsheet,
    title: "Personalized Reports",
    desc: "Receive customized, highly detailed analysis dossiers containing actionable action items and growth indicators."
  },
  {
    icon: Award,
    title: "Certified Experts",
    desc: "Our consulting panels comprise licensed psychologists, professional counsellors, and certified Vedic scholars."
  },
  {
    icon: ShieldCheck,
    title: "Confidential Sessions",
    desc: "We prioritize complete ethical safety, offering end-to-end client confidentiality under global privacy criteria."
  },
  {
    icon: Map,
    title: "Career Mapping",
    desc: "Detailed career-fit analysis aligning your natural intelligence parameters with current industry models."
  },
  {
    icon: Clock,
    title: "Continuous Support",
    desc: "We stand by your side. Every major counselling consultation includes scheduled follow-up checks."
  },
  {
    icon: Sparkles,
    title: "Vedic Insights",
    desc: "Utilizing ancient Vedic astrology and numerology observations to map peak periods and spiritual alignments."
  },
  {
    icon: Sliders,
    title: "Modern Assessment Tools",
    desc: "Equipped with biometric (DMIT) readers, computerized testing setups, and visual diagnostic tools."
  }
];

export default function WhyChooseUs({ preview = false }: { preview?: boolean }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "0px 0px 100px 0px" });

  const filteredReasons = preview ? reasons.slice(0, 6) : reasons;

  return (
    <section id="why-choose-us" className="py-12 md:py-20 bg-[#FCFAF7] relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-10 right-10 w-80 h-80 bg-luxury-gold/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <span className="font-body text-xs font-semibold tracking-widest text-luxury-gold uppercase block mb-3">
            Why Choose Us
          </span>
          <h2 className="font-headings text-3xl sm:text-4xl md:text-5xl font-bold text-deep-brown">
            The Pariichay Advantage
          </h2>
          <p className="font-body text-sm sm:text-base text-muted-text mt-4">
            We deliver a unique synergy of modern science and ancient spiritual wisdom to clear doubts and streamline growth paths.
          </p>
        </div>

        {/* Reason Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                className="glass-card rounded-[28px] p-8 border border-white/60 shadow-sm flex items-start gap-5 hover:border-luxury-gold/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-premium-teal/5 text-premium-teal border border-premium-teal/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-luxury-gold/10 group-hover:text-luxury-gold group-hover:border-luxury-gold/20">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-headings text-lg font-bold text-deep-brown">
                    {reason.title}
                  </h4>
                  <p className="font-body text-sm text-muted-text leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Learn More Button for preview mode */}
        {preview && (
          <div className="flex justify-center mt-16">
            <Link
              href="/about"
              className="px-8 py-3.5 btn-gold font-body text-sm font-semibold tracking-wide flex items-center gap-2"
            >
              Learn More About Our Philosophy <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
