"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// Import all category images statically
import imgChildren from "@/assets/Children.png";
import imgStudents from "@/assets/Students.png";
import imgParents from "@/assets/Parents.png";
import imgAdults from "@/assets/Adults.png";
import imgTeachers from "@/assets/Teachers.png";
import imgProfessionals from "@/assets/Professionals.png";
import imgCorporates from "@/assets/Corporates.png";
import imgCouples from "@/assets/Couples.png";

interface ClientGroup {
  title: string;
  subtitle: string;
  desc: string;
  image: StaticImageData;
}

const clientGroups: ClientGroup[] = [
  {
    title: "Children",
    subtitle: "Early Years Growth",
    desc: "Nurturing early psychological growth, emotional balance, screen time boundaries, and motor milestone alignments.",
    image: imgChildren
  },
  {
    title: "Students",
    subtitle: "Academic & Career Pathing",
    desc: "Combating exam stress, choosing academic paths, discovering cognitive styles, and matching potential with future careers.",
    image: imgStudents
  },
  {
    title: "Parents",
    subtitle: "Conscious Parenting Support",
    desc: "Delivering support structures, conscious parenting scripts, child behaviour analyses, and intergenerational mapping.",
    image: imgParents
  },
  {
    title: "Adults",
    subtitle: "Self-Discovery & Transitions",
    desc: "Navigating deep emotional bottlenecks, personal blockages, life transition anxieties, and self-discovery paths.",
    image: imgAdults
  },
  {
    title: "Teachers",
    subtitle: "Classroom Wellness Panels",
    desc: "Offering behavioral understanding panels, student psychology insights, and tools to run stress-free classrooms.",
    image: imgTeachers
  },
  {
    title: "Professionals",
    subtitle: "Burnout & Leadership Alignment",
    desc: "Resolving imposter syndrome, stress burnout, alignment blocks, and detailing career path adjustments.",
    image: imgProfessionals
  },
  {
    title: "Corporates",
    subtitle: "Employee Wellbeing Keynotes",
    desc: "Conducting wellness keynotes, mental wellness days, team cohesion profiles, and organizational efficiency mapping.",
    image: imgCorporates
  },
  {
    title: "Couples",
    subtitle: "Dynamic Relationship Therapy",
    desc: "Strengthening communication channels, deciphering dynamic compatibility matrices, and dissolving chronic conflicts.",
    image: imgCouples
  }
];

interface CardProps {
  group: ClientGroup;
  idx: number;
  isInView: boolean;
}

function ClientGroupCard({ group, idx, isInView }: CardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    // Normalize coordinates: center is (0,0), bounds are -0.5 to 0.5
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCoords({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: idx * 0.08, duration: 0.6 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[420px] rounded-[24px] overflow-hidden group cursor-pointer border border-white/10 shadow-sm hover:shadow-[0_20px_50px_rgba(49,95,103,0.12)] hover:border-luxury-gold/30 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 select-none"
    >
      {/* Moving Shine Reflection Overlay */}
      <div className="shine-reflector" />

      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div
          className="w-full h-full relative transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: isHovered 
              ? `scale(1.08) translate(${coords.x * -12}px, ${coords.y * -12}px)`
              : "scale(1.0) translate(0px, 0px)"
          }}
        >
          <Image
            src={group.image}
            alt={group.title}
            fill
            sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
            className="object-cover"
            placeholder="blur"
          />
        </div>

        {/* Base bottom gradient (calm, default bottom-left readability) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10" />

        {/* Hover expanding deep gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent translate-y-[35%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-11" />
      </div>

      {/* Card Content Layer with subtle parallax depth */}
      <div 
        className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white select-none transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: isHovered
            ? `translate(${coords.x * 8}px, ${coords.y * 8}px)`
            : "translate(0px, 0px)"
        }}
      >
        {/* Title and subtitle container */}
        <div className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[110px]">
          <h4 className="font-headings text-2xl font-bold tracking-wide text-white leading-tight">
            {group.title}
          </h4>
          <p className="font-body text-xs text-[#E5C16A] mt-1.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0 group-hover:-translate-y-2">
            {group.subtitle}
          </p>
        </div>

        {/* Description - fades in */}
        <div className="absolute left-8 right-8 bottom-8 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-[80ms] ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col gap-4">
          <p className="font-body text-xs text-white/90 leading-relaxed line-clamp-3">
            {group.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhoWeHelp({ preview = false }: { preview?: boolean }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [viewMode, setViewMode] = useState<"detailed" | "quick">("detailed");

  const filteredGroups = preview ? clientGroups.slice(0, 4) : clientGroups;

  return (
    <section id="who-we-help" className="py-12 md:py-20 bg-white relative overflow-hidden" ref={containerRef}>
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <span className="font-body text-xs font-semibold tracking-widest text-luxury-gold uppercase block mb-3">
            Who We Help
          </span>
          <h2 className="font-headings text-3xl sm:text-4xl md:text-5xl font-bold text-deep-brown">
            Tailored Paths For Every Life Stage
          </h2>
          <p className="font-body text-sm sm:text-base text-muted-text mt-4">
            We provide deep understanding and dedicated structures, supporting growth in children, families, students, and corporate entities.
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

        {/* Client Grid Render */}
        {viewMode === "detailed" ? (
          <div>
            {/* Desktop Grid (4 columns) */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredGroups.map((group, idx) => (
                <ClientGroupCard
                  key={group.title}
                  group={group}
                  idx={idx}
                  isInView={isInView}
                />
              ))}
            </div>

            {/* Mobile Grid (2 columns, compact cards) */}
            <div className="grid grid-cols-2 md:hidden gap-4">
              {filteredGroups.map((group, idx) => (
                <motion.div
                  key={`mobile-detailed-${group.title}-${idx}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: idx * 0.04, duration: 0.5 }}
                  className="relative w-full h-[220px] rounded-[20px] overflow-hidden shadow-sm border border-white/10 flex flex-col justify-end bg-white"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 w-full h-full z-0">
                    <Image
                      src={group.image}
                      alt={group.title}
                      fill
                      sizes="50vw"
                      className="object-cover"
                      placeholder="blur"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10" />
                  </div>
                  {/* Text Details */}
                  <div className="relative z-20 p-4 text-white flex flex-col">
                    <h4 className="font-headings text-[14px] font-bold tracking-wide leading-tight">
                      {group.title}
                    </h4>
                    <p className="font-body text-[10px] text-[#E5C16A] mt-0.5 leading-snug">
                      {group.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          /* Quick View (Grid of clean compact badges/chips) */
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {filteredGroups.map((group, idx) => (
              <div
                key={`quick-${group.title}-${idx}`}
                className="rounded-2xl border border-deep-brown/5 bg-white/70 backdrop-blur p-4 flex items-center gap-3 hover:border-luxury-gold/30 hover:bg-white transition-all cursor-pointer shadow-sm select-none"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold shrink-0" />
                <span className="font-headings text-xs font-bold text-deep-brown">
                  {group.title}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Learn More Button for preview mode */}
        {preview && (
          <div className="flex justify-center mt-8">
            <Link
              href="/who-we-help"
              className="px-8 py-3.5 btn-gold font-body text-sm font-semibold tracking-wide flex items-center gap-2"
            >
              Discover Who We Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}

