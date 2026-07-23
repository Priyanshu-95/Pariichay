"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import Link from "next/link";
import { testimonials, GOOGLE_REVIEWS_URL, googleReviewSummary } from "@/data/testimonials";

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
  const isInView = useInView(containerRef, { once: true, margin: "0px 0px 100px 0px" });

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

        {/* Official YouTube Channel Showcase Section */}
        <div className="mt-16 pt-12 border-t border-deep-brown/10">
          <div className="text-center mb-8">
            <span className="font-body text-xs font-semibold tracking-widest text-luxury-gold uppercase block mb-2">
              Official Media Hub
            </span>
            <h3 className="font-headings text-2xl sm:text-3xl md:text-4xl font-bold text-deep-brown inline-flex items-center justify-center gap-2.5">
              <span className="text-[#FF0000] font-normal">▶</span> Watch More on YouTube
            </h3>
            <p className="font-body text-xs sm:text-sm text-muted-text mt-2 max-w-2xl mx-auto">
              Explore expert guidance, practical counselling insights, and educational sessions on our official channel.
            </p>
          </div>

          {/* Featured YouTube Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-[28px] sm:rounded-[32px] p-6 sm:p-10 md:p-12 border border-white/60 shadow-lg relative bg-gradient-to-br from-white via-[#FCFAF7] to-white overflow-hidden max-w-5xl mx-auto hover:shadow-xl transition-all duration-300"
          >
            {/* Background Ambient Accents */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-red-500/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-premium-teal/5 blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 relative z-10">
              
              {/* Left Side: YouTube Logo & Channel Badge */}
              <div className="flex flex-col items-center shrink-0 text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#FF0000] text-white flex items-center justify-center shadow-lg shadow-red-600/25 border border-red-500/30 group hover:scale-105 transition-transform duration-300">
                  <svg className="w-12 h-12 sm:w-14 sm:h-14 fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="mt-3 px-3.5 py-1 rounded-full bg-deep-brown/5 border border-deep-brown/10 font-body text-[10px] font-bold text-deep-brown tracking-wider uppercase inline-flex items-center gap-1">
                  <span className="text-[#124E2F]">✓</span> Official Channel
                </span>
              </div>

              {/* Right Side: Content & Feature Tags */}
              <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h4 className="font-headings text-2xl sm:text-3xl font-bold text-deep-brown leading-tight">
                  Pariichay 360° Counselling
                </h4>
                <p className="font-body text-xs sm:text-sm text-muted-text mt-3 leading-relaxed max-w-2xl">
                  Helping students, parents, professionals, and families through expert counselling, psychology, career guidance, personality development, parenting, Vedic sciences, and holistic human development.
                </p>

                {/* Highlights Checklist */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 my-6 w-full max-w-xl text-left">
                  {[
                    "Expert Guidance",
                    "Career Counselling",
                    "Parenting Support",
                    "Psychometric Assessment",
                    "Child Development",
                    "Personality Growth"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 font-body text-xs font-semibold text-deep-brown bg-white/90 border border-deep-brown/5 rounded-xl px-3 py-2 shadow-xs">
                      <span className="text-[#124E2F] font-bold text-sm">✔</span>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="https://www.youtube.com/@pariichay_159"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Our YouTube Channel (opens in a new tab)"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#FF0000] hover:bg-[#D90000] text-white font-body text-xs sm:text-sm font-semibold tracking-wide rounded-full shadow-md hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer min-h-[44px]"
                >
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>Visit Our YouTube Channel</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>

              </div>
            </div>

            {/* Clean Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-8 pt-6 border-t border-deep-brown/10 text-center font-body text-xs font-semibold text-deep-brown">
              <div className="flex items-center justify-center gap-2 bg-white/70 rounded-2xl p-3 border border-deep-brown/5 shadow-xs">
                <span className="text-base">📺</span>
                <span>Expert Videos</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/70 rounded-2xl p-3 border border-deep-brown/5 shadow-xs">
                <span className="text-base">🎓</span>
                <span>Counselling Sessions</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/70 rounded-2xl p-3 border border-deep-brown/5 shadow-xs">
                <span className="text-base">💡</span>
                <span>Educational Content</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/70 rounded-2xl p-3 border border-deep-brown/5 shadow-xs">
                <span className="text-base">📈</span>
                <span>Regular Updates</span>
              </div>
            </div>

          </motion.div>
        </div>

        {preview && (
          <div className="flex justify-center mt-12">
            <Link
              href="/testimonials"
              className="px-8 py-3.5 btn-gold font-body text-sm font-semibold tracking-wide flex items-center gap-2 min-h-[44px]"
            >
              Read All Client Stories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {!preview && (
          <div className="mt-16">
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
