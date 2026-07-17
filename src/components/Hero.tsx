"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Compass, Award, Shield, Heart, Sparkles, BookOpen } from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";

export default function Hero() {
  const { openModal } = useBookingModal();
  const heroRef = useRef<HTMLDivElement>(null);

  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroDone(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseCoords({ x: 0, y: 0 });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 70, damping: 15 },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 12 },
    },
  };

  return (
    <section 
      id="home" 
      className="relative overflow-visible select-none bg-[#FCFAF7] pt-24 pb-16 lg:pt-28 lg:pb-20"
      style={{ backgroundColor: "#FCFAF7" }}
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* 
        NO GRADIENT GLOWS OR BEIGE OVERLAYS REMAIN
        Background is strictly and computed exactly as #FFFFFF.
      */}

      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-x-8 lg:gap-x-12 gap-y-10 items-center relative z-10">
        
        {/* Left Column (50% desktop width via col-span-6) */}
        <div className="flex flex-col text-left col-span-12 lg:col-span-7 xl:col-span-6 order-1">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col text-left"
          >
            {/* Badge */}
            <motion.div variants={badgeVariants} className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAFAFA] border border-[#EAE6DF] shadow-sm mb-6">
              <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
              <span className="font-body text-xs font-semibold text-deep-brown tracking-wider uppercase">
                Clarity Today, Success Tomorrow
              </span>
            </motion.div>

            {/* Heading (Constrained width to 620px for better layout balance at 1440px container) */}
            <motion.h1
              variants={itemVariants}
              className="font-headings text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-brown leading-[1.1] tracking-tight mb-6 lg:max-w-[620px]"
            >
              Helping You Discover Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-secondary-gold">
                True Potential
              </span>{" "}
              Through Scientific & Vedic Counselling
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="font-body text-base sm:text-lg text-body-text/80 leading-relaxed mb-8 max-w-2xl"
            >
              Navigating life's complexities shouldn't be done alone. We combine modern psychological science with ancient Vedic insights to provide holistic guidelines for students, parents, and professionals.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
            >
              <button
                onClick={openModal}
                className="px-8 py-3.5 btn-gold font-body text-sm font-semibold tracking-wide flex items-center justify-center gap-2 border-none cursor-pointer"
              >
                Book Consultation <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/services"
                className="px-8 py-3.5 btn-teal font-body text-sm font-semibold tracking-wide flex items-center justify-center gap-2"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
 
        {/* Right Column: Creative Visual Illustration (50% desktop width via col-span-6) */}
        <div className="flex flex-col items-center justify-center w-full col-span-12 lg:col-span-5 xl:col-span-6 order-2 relative py-4 lg:py-0">
          
          {/* Orbiting particles around the logo center (Reduced to 3 particles, hidden on mobile/tablet) */}
          <div 
            className="hidden lg:flex absolute w-[440px] h-[440px] pointer-events-none z-10 items-center justify-center transition-transform duration-700 ease-out"
            style={{
              transform: `translate(${mouseCoords.x * 6}px, ${mouseCoords.y * 6}px)`
            }}
          >
            {/* Particle 1 */}
            <div 
              className="absolute w-2 h-2 rounded-full bg-[#123E25]/35 blur-[0.3px] animate-orbit" 
              style={{"--orbit-radius": "150px", "--orbit-duration": "25s"} as React.CSSProperties}
            />
            {/* Particle 2 */}
            <div 
              className="absolute w-1.5 h-1.5 rounded-full bg-[#1E5E3A]/40 blur-[0.3px] animate-orbit" 
              style={{"--orbit-radius": "190px", "--orbit-duration": "35s", "animationDelay": "-5s"} as React.CSSProperties}
            />
            {/* Particle 3 */}
            <div 
              className="absolute w-2 h-2 rounded-full bg-[#123E25]/30 blur-[0.3px] animate-orbit" 
              style={{"--orbit-radius": "230px", "--orbit-duration": "45s", "animationDelay": "-10s"} as React.CSSProperties}
            />
          </div>

          {/* Grouped Logo centerpiece & Brand Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={
              introDone 
                ? { 
                    opacity: 1, 
                    scale: [1, 1.02, 1],
                    y: [0, -4, 0],
                    rotate: 0 
                  } 
                : { 
                    opacity: 1, 
                    scale: 1, 
                    rotate: 0 
                  }
            }
            transition={
              introDone 
                ? { 
                    scale: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                    y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                    opacity: { duration: 0.3 }
                  } 
                : { 
                    duration: 1.1, 
                    ease: [0.22, 1, 0.36, 1] 
                  }
            }
            className="relative z-10 flex flex-col items-center justify-center select-none transition-transform duration-700 ease-out w-full"
            style={{
              transform: `translate(${mouseCoords.x * 12}px, ${mouseCoords.y * 12}px)`
            }}
          >
            <img 
              src="/logo.png" 
              alt="Pariichay Logo" 
              className="object-contain filter drop-shadow-[0_4px_16px_rgba(106,74,43,0.02)]"
              style={{
                width: 'clamp(180px, 22vw, 340px)',
                height: 'auto',
              }}
            />
            
            {/* Project/Brand Name directly below logo */}
            <div className="font-headings text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-secondary-gold to-deep-brown uppercase tracking-wider mt-4 sm:mt-5 select-none text-center">
              Pariichay
            </div>
          </motion.div>
        </div>

        {/* Bottom Left: Trust Indicators (Feature points) */}
        <div className="col-span-12 lg:col-span-7 xl:col-span-6 order-3 border-t border-deep-brown/10 pt-8 mt-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-y-4 gap-x-6"
          >
            {[
              { icon: Award, text: "Certified Guidance" },
              { icon: Compass, text: "Scientific Assessments" },
              { icon: Heart, text: "Holistic Growth" },
              { icon: Shield, text: "Confidential Sessions" },
            ].map((trust, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-premium-teal/5 flex items-center justify-center border border-premium-teal/10">
                  <trust.icon className="w-4 h-4 text-premium-teal" />
                </div>
                <span className="font-body text-sm font-medium text-body-text/95">{trust.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
