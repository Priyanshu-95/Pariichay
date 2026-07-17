"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown, HelpCircle, Search } from "lucide-react";

const faqs = [
  {
    question: "What services do you provide?",
    answer: "Pariichay provides a unified range of guidance services, including: Personal & Behavioral Counselling, Career Guidance Mappings, Child Psychology Assessments, Positive Parenting Workshops, Biometric (DMIT) Assessments, Psychometric & IQ Testing, and Vedic Astrology/Numerology configurations."
  },
  {
    question: "Are online consultations available?",
    answer: "Yes. We offer fully functional digital video consultations via secure platforms (Zoom/Google Meet) for clients globally, in addition to offline in-person consultations at our main Ahmedabad office."
  },
  {
    question: "Is counselling confidential?",
    answer: "Absolutely. Ethical confidentiality is a core pillar of our practice. All personal details, diagnostics, counseling notes, and conversations are kept strictly secure and never shared with third parties under any circumstances."
  },
  {
    question: "How do I book?",
    answer: "You can easily schedule a consultation by filling out the book consultation form on this website. Our team will review your requirements and reach out to confirm a mutually convenient slot."
  },
  {
    question: "Who can benefit?",
    answer: "Students seeking direction on career streams, parents struggling to connect with children, adults facing emotional blockages, professionals experiencing career burnout, and couples looking to navigate compatibility issues."
  },
  {
    question: "How long is one session?",
    answer: "A standard counseling session is typically 60 minutes. Specialized sessions involving biometric readings, multi-stage testing, or family counseling may span 90 minutes. We always confirm durations prior to scheduling."
  }
];

// Single Accordion Item Subcomponent
function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  idx: number;
}) {
  return (
    <div className="border-b border-deep-brown/5 py-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-3 font-headings text-base sm:text-lg font-bold text-deep-brown text-left hover:text-luxury-gold transition-colors focus:outline-none cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-3 pr-4">
          <HelpCircle className="w-5 h-5 text-luxury-gold/50 shrink-0" />
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-muted-text" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-body text-xs sm:text-sm text-muted-text leading-relaxed pb-4 pl-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-16 md:py-24 bg-primary-bg relative" ref={containerRef}>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-premium-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column Description */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="font-body text-xs font-semibold tracking-widest text-luxury-gold uppercase block mb-3">
              FAQ
            </span>
            <h2 className="font-headings text-3xl sm:text-4xl md:text-5xl font-bold text-deep-brown leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-sm sm:text-base text-muted-text mt-4 leading-relaxed">
              Find immediate answers to key queries regarding our counseling models, assessments, and booking protocols.
            </p>
          </div>

          {/* Right Column Accordions */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-white/70 border border-deep-brown/5 rounded-[32px] p-6 sm:p-10 shadow-sm backdrop-blur-md flex flex-col gap-6"
          >
            {/* Search Bar */}
            <div className="relative w-full flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-muted-text/60" />
              <input
                type="text"
                placeholder="Search queries..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setOpenIndex(null); // Reset accordion state on search
                }}
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-deep-brown/10 bg-white/50 text-body-text placeholder:text-muted-text/50 focus:outline-none focus:border-luxury-gold/50 focus:bg-white/80 transition-all duration-300 font-body text-xs sm:text-sm shadow-inner"
              />
            </div>

            <div className="flex flex-col">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, idx) => (
                  <FAQItem
                    key={idx}
                    idx={idx}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === idx}
                    onToggle={() => handleToggle(idx)}
                  />
                ))
              ) : (
                <div className="text-center py-10 font-body text-sm text-muted-text">
                  No matching questions found. Try searching with a different term.
                </div>
              )}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
