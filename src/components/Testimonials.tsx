"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { testimonials, GOOGLE_REVIEWS_URL, googleReviewSummary } from "@/data/testimonials";

const videoTestimonials = [
  {
    title: "Parenting Break-through",
    name: "Meera & Rajiv Gowda",
    relation: "Parents of a 9-year old",
    duration: "2:45"
  },
  {
    title: "Career Transition Story",
    name: "Aditya Roy",
    relation: "Product Designer",
    duration: "3:10"
  },
  {
    title: "Student Stress Guidance",
    name: "Tanya Malhotra",
    relation: "Grade 12 Student",
    duration: "1:55"
  }
];

function ReviewText({ text, rating }: { text: string; rating: number }) {
  const [expanded, setExpanded] = useState(false);
  const shouldClamp = text.length > 250;

  // Handle rating-only review
  if (!text || text.trim() === "") {
    return (
      <p className="font-body text-sm font-semibold text-muted-text/70 leading-relaxed relative z-10 mb-8 select-none">
        {rating}-star rating on Google
      </p>
    );
  }

  // Handle short review (no clamping needed)
  if (!shouldClamp) {
    return (
      <p className="font-body text-base sm:text-lg text-body-text/90 italic leading-relaxed relative z-10 mb-8 whitespace-pre-line">
        "{text}"
      </p>
    );
  }

  // Handle long review (clamping with toggle)
  return (
    <div className="relative z-10 mb-8 font-body text-base sm:text-lg text-body-text/90 italic leading-relaxed">
      <p className={`${expanded ? "" : "line-clamp-5"} whitespace-pre-line`}>
        "{text}"
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="font-body text-xs font-bold text-luxury-gold hover:text-premium-teal transition-colors mt-2 cursor-pointer not-italic inline-block"
      >
        {expanded ? "Show less" : "Read more"}
      </button>
    </div>
  );
}

export default function Testimonials({ preview = false }: { preview?: boolean }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-primary-bg relative overflow-hidden" ref={containerRef}>
      {/* Glow Ambient background */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-luxury-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-premium-teal/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 flex flex-col items-center">
          <span className="font-body text-xs font-semibold tracking-widest text-luxury-gold uppercase block mb-3">
            Testimonials
          </span>
          <h2 className="font-headings text-3xl sm:text-4xl md:text-5xl font-bold text-deep-brown">
            Stories of Growth & Alignment
          </h2>
          <p className="font-body text-sm sm:text-base text-muted-text mt-4">
            Hear from the parents, professionals, and students who have discovered their true blueprints through Pariichay.
          </p>

          {/* Manually Verified Google Ratings Summary */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 px-5 py-2 rounded-full bg-white/40 border border-white/60 backdrop-blur-sm shadow-sm select-none">
            <div className="flex items-center gap-1 font-headings font-bold text-sm text-deep-brown">
              <span className="text-luxury-gold">{googleReviewSummary.rating.toFixed(1)}</span>
              <div className="flex text-luxury-gold">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.round(googleReviewSummary.rating) ? "fill-current" : "opacity-30"
                    }`}
                  />
                ))}
              </div>
            </div>
            <span className="hidden sm:inline text-deep-brown/20">|</span>
            <span className="font-body text-[11px] font-semibold text-muted-text">
              Based on <span className="text-deep-brown font-bold">{googleReviewSummary.totalReviews}</span> Google reviews
            </span>
          </div>
        </div>

        {/* Testimonials Grid Layout - 2 Columns on Desktop, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {testimonials.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="glass-card rounded-[32px] p-8 sm:p-12 border border-white/60 shadow-md flex flex-col justify-between relative bg-white h-full"
            >
              {/* Quote Mark (rendered only for actual reviews with text) */}
              {review.text && review.text.trim() !== "" && (
                <div className="absolute top-6 right-8 text-luxury-gold/15 pointer-events-none">
                  <Quote className="w-16 h-16 transform rotate-180 fill-current" />
                </div>
              )}

              {/* Review Text Area */}
              <ReviewText text={review.text} rating={review.rating} />

              {/* Reviewer Details & Card Action Alignment */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-deep-brown/5 pt-6 gap-4 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-luxury-gold/20 to-premium-teal/20 text-deep-brown font-headings font-bold text-sm flex items-center justify-center border border-white shrink-0 select-none">
                    {review.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headings text-base font-bold text-deep-brown">
                      {review.authorName}
                    </span>
                    <span className="font-body text-xs text-muted-text">
                      {review.profession}
                    </span>
                  </div>
                </div>

                {/* Stars & Google Maps listing redirection (Option B) */}
                <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                  <div className="flex gap-1 text-luxury-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? "fill-current" : "opacity-25"
                        }`}
                      />
                    ))}
                  </div>
                  {review.googleReviewUrl && (
                    <a
                      href={review.googleReviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-[10px] font-bold text-luxury-gold hover:text-premium-teal transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      View Google Reviews <ArrowRight className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="flex justify-center mb-12">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-luxury-gold/30 hover:border-luxury-gold text-luxury-gold hover:text-luxury-gold/80 font-body text-xs font-semibold tracking-wide flex items-center gap-2 rounded-full transition-all duration-300 shadow-sm bg-white/50"
          >
            View All Reviews on Google <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {preview ? (
          /* Preview Mode: View All Stories Link */
          <div className="flex justify-center mt-12">
            <Link
              href="/testimonials"
              className="px-8 py-3.5 btn-gold font-body text-sm font-semibold tracking-wide flex items-center gap-2"
            >
              Read All Client Stories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          /* Full Page Mode: Video Stories & Ratings breakdown */
          <div className="mt-24 pt-16 border-t border-deep-brown/10">
            {/* Video testimonials section */}
            <div className="mb-16">
              <h3 className="font-headings text-2xl font-bold text-deep-brown text-center mb-10 flex items-center justify-center gap-2">
                <Play className="w-5 h-5 text-luxury-gold fill-current" /> Video Testimonials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {videoTestimonials.map((video, idx) => (
                  <div key={idx} className="glass-card rounded-[28px] overflow-hidden border border-white/60 shadow-sm flex flex-col hover:border-luxury-gold/30 transition-all duration-350 group">
                    <div className="h-44 bg-gradient-to-tr from-luxury-gold/10 via-deep-brown/5 to-premium-teal/10 relative flex items-center justify-center border-b border-deep-brown/5">
                      <div className="w-12 h-12 rounded-full bg-white text-luxury-gold flex items-center justify-center shadow-md border border-luxury-gold/10 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                      <span className="absolute bottom-3 right-3 text-[10px] bg-black/40 text-white py-0.5 px-2 rounded-full font-semibold">
                        {video.duration}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col gap-1">
                      <span className="font-headings text-base font-bold text-deep-brown">{video.title}</span>
                      <span className="font-body text-xs text-muted-text mt-1">{video.name}</span>
                      <span className="font-body text-[10px] text-muted-text/80">{video.relation}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ratings breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white/40 border border-white/50 backdrop-blur-md rounded-[32px] p-8 md:p-12 shadow-sm">
              <div className="text-center md:text-left flex flex-col gap-2">
                <h4 className="font-headings text-4xl font-black text-deep-brown">
                  {googleReviewSummary.rating.toFixed(1)} / 5.0
                </h4>
                <div className="flex gap-1 justify-center md:justify-start text-luxury-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="font-body text-xs text-muted-text mt-1">
                  Based on {googleReviewSummary.totalReviews} Google reviews
                </span>
              </div>
              <div className="md:col-span-2 flex flex-col gap-4">
                <div className="flex items-center gap-3 font-body text-xs font-semibold text-deep-brown">
                  <div className="w-8 shrink-0">5 ★</div>
                  <div className="flex-1 h-2 rounded-full bg-deep-brown/5 overflow-hidden">
                    <div className="h-full bg-luxury-gold rounded-full w-[92%]" />
                  </div>
                  <div className="w-10 text-right">92%</div>
                </div>
                <div className="flex items-center gap-3 font-body text-xs font-semibold text-deep-brown">
                  <div className="w-8 shrink-0">4 ★</div>
                  <div className="flex-1 h-2 rounded-full bg-deep-brown/5 overflow-hidden">
                    <div className="h-full bg-luxury-gold rounded-full w-[6%]" />
                  </div>
                  <div className="w-10 text-right">6%</div>
                </div>
                <div className="flex items-center gap-3 font-body text-xs font-semibold text-deep-brown">
                  <div className="w-8 shrink-0">3 ★</div>
                  <div className="flex-1 h-2 rounded-full bg-deep-brown/5 overflow-hidden">
                    <div className="h-full bg-luxury-gold rounded-full w-[2%]" />
                  </div>
                  <div className="w-10 text-right">2%</div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
