"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  HeartHandshake, 
  Compass, 
  Brain, 
  Zap, 
  Map, 
  GraduationCap, 
  Baby, 
  Smile, 
  Hash, 
  Sun, 
  Moon, 
  Fingerprint, 
  Eye, 
  Layers, 
  Users, 
  Briefcase,
  ArrowRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useBookingModal } from "@/context/BookingModalContext";

// Import all service images statically
import img360Counselling from "@/assets/360° Counselling.png";
import imgAcademicCounselling from "@/assets/Academic Counselling.png";
import imgBioMetricAssessment from "@/assets/Bio Metric Assessment.png";
import imgCareerGuidance from "@/assets/Career Guidance.png";
import imgChildBehaviourCounselling from "@/assets/Child Behaviour Counselling.png";
import imgCorporateCounselling from "@/assets/Corporate Counselling.png";
import imgFamilyCounselling from "@/assets/Family Counselling.png";
import imgIQTesting from "@/assets/IQ Testing.png";
import imgKnowYourChild from "@/assets/Know Your Child.png";
import imgKundaliAnalysis from "@/assets/Kundali Analysis.png";
import imgNumerologyAnalysis from "@/assets/Numerology Analysis.png";
import imgPositiveParenting from "@/assets/Positive Parenting.png";
import imgPsychometricAssessment from "@/assets/Psychometric Assessment.png";
import imgRelationshipCounselling from "@/assets/Relationship Counselling.png";
import imgScientificAssessment from "@/assets/Scientific Assessment.png";
import imgVedicAstrology from "@/assets/Vedic Astrology.png";
import imgMindPowerWorkshop from "@/assets/Mind Power Workshop.png";

const services = [
  {
    icon: Sparkles,
    title: "Mind Power Workshop",
    desc: "Unlocking subconscious potential, memory, focus, and emotional mastery through scientific visualization and neural-conditioning techniques.",
    category: "counselling",
    duration: "120 Mins",
    image: imgMindPowerWorkshop
  },
  {
    icon: HeartHandshake,
    title: "360° Counselling",
    desc: "A comprehensive holistic life adjustment program addressing behavioral patterns, emotional stability, and psychological barriers.",
    category: "counselling",
    duration: "60 Mins",
    image: img360Counselling
  },
  {
    icon: Compass,
    title: "Scientific Assessment",
    desc: "Multi-layered cognitive diagnosis using validated psychometrics to establish standard mental profiles and focus areas.",
    category: "scientific",
    duration: "90 Mins",
    image: imgScientificAssessment
  },
  {
    icon: Brain,
    title: "Psychometric Assessment",
    desc: "Detailed evaluation of personality traits, learning styles, emotional intelligence, and natural aptitudes.",
    category: "scientific",
    duration: "75 Mins",
    image: imgPsychometricAssessment
  },
  {
    icon: Zap,
    title: "IQ Testing",
    desc: "Standardized intelligence testing assessing logic capabilities, verbal comprehension, working memory, and speed.",
    category: "scientific",
    duration: "60 Mins",
    image: imgIQTesting
  },
  {
    icon: Map,
    title: "Career Guidance",
    desc: "Pathfinder roadmap aligning interests, psychometric results, and Vedic charts to pinpoint successful career channels.",
    category: "counselling",
    duration: "90 Mins",
    image: imgCareerGuidance
  },
  {
    icon: GraduationCap,
    title: "Academic Counselling",
    desc: "Helping students optimize study patterns, combat examination anxiety, and select subjects aligned with their skills.",
    category: "counselling",
    duration: "60 Mins",
    image: imgAcademicCounselling
  },
  {
    icon: Baby,
    title: "Positive Parenting",
    desc: "Empowering parents with modern tools to foster emotional intelligence, reduce conflicts, and support child milestones.",
    category: "counselling",
    duration: "75 Mins",
    image: imgPositiveParenting
  },
  {
    icon: Smile,
    title: "Child Behaviour Counselling",
    desc: "Gentle behavioral therapies helping youngsters manage ADHD, screen dependency, anger, social anxiety, and academic stress.",
    category: "counselling",
    duration: "60 Mins",
    image: imgChildBehaviourCounselling
  },
  {
    icon: Hash,
    title: "Numerology Analysis",
    desc: "Evaluating the energy frequencies of numbers in dates of birth and names to suggest corrective changes and peak times.",
    category: "vedic",
    duration: "45 Mins",
    image: imgNumerologyAnalysis
  },
  {
    icon: Sun,
    title: "Vedic Astrology",
    desc: "Studying planetary configurations to understand life purposes, key strengths, potential challenges, and spiritual paths.",
    category: "vedic",
    duration: "60 Mins",
    image: imgVedicAstrology
  },
  {
    icon: Moon,
    title: "Kundali Analysis",
    desc: "Deep birth chart readings tracking cosmic influences to navigate relationships, financial prospects, and health.",
    category: "vedic",
    duration: "60 Mins",
    image: imgKundaliAnalysis
  },
  {
    icon: Fingerprint,
    title: "Bio Metric Assessment",
    desc: "Dermatoglyphics Multiple Intelligence Test (DMIT) reading brain potential, learning styles, and hidden potentials through fingerprints.",
    category: "scientific",
    duration: "90 Mins",
    image: imgBioMetricAssessment
  },
  {
    icon: Eye,
    title: "Know Your Child",
    desc: "Unified assessments bridging child fingerprints, astrological charts, and behavioral tendencies for early nurture guidance.",
    category: "counselling",
    duration: "120 Mins",
    image: imgKnowYourChild
  },
  {
    icon: Layers,
    title: "Relationship Counselling",
    desc: "Helping couples decipher compatibility issues, communicate productively, and dissolve deep emotional disconnects.",
    category: "counselling",
    duration: "75 Mins",
    image: imgRelationshipCounselling
  },
  {
    icon: Users,
    title: "Family Counselling",
    desc: "Structured systems therapy resolving disputes, setting boundaries, and strengthening intergenerational bonds.",
    category: "counselling",
    duration: "90 Mins",
    image: imgFamilyCounselling
  },
  {
    icon: Briefcase,
    title: "Corporate Counselling",
    desc: "Custom employee wellness webinars, leadership evaluations, stress reduction panels, and career progression guidance.",
    category: "counselling",
    duration: "90 Mins",
    image: imgCorporateCounselling
  }
];


export default function Services({ preview = false }: { preview?: boolean }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"detailed" | "quick">("detailed");
  const { openModal } = useBookingModal();

  const filteredServices = preview
    ? services.slice(0, 3) // Show top 3 services in preview mode to align perfectly with the 3-column grid
    : activeFilter === "all" 
      ? services 
      : services.filter(s => s.category === activeFilter);

  const filterButtons = [
    { label: "All Offerings", id: "all" },
    { label: "Scientific & Biometrics", id: "scientific" },
    { label: "Counselling Pathways", id: "counselling" },
    { label: "Vedic & Numerology", id: "vedic" }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-[#FCFAF7] relative" ref={containerRef}>
      {/* Decorative Blur */}
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-secondary-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-0 w-80 h-80 rounded-full bg-premium-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Title */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <span className="font-body text-xs font-semibold tracking-widest text-luxury-gold uppercase inline-flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Services Directory
          </span>
          <h2 className="font-headings text-3xl sm:text-4xl md:text-5xl font-bold text-deep-brown mt-3">
            {preview ? "Featured Counselling Offerings" : "Our Holistic Counselling Solutions"}
          </h2>
          <p className="font-body text-sm sm:text-base text-muted-text mt-4">
            {preview 
              ? "Discover our core personalized assessments and counselling programs designed to bring clarity and direction." 
              : "Select a pathway tailored to guide your psychological growth, academic milestones, family dynamics, or cosmological balance."}
          </p>
        </div>

        {/* View Switcher Segmented Control */}
        <div className="flex justify-center mb-10 relative z-20">
          <div className="inline-flex rounded-full bg-[#FAFAFA] border border-[#EAE6DF] p-1 shadow-sm">
            <button
              onClick={() => setViewMode("detailed")}
              className={`px-5 py-2 rounded-full font-body text-xs font-semibold tracking-wide transition-all cursor-pointer border-none ${
                viewMode === "detailed"
                  ? "bg-premium-teal text-white shadow-sm"
                  : "text-muted-text hover:text-deep-brown bg-transparent"
              }`}
            >
              Detailed View
            </button>
            <button
              onClick={() => setViewMode("quick")}
              className={`px-5 py-2 rounded-full font-body text-xs font-semibold tracking-wide transition-all cursor-pointer border-none ${
                viewMode === "quick"
                  ? "bg-premium-teal text-white shadow-sm"
                  : "text-muted-text hover:text-deep-brown bg-transparent"
              }`}
            >
              Quick View
            </button>
          </div>
        </div>

        {/* Filter Navigation - Hidden in preview mode */}
        {!preview && (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {filterButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id)}
                className={`px-5 py-2.5 rounded-full font-body text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeFilter === btn.id
                    ? "bg-premium-teal text-white shadow-md shadow-premium-teal/15"
                    : "bg-white border border-deep-brown/5 text-muted-text hover:text-luxury-gold hover:border-luxury-gold/30 shadow-sm cursor-pointer"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}

        {/* Services Render */}
        {viewMode === "detailed" ? (
          <div>
            {/* Desktop Grid (3D Flip Cards) */}
            <motion.div 
              layout
              className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    layout
                    key={`desktop-card-${service.title}-${idx}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: idx * 0.04, duration: 0.5 }}
                    className="w-full h-[400px] perspective-1000 group cursor-pointer"
                  >
                    <div className="w-full h-full relative preserve-3d transition-transform duration-600 ease-out group-hover:rotate-y-180">
                      
                      {/* FRONT FACE */}
                      <div className="absolute inset-0 w-full h-full rounded-[24px] overflow-hidden backface-hidden shadow-md group-hover:shadow-xl transition-shadow duration-500 border border-white/10 flex flex-col justify-end z-10 group-hover:z-0 group-hover:pointer-events-none">
                        
                        {/* Background Image using next/image */}
                        <div className="absolute inset-0 w-full h-full z-0">
                          {service.image && (
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                              className="object-cover transition-transform duration-600 ease-out group-hover:scale-105"
                              placeholder="blur"
                            />
                          )}
                          {/* Premium Dark Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 z-10" />
                        </div>

                        {/* Content on front */}
                        <div className="relative z-20 p-8 flex flex-col gap-2">
                          <span className="font-body text-[10px] font-semibold text-[#E5C16A] uppercase tracking-wider">
                            {service.category}
                          </span>
                          <h4 className="font-headings text-xl font-bold text-white tracking-wide leading-tight">
                            {service.title}
                          </h4>
                          <p className="font-body text-xs text-white/80 line-clamp-2 leading-relaxed mt-1">
                            {service.desc}
                          </p>
                        </div>
                      </div>

                      {/* BACK FACE */}
                      <div 
                        onClick={() => openModal()}
                        className="absolute inset-0 w-full h-full rounded-[24px] overflow-hidden backface-hidden rotate-y-180 bg-gradient-to-b from-[#22444b] to-[#112226] border border-luxury-gold/25 p-8 flex flex-col justify-between shadow-xl cursor-pointer z-0 group-hover:z-20 group-hover:pointer-events-auto"
                      >
                        {/* Background luxury gradient mesh */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(216,154,60,0.06),transparent_60%)] pointer-events-none" />
                        <div className="absolute top-4 right-4 w-24 h-24 bg-luxury-gold/5 blur-2xl rounded-full pointer-events-none" />

                        <div className="flex flex-col gap-3 relative z-10">
                          <div className="flex items-center justify-between w-full">
                            <div className="w-10 h-10 rounded-xl bg-[#E5C16A]/10 text-[#E5C16A] flex items-center justify-center border border-[#E5C16A]/20">
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="font-body text-[10px] font-bold text-[#E5C16A] bg-[#E5C16A]/10 px-2.5 py-1 rounded-full border border-[#E5C16A]/20 uppercase tracking-wider">
                              {service.duration}
                            </span>
                          </div>
                          <h4 className="font-headings text-xl font-bold text-white mt-2 leading-tight">
                            {service.title}
                          </h4>
                          <p className="font-body text-xs sm:text-sm text-white/90 leading-relaxed">
                            {service.desc}
                          </p>
                        </div>

                        <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openModal();
                            }}
                            className="font-body text-xs font-bold text-white hover:text-white/80 flex items-center gap-1.5 transition-colors duration-300 bg-transparent border-none cursor-pointer group/btn"
                          >
                            Book Now <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                          </button>
                          <span className="font-body text-[9px] text-white/40 uppercase tracking-wider">
                            {service.category}
                          </span>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Mobile/Tablet Compact Card Grid (2-columns on mobile, no flipping, direct CTAs) */}
            <motion.div 
              layout
              className="grid grid-cols-2 md:hidden gap-4"
            >
              {filteredServices.map((service, idx) => {
                return (
                  <motion.div
                    layout
                    key={`mobile-card-${service.title}-${idx}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03, duration: 0.4 }}
                    className="w-full rounded-[18px] border border-deep-brown/5 shadow-[0_4px_12px_rgba(106,74,43,0.03)] flex flex-col bg-white overflow-hidden"
                  >
                    {/* Top Image */}
                    <div className="h-24 sm:h-28 w-full relative">
                      {service.image && (
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="50vw"
                          className="object-cover"
                          placeholder="blur"
                        />
                      )}
                      {/* Dark gradient overlay for title contrast on images */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent z-10" />
                      <span className="absolute bottom-2 left-2 z-20 font-body text-[8px] font-bold text-[#E5C16A] uppercase bg-black/50 px-1.5 py-0.5 rounded leading-none">
                        {service.duration}
                      </span>
                    </div>
                    {/* Bottom details */}
                    <div className="p-3 flex-grow flex flex-col justify-between">
                      <div className="flex-grow">
                        <span className="font-body text-[8px] font-semibold text-luxury-gold uppercase tracking-wider block">
                          {service.category}
                        </span>
                        <h4 className="font-headings text-[12px] font-bold text-deep-brown line-clamp-1 mt-0.5 leading-snug">
                          {service.title}
                        </h4>
                        <p className="font-body text-[10px] text-muted-text line-clamp-2 mt-0.5 leading-normal">
                          {service.desc}
                        </p>
                      </div>
                      <button
                        onClick={() => openModal()}
                        className="w-full py-1.5 mt-2.5 rounded-lg bg-premium-teal hover:bg-premium-teal/90 text-white font-body text-[9px] font-semibold text-center transition-all cursor-pointer border-none shadow-sm"
                      >
                        Book Now
                      </button>
                    </div>
                  </motion.div>
                );
              })}

              {/* Option A: Explore All Services CTA Card (visible on mobile/tablet in preview mode only) */}
              {preview && (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.12, duration: 0.4 }}
                  className="w-full rounded-[18px] border border-luxury-gold/30 shadow-[0_4px_12px_rgba(106,74,43,0.05)] flex flex-col justify-between bg-gradient-to-b from-[#22444b] to-[#112226] overflow-hidden p-3 min-h-[220px]"
                >
                  <div className="flex flex-col gap-1.5 flex-grow justify-center text-center p-1.5">
                    <div className="w-9 h-9 rounded-full bg-[#E5C16A]/15 text-[#E5C16A] flex items-center justify-center border border-[#E5C16A]/25 mx-auto mb-1.5 shrink-0 animate-pulse">
                      <Sparkles className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="font-headings text-[12px] font-bold text-white leading-tight">
                      Explore All Offerings
                    </h4>
                    <p className="font-body text-[9px] text-white/80 leading-normal line-clamp-2">
                      Discover our complete range of scientific & Vedic programs.
                    </p>
                  </div>
                  <Link
                    href="/services"
                    className="w-full py-2 rounded-lg bg-luxury-gold hover:bg-luxury-gold/90 text-white font-body text-[9px] font-bold text-center transition-all cursor-pointer border-none shadow-sm flex items-center justify-center gap-1"
                  >
                    <span>View Services</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </div>
        ) : (
          /* Quick View (Grid of clean compact badge-cards on both mobile & desktop) */
          <motion.div 
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            {filteredServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  layout
                  key={`quick-card-${service.title}-${idx}`}
                  onClick={() => openModal()}
                  className="rounded-2xl border border-deep-brown/5 bg-white p-4 flex flex-col justify-between min-h-[110px] hover:border-luxury-gold/30 hover:shadow-sm transition-all duration-300 cursor-pointer select-none group"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="w-8 h-8 rounded-lg bg-luxury-gold/10 text-luxury-gold flex items-center justify-center border border-luxury-gold/20 group-hover:bg-premium-teal/10 group-hover:text-premium-teal group-hover:border-premium-teal/20 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-body text-[8px] font-semibold text-muted-text uppercase">
                      {service.duration}
                    </span>
                  </div>
                  <div className="mt-3">
                    <h4 className="font-headings text-xs font-bold text-deep-brown leading-snug line-clamp-2 group-hover:text-luxury-gold transition-colors">
                      {service.title}
                    </h4>
                    <div className="flex items-center gap-1 font-body text-[8px] font-semibold text-premium-teal mt-1">
                      <span>Book Now</span>
                      <ArrowRight className="w-2.5 h-2.5 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Quick View CTA Chip (visible in preview mode only, maintains row symmetry) */}
            {preview && (
              <Link
                href="/services"
                className="rounded-2xl border border-luxury-gold/30 bg-gradient-to-r from-[#22444b] to-[#112226] p-4 flex flex-col justify-between min-h-[110px] hover:shadow-md transition-all duration-300 cursor-pointer select-none group"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="w-8 h-8 rounded-lg bg-[#E5C16A]/15 text-[#E5C16A] flex items-center justify-center border border-[#E5C16A]/25">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#E5C16A] transform group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="mt-3">
                  <h4 className="font-headings text-xs font-bold text-white leading-snug">
                    View All Offerings
                  </h4>
                  <span className="font-body text-[8px] font-semibold text-[#E5C16A] block mt-0.5 uppercase tracking-wide">
                    Explore 15+ Services
                  </span>
                </div>
              </Link>
            )}
          </motion.div>
        )}

        {/* Learn More Button for preview mode - Visible on desktop only */}
        {preview && (
          <div className="hidden md:flex justify-center mt-16">
            <Link
              href="/services"
              className="px-8 py-3.5 btn-gold font-body text-sm font-semibold tracking-wide flex items-center gap-2"
            >
              Explore All Services & Offerings <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
