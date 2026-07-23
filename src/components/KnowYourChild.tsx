"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { 
  BookOpen, 
  Brain, 
  FileText, 
  Compass, 
  Gift, 
  Award, 
  ShieldAlert, 
  Activity, 
  User, 
  TrendingUp,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";
import Image from "next/image";

// Import all category illustrations statically
import imgLearningStyle from "@/assets/Academic Counselling.png";
import imgThinkingPattern from "@/assets/Bio Metric Assessment.png";
import imgSubjectSelection from "@/assets/Scientific Assessment.png";
import imgCareerDirection from "@/assets/Career Guidance.png";
import imgHiddenTalents from "@/assets/Know Your Child.png";
import imgNaturalStrengths from "@/assets/Positive Parenting.png";
import imgVulnerabilities from "@/assets/Child Behaviour Counselling.png";
import imgBehaviorAnalysis from "@/assets/360° Counselling.png";
import imgPersonalityType from "@/assets/Relationship Counselling.png";
import imgFutureGrowth from "@/assets/Vedic Astrology.png";

const childDimensions = [
  {
    icon: BookOpen,
    title: "Learning Style",
    desc: "Identifies if your child is a Visual, Auditory, or Kinesthetic learner to tailor custom study methods.",
    image: imgLearningStyle
  },
  {
    icon: Brain,
    title: "Thinking Pattern",
    desc: "Uncovers left-brain vs. right-brain dominance, evaluating logical-analytical speed vs. creative-intuitive habits.",
    image: imgThinkingPattern
  },
  {
    icon: FileText,
    title: "Subject Selection",
    desc: "Maps cognitive capacity to streamline stream choices (Science, Commerce, Arts) post-10th grade.",
    image: imgSubjectSelection
  },
  {
    icon: Compass,
    title: "Career Direction",
    desc: "Correlates innate parameters with market profiles to design a direct path to a fulfilling career.",
    image: imgCareerDirection
  },
  {
    icon: Gift,
    title: "Hidden Talents",
    desc: "Exposes latent talents, artistic, athletic or linguistic capabilities that might go unnoticed in standard schooling.",
    image: imgHiddenTalents
  },
  {
    icon: Award,
    title: "Natural Strengths",
    desc: "Details core areas of high emotional quotient (EQ), resilience, focus, and leadership capabilities.",
    image: imgNaturalStrengths
  },
  {
    icon: ShieldAlert,
    title: "Vulnerabilities & Weaknesses",
    desc: "Highlights stress triggers, cognitive bottlenecks, and behavioral pitfalls to provide early support strategies.",
    image: imgVulnerabilities
  },
  {
    icon: Activity,
    title: "Behavior Analysis",
    desc: "Tracks underlying causes for defiance, screen dependency, social withdrawal, or mood transitions.",
    image: imgBehaviorAnalysis
  },
  {
    icon: User,
    title: "Personality Type",
    desc: "Defines whether your child is introverted, extroverted, intuitive, or sensory-driven, easing family relationships.",
    image: imgPersonalityType
  },
  {
    icon: TrendingUp,
    title: "Future Growth Alignment",
    desc: "Builds a long-term psychological and physical development chart aligning goals with planetary time cycles.",
    image: imgFutureGrowth
  }
];

export default function KnowYourChild() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "0px 0px 100px 0px" });
  const { openModal } = useBookingModal();

  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isIntersectingRef = useRef<boolean[]>(new Array(childDimensions.length).fill(false));
  const activeIndexRef = useRef(0);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -54% 0px", // Trigger activation precisely when a card reaches 45% of viewport height
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], // Granular thresholds for seamless detection
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
        if (index !== -1) {
          isIntersectingRef.current[index] = entry.isIntersecting;
        }
      });

      // Find the card closest to the 45% viewport horizontal line
      let closestIndex = -1;
      let minDistance = Infinity;
      const viewportCenter = window.innerHeight * 0.45;

      stepRefs.current.forEach((ref, idx) => {
        if (ref && isIntersectingRef.current[idx]) {
          const rect = ref.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(viewportCenter - elementCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = idx;
          }
        }
      });

      if (closestIndex !== -1 && closestIndex !== activeIndexRef.current) {
        activeIndexRef.current = closestIndex;
        setActiveIndex(closestIndex);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="know-your-child" className="py-16 md:py-24 bg-primary-bg relative overflow-hidden" ref={containerRef}>
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-luxury-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-premium-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Sticky Left Column Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="font-body text-xs font-semibold tracking-widest text-luxury-gold uppercase block mb-3">
              Know Your Child
            </span>
            <h2 className="font-headings text-3xl sm:text-4xl md:text-5xl font-bold text-deep-brown leading-tight">
              Decode Your Child's Innate Blueprint
            </h2>
            <p className="font-body text-sm sm:text-base text-muted-text mt-6 leading-relaxed">
              Every child is born with an individualized mental and emotional profile. Traditional assessment systems evaluate them relative to average parameters.
            </p>
            <p className="font-body text-sm sm:text-base text-muted-text mt-4 leading-relaxed">
              Our <strong>Know Your Child</strong> assessment integrates modern cognitive metrics with Vedic analysis to decipher their behavior, learning profiles, and growth milestones.
            </p>
            
            {/* CTA */}
            <div className="mt-8 flex">
              <button
                onClick={() => openModal("Know Your Child Assessment")}
                className="px-8 py-3.5 btn-gold font-body text-sm font-semibold tracking-wide flex items-center gap-2 border-none cursor-pointer shadow-sm hover:shadow"
              >
                Book Child Assessment <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick trust tag */}
            <div className="mt-8 flex items-center gap-2 text-xs text-muted-text">
              <Sparkles className="w-4 h-4 text-luxury-gold" />
              <span>Includes 15+ page customized parenting blueprint report</span>
            </div>

            {/* Styled Report Highlights Block replacing the slider image */}
            <div className="relative w-full rounded-[24px] border border-luxury-gold/20 bg-luxury-gold/5 p-6 mt-8 select-none">
              <h4 className="font-headings text-sm sm:text-base font-bold text-deep-brown mb-3.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-luxury-gold animate-pulse" /> Included in the Blueprint Dossier:
              </h4>
              <ul className="space-y-3 font-body text-xs text-body-text/90 pl-1">
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-1.5 shrink-0" />
                  <span><strong>15+ Page Customized Blueprint:</strong> Complete developmental roadmaps with concrete parenting scripts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-1.5 shrink-0" />
                  <span><strong>Innate Learning Profile:</strong> Identifies sensory preference channels (Visual/Auditory/Kinesthetic) to improve grades.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-1.5 shrink-0" />
                  <span><strong>Hidden Capacities:</strong> Reveals natural creative, athletic, and logical talents neglected by average metrics.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-1.5 shrink-0" />
                  <span><strong>Planetary Transit Charting:</strong> Integrates Vedic planetary cycles to map future academic and behavioral milestones.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Scrolling Right Column Timeline */}
          <div className="lg:col-span-7 relative pl-8 md:pl-12">
            
            {/* Geometrically Perfect Timeline Track Background Rail (2px) */}
            <div className="absolute left-[11px] md:left-[15px] top-4 bottom-4 w-[2px] bg-[#D6E2DB] z-0">
              
              {/* Gold & Warm Amber Progress Fill Rail (3px overlay) */}
              <div 
                className="absolute top-0 left-[-0.5px] w-[3px] bg-gradient-to-b from-[#123E25] to-[#1E5E3A] transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top rounded-full z-0" 
                style={{ height: `${(activeIndex / 9) * 100}%` }}
              >
                {/* Energy Glow Tip Indicator */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#1E5E3A] shadow-[0_0_15px_#1E5E3A] animate-pulse pointer-events-none" />
              </div>
            </div>

            {/* Spacing Container */}
            <div className="flex flex-col gap-6 relative z-10">
              {childDimensions.map((item, idx) => {
                const Icon = item.icon;
                const isActive = idx === activeIndex;
                return (
                  <motion.div
                    key={item.title}
                    ref={(el) => {
                      stepRefs.current[idx] = el;
                    }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: idx * 0.08, duration: 0.6 }}
                    className="relative flex gap-6 md:gap-8 items-start w-full"
                  >
                    
                    {/* Circle Bullet marker (center aligned with vertical timeline progress) */}
                    <div className="flex justify-center items-start shrink-0 relative w-6 md:w-8 h-full">
                      <div 
                        className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center border-2 shadow-sm z-10 transition-all duration-450 ease-out select-none ${
                          isActive 
                            ? "timeline-circle-active" 
                            : "bg-white border-luxury-gold text-luxury-gold hover:border-premium-teal"
                        }`}
                      >
                        <span className="font-body text-[10px] md:text-xs font-bold">
                          {idx + 1}
                        </span>
                      </div>
                    </div>

                    {/* Horizontal Connector Line Animation (bridges bullet center to card edge) */}
                    <div 
                      className={`absolute top-[11px] md:top-[15px] h-[3px] bg-gradient-to-r from-[#123E25] to-[#1E5E3A] origin-left transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] z-10 pointer-events-none ${
                        isActive 
                          ? "left-[24px] w-[24px] md:left-[32px] md:w-[32px] opacity-100 scale-x-100" 
                          : "left-[24px] w-0 md:left-[32px] md:w-0 opacity-0 scale-x-0"
                      }`}
                    />

                    {/* Content Card */}
                    <div 
                      className={`flex-grow border rounded-2xl p-6 relative overflow-hidden flex flex-col sm:flex-row items-start gap-4 transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] select-none ${
                        isActive 
                          ? "-translate-y-2 bg-[#F3F7F5] border-l-[3px] border-l-[#123E25] border-y-white/40 border-r-white/40 shadow-[0_20px_40px_rgba(11,32,20,0.08)]" 
                          : "bg-white border-white/60 shadow-sm translate-y-0"
                      }`}
                    >
                      {/* Faint Shimmer sweeps once when card triggers active state */}
                      {isActive && <div className="timeline-card-shimmer" />}

                      {/* Icon Container */}
                      <div 
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isActive 
                            ? "bg-luxury-gold/15 text-luxury-gold border-luxury-gold/25 scale-108" 
                            : "bg-luxury-gold/10 text-luxury-gold border-luxury-gold/10 scale-100"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Content details */}
                      <div className="flex flex-col gap-1.5 relative z-10">
                        <h4 
                          className={`font-headings text-base sm:text-lg text-deep-brown transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isActive ? "font-extrabold" : "font-bold"
                          }`}
                        >
                          {item.title}
                        </h4>
                        <p 
                          className={`font-body text-xs sm:text-sm text-muted-text leading-relaxed transition-opacity duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isActive ? "opacity-100" : "opacity-80"
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
