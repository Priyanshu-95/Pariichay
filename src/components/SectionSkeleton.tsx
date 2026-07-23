"use client";

import React from "react";

interface SectionSkeletonProps {
  title?: string;
  height?: string;
}

export default function SectionSkeleton({ 
  title = "Loading Content...", 
  height = "h-80" 
}: SectionSkeletonProps) {
  return (
    <div className={`w-full ${height} my-6 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-center items-center`}>
      <div className="w-full h-full rounded-[28px] border border-deep-brown/5 bg-white/60 backdrop-blur-sm p-8 flex flex-col items-center justify-center gap-4 animate-pulse shadow-sm">
        <div className="w-32 h-3 bg-luxury-gold/20 rounded-full" />
        {title && <div className="w-64 h-6 bg-deep-brown/10 rounded-lg" />}
        <div className="w-full max-w-md h-4 bg-deep-brown/5 rounded-md mt-2" />
        <div className="w-full max-w-sm h-4 bg-deep-brown/5 rounded-md" />
      </div>
    </div>
  );
}
