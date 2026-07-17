"use client";

import React from "react";

const categories = [
  "Children",
  "Students",
  "Teenagers",
  "Parents",
  "Teachers",
  "Adults",
  "Career",
  "Marriage",
  "Family",
  "Mental Health",
  "Anxiety",
  "Stress",
  "Corporate",
  "Relationship",
  "Senior Citizens"
];

// Split categories for mobile dual-row layout
const row1Categories = [
  "Children",
  "Students",
  "Teenagers",
  "Parents",
  "Teachers",
  "Adults",
  "Career",
  "Marriage"
];

const row2Categories = [
  "Family",
  "Mental Health",
  "Anxiety",
  "Stress",
  "Corporate",
  "Relationship",
  "Senior Citizens"
];

// Custom gold dot separator component
const LotusSeparator = () => (
  <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold/50 mx-4 md:mx-6 shrink-0 select-none" />
);

interface PillProps {
  label: string;
}

const CategoryPill = ({ label }: PillProps) => (
  <div
    className="py-2.5 px-5 md:py-3 md:px-7 rounded-full border border-[#EAE6DF] shadow-sm text-sm md:text-[16px] font-poppins font-medium text-[#295B60] transition-all duration-[350ms] ease-in-out hover:scale-108 hover:-translate-y-1.25 hover:border-luxury-gold hover:shadow-md hover:bg-white cursor-pointer select-none shrink-0 bg-[#FAFAFA]"
  >
    {label}
  </div>
);

export default function MarqueeSection() {
  // Double arrays to ensure perfect seamless loop transitions
  const desktopItems = [...categories, ...categories];
  const mobileRow1 = [...row1Categories, ...row1Categories];
  const mobileRow2 = [...row2Categories, ...row2Categories];

  return (
    <section className="relative w-full overflow-visible py-0 bg-transparent">
      {/* 
        NO RADIAL GRADIENTS OR GLOW OVERLAYS REMAIN
      */}

      {/* Main positioning container */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 z-20">
        
        {/* Floating premium card container */}
        <div
          className="relative w-full rounded-[24px] border border-[#EAE6DF]/60 shadow-[0_15px_35px_rgba(106,74,43,0.02)] pt-14 pb-8 px-6 overflow-visible flex flex-col items-center bg-white"
        >
          {/* Centered title capsule */}
          <div className="relative z-30 -mt-20 mb-8 w-fit mx-auto transition-all duration-300">
            <div
              className="flex items-center justify-center py-2.5 px-6 md:py-3.5 md:px-8.5 rounded-full border border-[#EAE6DF] shadow-sm text-luxury-gold font-poppins font-semibold text-xs sm:text-sm md:text-[18px] tracking-[1px] whitespace-nowrap select-none bg-white text-center"
            >
              ✨ Counselling for Every Individual
            </div>
          </div>

          {/* Desktop & Tablet Marquee View (Single Row) */}
          <div className="hidden sm:flex relative w-full h-[100px] bg-transparent overflow-hidden items-center justify-start z-20">
            <div className="flex w-max whitespace-nowrap items-center animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused]">
              {desktopItems.map((item, idx) => (
                <React.Fragment key={`desktop-${item}-${idx}`}>
                  <CategoryPill label={item} />
                  <LotusSeparator />
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile Marquee View (Two Rows scrolling in opposite directions) */}
          <div className="flex sm:hidden flex-col gap-5 w-full bg-transparent overflow-hidden z-20">
            
            {/* Row 1 - Scrolls Left */}
            <div className="relative w-full h-[84px] overflow-hidden flex items-center justify-start">
              <div className="flex w-max whitespace-nowrap items-center animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused]">
                {mobileRow1.map((item, idx) => (
                  <React.Fragment key={`mobile-r1-${item}-${idx}`}>
                    <CategoryPill label={item} />
                    <LotusSeparator />
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Row 2 - Scrolls Right */}
            <div className="relative w-full h-[84px] overflow-hidden flex items-center justify-start">
              <div className="flex w-max whitespace-nowrap items-center animate-[marquee_45s_linear_infinite_reverse] hover:[animation-play-state:paused]">
                {mobileRow2.map((item, idx) => (
                  <React.Fragment key={`mobile-r2-${item}-${idx}`}>
                    <CategoryPill label={item} />
                    <LotusSeparator />
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
