"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Compass, Award, ArrowRight, GraduationCap, Briefcase, Check, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Import local category/feature images statically
import imgMission from "@/assets/Our Mission.png";
import imgVision from "@/assets/Our Vision.png";
import imgPhilosophy from "@/assets/Philosophy.png";


// Counter Subcomponent
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px 100px 0px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const duration = 2; // seconds
      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);

      const timer = setInterval(() => {
        start += Math.ceil(end / (totalMiliseconds / incrementTime));
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-headings text-4xl sm:text-5xl font-black text-luxury-gold">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function About({ preview = false }: { preview?: boolean }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "0px 0px 100px 0px" });

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const aboutCards = [
    {
      icon: Target,
      title: "Our Mission",
      desc: "To deliver personalized, data-backed guidance that builds confidence, clarity, and harmony in individual lives.",
      image: imgMission
    },
    {
      icon: Eye,
      title: "Our Vision",
      desc: "To become the global benchmark for holistic life alignment services, blending science and spirituality.",
      image: imgVision
    },
    {
      icon: Compass,
      title: "Philosophy",
      desc: "True alignment lies at the intersection of cognitive intelligence and spiritual configuration.",
      image: imgPhilosophy
    }
  ];


  return (
    <section id="about" className="py-12 md:py-20 bg-white relative" ref={containerRef}>
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-sage/5 blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">

        {/* Section Header */}
        <div className="max-w-4xl mb-8">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-body text-xs font-semibold tracking-widest text-luxury-gold uppercase block mb-3"
          >
            About Pariichay
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-headings text-3xl sm:text-4xl md:text-5xl font-bold text-deep-brown leading-tight"
          >
            Integrating Psychometric Insights & Vedic Knowledge for Complete Life Alignment
          </motion.h2>
        </div>

        {preview ? (
          /* Preview Mode for Home Page */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="font-body text-base sm:text-lg text-body-text/90 leading-relaxed"
              >
                <p className="mb-4">
                  Pariichay brings over 20 years of experience in the teaching field combined with data-backed psychometric profiling and Vedic wisdom.
                </p>
                <p>
                  Founded by Jignesh Prajapati, we empower students, parents, and professionals with structured life guidance and career alignment.
                </p>
              </motion.div>
              <div className="flex mt-4">
                <Link
                  href="/about"
                  className="px-8 py-3.5 btn-gold font-body text-sm font-semibold tracking-wide flex items-center gap-2"
                >
                  Learn More About Our Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative w-full h-80 rounded-[32px] overflow-hidden bg-gradient-to-tr from-luxury-gold/10 via-white to-premium-teal/10 flex items-center justify-center border border-white/60 shadow-md">
              <div className="text-center p-6 flex flex-col items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-white border border-luxury-gold/20 flex items-center justify-center shadow-sm">
                  <Award className="w-8 h-8 text-luxury-gold animate-bounce duration-[3000ms]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-headings text-2xl font-black text-premium-teal">20+ Years</span>
                  <span className="font-body text-xs font-semibold text-luxury-gold tracking-widest uppercase mt-1">
                    Teaching &amp; Guidance Experience
                  </span>
                </div>
                <p className="font-body text-xs text-muted-text max-w-xs">
                  Blending 20+ years in teaching with data-backed psychometric profiling &amp; Vedic wisdom.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Full Page Mode */
          <>
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">

              {/* Left Column: Story Intro */}
              <div className="flex flex-col gap-10">
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="font-body text-base sm:text-lg text-body-text/90 leading-relaxed"
                >
                  <p className="mb-6">
                    Pariichay believes every individual possesses unique strengths, untapped potential, and the ability to create a meaningful life with the right guidance. Backed by over 20 years of experience in the teaching field, our counselling approach combines scientific psychology, practical coaching methodologies, and holistic human development to help individuals gain clarity, confidence, and direction.
                  </p>
                  <p className="mb-6">
                    Whether you are a student choosing a career, a parent seeking better understanding, or a professional navigating life decisions, our goal is to provide structured guidance through evidence-based assessments and years of practical experience.
                  </p>
                  <p>
                    At Pariichay, we focus on empowering individuals with personalized counselling that supports career growth, emotional wellbeing, parenting, personality development, and lifelong success.
                  </p>
                </motion.div>
              </div>

              {/* Right Column: Founder Profile & Animated Experience Timeline */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="glass-card rounded-[32px] p-8 md:p-10 border border-white/60 shadow-md relative"
              >
                {/* Visual Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 border-b border-deep-brown/5 pb-8">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-tr from-luxury-gold to-premium-teal flex items-center justify-center text-white font-headings text-3xl font-bold shadow-md">
                    <span>JP</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headings text-xl font-bold text-deep-brown">Jignesh Prajapati</span>
                    <span className="font-body text-xs text-luxury-gold uppercase tracking-wider font-semibold mt-1">
                      Founder & Senior Advisor
                    </span>
                    <span className="font-body text-xs text-muted-text mt-1">
                      Certified Vedic Astrologer & DMIT Expert
                    </span>
                  </div>
                </div>
                {/* Professional Profile Cards */}
                <div className="grid grid-cols-1 gap-6">
                  {/* Education Card */}
                  <div className="relative bg-white border border-deep-brown/5 rounded-[18px] p-5 border-l-4 border-[#124E2F] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-5 h-5 text-premium-teal" />
                      <h4 className="font-headings text-lg font-bold text-deep-brown">Education</h4>
                    </div>
                    <p className="mt-2 text-sm text-muted-text">B.Com. &amp; B.Ed. (2005)</p>
                  </div>
                  {/* Teaching Experience Card */}
                  <div className="relative bg-white border border-deep-brown/5 rounded-[18px] p-5 border-l-4 border-[#124E2F] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-premium-teal" />
                      <h4 className="font-headings text-lg font-bold text-deep-brown">Teaching Field Experience</h4>
                    </div>
                    <p className="mt-2 text-sm text-muted-text">20+ Years of Experience in Teaching Field</p>
                  </div>
                  {/* Career Coaching Card */}
                  <div className="relative bg-white border border-deep-brown/5 rounded-[18px] p-5 border-l-4 border-[#124E2F] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-5 h-5 text-premium-teal" />
                      <h4 className="font-headings text-lg font-bold text-deep-brown">Career Coaching</h4>
                    </div>
                    <p className="mt-2 text-sm text-muted-text">Started Professional Career Coaching<br />Since 2016</p>
                  </div>
                  {/* Certifications Card */}
                  <div className="relative bg-white border border-deep-brown/5 rounded-[18px] p-5 border-l-4 border-[#124E2F] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-premium-teal" />
                      <h4 className="font-headings text-lg font-bold text-deep-brown">Professional Certifications</h4>
                    </div>
                    <ul className="mt-2 space-y-1 text-sm text-muted-text">
                      <li>✔ Bada Business – Dr. Vivek Bindra LTM Member (Jan 2022, 2023 & 2024)</li>
                      <li>✔ Parenting Certification – Samanvay Group (May 2022)</li>
                      <li>✔ NFNLP – National Federation of Neuro Linguistic Programming, Florida, USA (Dec 2021)</li>
                      <li>✔ Astrology & Numerology – Jyotish Vidhyalaya, Ambala (Mentor: Anurag) (Nov 2021)</li>
                      <li>✔ Life Changing Program – Sneh Desai (Jan 2021)</li>
                      <li>✔ Mind Development – Dr. Jitendra (Dec 2020)</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Redesigned Premium Cards Grid (Mission, Vision, Philosophy) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {aboutCards.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: idx * 0.15 + 0.2, duration: 0.6 }}
                    className="relative flex flex-col bg-white border border-deep-brown/5 rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(106,74,43,0.03)] hover:shadow-[0_20px_40px_rgba(106,74,43,0.08)] hover:-translate-y-2 transition-all duration-500 ease-out group h-[420px] select-none"
                  >
                    {/* Top edge gold highlight glow indicator */}
                    <div className="absolute top-0 inset-x-0 h-[3px] bg-luxury-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-20" />

                    {/* Card Image section (45% height) */}
                    <div className="relative w-full h-[190px] overflow-hidden shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-w-768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-600 ease-out group-hover:scale-104"
                        loading="lazy"
                        placeholder="blur"
                      />
                    </div>

                    {/* Lower Card content (generous spacing) */}
                    <div className="p-8 flex flex-col gap-4 flex-grow justify-between">
                      <div className="flex flex-col items-start gap-4">
                        {/* Lucide Icon box */}
                        <div className="w-10 h-10 rounded-xl bg-premium-teal/5 flex items-center justify-center border border-premium-teal/10 text-premium-teal shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        {/* Title and accent underline animation */}
                        <div className="flex flex-col items-start gap-2 relative">
                          <h4 className="font-headings text-lg font-bold text-deep-brown transition-transform duration-500 group-hover:-translate-y-0.5">
                            {item.title}
                          </h4>
                          <span className="w-0 h-[1.5px] bg-luxury-gold group-hover:w-12 transition-all duration-500 ease-out" />
                        </div>
                      </div>
                      <p className="font-body text-xs sm:text-sm text-muted-text leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>


            {/* Counter Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 border-t border-deep-brown/10 pt-10">
              {[
                { value: 20, suffix: "+", label: "Years in Teaching" },
                { value: 10, suffix: "+", label: "Years in Counselling" },
                { value: 500, suffix: "+", label: "Happy Families" },
                { value: 1000, suffix: "+", label: "Students Guided" },
                { value: 1000, suffix: "+", label: "Scientific Assessments" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.1 + 0.2, duration: 0.6 }}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <span className="font-body text-sm font-semibold text-deep-brown tracking-wider uppercase">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
}
