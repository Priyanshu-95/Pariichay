"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  MessageSquare, 
  ClipboardList, 
  BarChart3, 
  Heart, 
  FileText, 
  RefreshCw,
  ArrowRight
} from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";

const steps = [
  {
    icon: Calendar,
    title: "Book Consultation",
    desc: "Submit your details via our web inquiry form. Specify your preferred mode (online/offline) and suitable date.",
  },
  {
    icon: MessageSquare,
    title: "Initial Discussion",
    desc: "An introductory call to understand your primary requirements, challenges, and select the optimal evaluation plan.",
  },
  {
    icon: ClipboardList,
    title: "Assessment Execution",
    desc: "Execute customized psychometrics, biometric scans, and Vedic profiling in an environment of complete safety.",
  },
  {
    icon: BarChart3,
    title: "Detailed Analysis",
    desc: "Our panels evaluate findings, compiling your cognitive styles, planetary cycles, and behavioral mappings.",
  },
  {
    icon: Heart,
    title: "Counselling Session",
    desc: "A dedicated session with our lead counselor explaining findings, addressing issues, and offering reassurance.",
  },
  {
    icon: FileText,
    title: "Action Plan Delivery",
    desc: "Receive your customized parenting scripts, career path guides, and wellness actions inside a detailed report dossier.",
  },
  {
    icon: RefreshCw,
    title: "Follow Up Session",
    desc: "Check-in calls scheduled weeks after the session to track adjustments, evaluate targets, and provide backup counsel.",
  }
];

// Grid centers for 7 milestones fitting precisely inside 1020px container
const stepCenters = [60, 210, 360, 510, 660, 810, 960];
const getStepY = (idx: number) => (idx % 2 === 1 ? 50 : 110);

const getPopupShiftX = (idx: number) => {
  if (idx === 0) return 130;  // Shift right for Step 1
  if (idx === 6) return -130; // Shift left for Step 7
  return 0;                   // Centered for Steps 2–6
};

const segmentPaths = [
  "M 60,110 C 135,110 135,50 210,50",
  "M 210,50 C 285,50 285,110 360,110",
  "M 360,110 C 435,110 435,50 510,50",
  "M 510,50 C 585,50 585,110 660,110",
  "M 660,110 C 735,110 735,50 810,50",
  "M 810,50 C 885,50 885,110 960,110"
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openModal } = useBookingModal();

  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [sectionCoords, setSectionCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (activeStep !== null) return;
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setSectionCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setSectionCoords({ x: 0, y: 0 });
  };

  return (
    <section 
      id="process" 
      className="py-16 md:py-24 bg-primary-bg relative overflow-hidden select-none" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setActiveStep(null)}
    >
      
      {/* Zen concentric background elements (opacity < 5%) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: `translate(${sectionCoords.x * 2.5}px, ${sectionCoords.y * 2.5}px)`
        }}
      >
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-luxury-gold/5 opacity-[0.03]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-premium-teal/5 opacity-[0.02]" />
        <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-luxury-gold/5 opacity-[0.03]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Header (mb-8 to bring path closer) */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <span className="font-body text-xs font-semibold tracking-widest text-luxury-gold uppercase block mb-3">
            Counselling Process
          </span>
          <h2 className="font-headings text-3xl sm:text-4xl md:text-5xl font-bold text-deep-brown">
            Your Path to Alignment
          </h2>
          <p className="font-body text-sm sm:text-base text-muted-text mt-4">
            A structured, professional, and empathetic pathway designed to guide you step-by-step from initial inquiry to long-term growth.
          </p>
        </div>

        {/* Desktop Interactive Horizontal Layout (overflow-visible to prevent clipping) */}
        <div className="hidden lg:block relative w-full overflow-visible py-6">
          
          {/* Timeline Track Container */}
          <div className="relative w-[1020px] h-[480px] mx-auto">
            
            {/* SVG Waving Golden Ribbon Path */}
            <svg 
              className="absolute left-0 top-[20px] w-full h-[180px] pointer-events-none transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-0"
              style={{
                transform: `translate(${sectionCoords.x * 3}px, ${sectionCoords.y * 3}px)`
              }}
            >
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#123E25" />
                  <stop offset="100%" stopColor="#1E5E3A" />
                </linearGradient>
              </defs>

              {/* Muted Future Background Rail (2px) */}
              <path 
                d="M 60,110 C 135,110 135,50 210,50 C 285,50 285,110 360,110 C 435,110 435,50 510,50 C 585,50 585,110 660,110 C 735,110 735,50 810,50 C 885,50 885,110 960,110" 
                stroke="#D6E2DB" 
                strokeWidth="2" 
                fill="none" 
                opacity="0.5" 
              />

              {/* Active segments that thicken near hovered node circle */}
              {segmentPaths.map((pathStr, sIdx) => {
                const isHoveredSegment = hoveredNode !== null && (sIdx === hoveredNode - 1 || sIdx === hoveredNode);
                return (
                  <path 
                    key={sIdx}
                    d={pathStr}
                    stroke="url(#goldGradient)"
                    strokeWidth={isHoveredSegment ? "4.5" : "3"} 
                    fill="none"
                    className="transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      opacity: 1
                    }}
                  />
                );
              })}
            </svg>

            {/* Render Nodes, connectors, popups, and cards */}
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              const isDimmed = activeStep !== null && activeStep !== idx;
              const leftVal = stepCenters[idx];
              const topVal = getStepY(idx);
              const shiftX = getPopupShiftX(idx);

              return (
                <div 
                  key={idx} 
                  className={`absolute transition-all duration-550 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isSelected ? "z-30" : "z-20"
                  } ${
                    isDimmed 
                      ? "opacity-35 blur-[2.5px] scale-[0.96] pointer-events-none" 
                      : "opacity-100 blur-0 scale-100"
                  }`}
                  style={{
                    left: `${leftVal}px`,
                    top: `${topVal + 20}px`
                  }}
                >
                  
                  {/* Vertical connector line (linking path node to card) */}
                  <div 
                    className={`absolute w-[1.5px] bg-[#D6E2DB] left-1/2 -translate-x-1/2 origin-top transition-all duration-500 z-10 pointer-events-none ${
                      isSelected ? "bg-[#123E25] w-[2px]" : ""
                    }`}
                    style={{
                      top: "0px",
                      height: "60px",
                    }}
                  />

                  {/* Golden milestone node circle embedded directly in path */}
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (activeStep === idx) {
                        setActiveStep(null);
                      } else {
                        setActiveStep(idx);
                      }
                    }}
                    onMouseEnter={() => setHoveredNode(idx)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className={`absolute w-8 h-8 rounded-full border flex items-center justify-center z-20 select-none cursor-pointer transition-all duration-500 ${
                      isSelected 
                        ? "bg-[#123E25] border-[#123E25] text-white shadow-[0_0_0_6px_rgba(18,62,37,0.12),0_0_24px_rgba(18,62,37,0.25),0_8px_24px_rgba(0,0,0,0.12)] scale-110" 
                        : "bg-white border-luxury-gold text-luxury-gold shadow-sm hover:border-[#123E25]/50 scale-100 hover:-translate-y-1.5"
                    }`}
                    style={{
                      left: "0px",
                      top: "0px",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <span className="font-headings text-[11px] font-extrabold select-none">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Contextual Popup Detailed Card (Grows upward from circle node center) */}
                  <AnimatePresence>
                    {isSelected && (
                      <>
                        {/* Curved Connector SVG path linking node to popup bottom */}
                        <svg 
                          className="absolute bottom-[16px] left-0 w-[0px] h-[20px] pointer-events-none overflow-visible z-30"
                        >
                          <motion.path 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            exit={{ pathLength: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            d={`M 0,20 Q ${shiftX / 2 + (shiftX >= 0 ? 8 : -8)},10 ${shiftX},0`}
                            stroke="url(#goldGradient)"
                            strokeWidth="1.5"
                            fill="none"
                          />
                        </svg>

                        {/* Detailed popup panel details */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.85, y: 15 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.85, y: 15 }}
                          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute bottom-[36px] z-40 w-[380px] bg-white border border-[#D6E2DB] rounded-[24px] p-6 shadow-[0_15px_35px_rgba(11,32,20,0.08)] flex flex-col cursor-default"
                          style={{
                            left: `calc(50% - 190px + ${shiftX}px)`
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center border bg-gradient-to-br from-white to-[#F3F7F5] border-luxury-gold/20 text-[#123E25] shrink-0 rotate-6 scale-105 shadow-[inset_0_2px_4px_rgba(255,255,255,0.7)]">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-body text-[9px] font-bold text-luxury-gold tracking-widest uppercase">
                                Step 0{idx + 1}
                              </span>
                              <h3 className="font-headings text-base font-bold text-deep-brown">
                                {step.title}
                              </h3>
                            </div>
                          </div>

                          <p className="font-body text-xs text-muted-text leading-relaxed mb-5">
                            {step.desc}
                          </p>

                          <div className="flex items-center justify-between w-full">
                            <button 
                              onClick={() => {
                                setActiveStep(null);
                                openModal();
                              }}
                              className="px-5 py-2.5 btn-gold font-body text-[10px] font-bold tracking-wider flex items-center gap-1.5 cursor-pointer border-none shadow-sm hover:shadow"
                            >
                              Book Consultation <ArrowRight className="w-3.5 h-3.5" />
                            </button>

                            <button 
                              onClick={() => setActiveStep(null)}
                              className="text-xs text-muted-text hover:text-deep-brown font-body font-medium transition-colors cursor-pointer border-none bg-transparent"
                            >
                              Close
                            </button>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>

                  {/* Compact Milestone Card (below circle node) */}
                  <div
                    className="absolute"
                    style={{
                      top: "60px",
                      left: "0px",
                      transform: `translateX(-50%) translate(${sectionCoords.x * -3}px, ${sectionCoords.y * -3}px)`
                    }}
                  >
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        if (activeStep === idx) {
                          setActiveStep(null);
                        } else {
                          setActiveStep(idx);
                        }
                      }}
                      onMouseEnter={() => setHoveredNode(idx)}
                      onMouseLeave={() => setHoveredNode(null)}
                      className="timeline-milestone-float rounded-[22px] p-5 border bg-white flex flex-col items-center text-center select-none shadow-sm border-white/60 w-[145px] hover:-translate-y-1.5 hover:shadow-md hover:border-luxury-gold/20 group cursor-pointer transition-all duration-500"
                      style={{
                        transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)"
                      }}
                    >
                      {/* Step index */}
                      <span className="font-body text-[9px] font-bold text-luxury-gold tracking-widest uppercase mb-2">
                        Step 0{idx + 1}
                      </span>

                      {/* Icon */}
                      <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center border bg-gradient-to-br from-white to-[#F3F7F5] shadow-sm border-[#D6E2DB] text-premium-teal transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] mb-3 shrink-0 ${
                          hoveredNode === idx ? "scale-108 rotate-6 border-luxury-gold/20" : ""
                        }`}
                      >
                        <Icon className="w-5 h-5 shrink-0" />
                      </div>

                      {/* Title */}
                      <h4 className="font-headings text-xs font-bold text-deep-brown leading-tight">
                        {step.title}
                      </h4>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* Mobile Vertical Connected Stepper */}
        <div className="lg:hidden relative w-full px-2 py-6">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[31px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#123E25] via-[#1E5E3A] to-[#D6E2DB] rounded-full z-0" />

          <div className="flex flex-col gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative flex gap-5 items-start w-full">
                  {/* Step Bullet Circle */}
                  <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 border-2 border-luxury-gold bg-white text-luxury-gold shadow-sm z-10 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  {/* Step Card Content */}
                  <div className="flex-grow p-5 rounded-[20px] border border-deep-brown/5 bg-white shadow-[0_4px_16px_rgba(11,32,20,0.02)] flex flex-col">
                    <span className="font-body text-[9px] font-bold text-luxury-gold tracking-widest uppercase mb-1">
                      Step 0{idx + 1}
                    </span>
                    <h3 className="font-headings text-sm font-bold text-deep-brown">
                      {step.title}
                    </h3>
                    <p className="font-body text-xs text-muted-text mt-1.5 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
}
