"use client";

import React from "react";
import Link from "next/link";
import { useBookingModal } from "@/context/BookingModalContext";

export default function CareerHero() {
  const { openModal } = useBookingModal();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="w-full bg-white pt-6 pb-2">
      {/* 1. Centered Header & Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#B91C1C] tracking-tight">
          Career
        </h1>

        <nav
          aria-label="Breadcrumb"
          className="mt-3 flex items-center justify-center gap-2 text-xs md:text-sm text-gray-500 font-medium"
        >
          <Link
            href="/"
            className="hover:text-[#B91C1C] transition-colors duration-200"
          >
            Home
          </Link>
          <span className="text-gray-400 select-none">→</span>
          <span className="text-gray-700 font-semibold">Career</span>
        </nav>

        {/* 2. Four Horizontal Action Buttons */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={() => handleScrollTo("suitability-section")}
            className="px-4 py-2 sm:px-5 sm:py-2.5 bg-[#C8232C] hover:bg-[#A81C24] text-white text-xs sm:text-sm font-semibold rounded-md shadow-sm hover:shadow transition-all duration-200 cursor-pointer active:scale-95"
          >
            Check Suitability
          </button>

          <button
            type="button"
            onClick={() => handleScrollTo("career-library-section")}
            className="px-4 py-2 sm:px-5 sm:py-2.5 bg-[#C8232C] hover:bg-[#A81C24] text-white text-xs sm:text-sm font-semibold rounded-md shadow-sm hover:shadow transition-all duration-200 cursor-pointer active:scale-95"
          >
            Career Library
          </button>

          <a
            href="https://nveducation.edumilestones.com/global-career-library/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 sm:px-5 sm:py-2.5 bg-[#C8232C] hover:bg-[#A81C24] text-white text-xs sm:text-sm font-semibold rounded-md shadow-sm hover:shadow transition-all duration-200 cursor-pointer inline-block active:scale-95"
          >
            Career Insights
          </a>

          <button
            type="button"
            onClick={() => openModal("Career Guidance")}
            className="px-4 py-2 sm:px-5 sm:py-2.5 bg-[#C8232C] hover:bg-[#A81C24] text-white text-xs sm:text-sm font-semibold rounded-md shadow-sm hover:shadow transition-all duration-200 cursor-pointer active:scale-95"
          >
            Book Appointment
          </button>

          <Link
            href="/contact"
            className="px-4 py-2 sm:px-5 sm:py-2.5 bg-[#C8232C] hover:bg-[#A81C24] text-white text-xs sm:text-sm font-semibold rounded-md shadow-sm hover:shadow transition-all duration-200 cursor-pointer inline-block active:scale-95"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* 3. Hero Charcoal Banner */}
      <div className="mt-8 w-full bg-[#56595F] py-12 md:py-16 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Comprehensive Career Counselling by Expert
          </h2>

          <p className="mt-3.5 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-200 font-normal max-w-3xl leading-relaxed">
            Explore and Find out your Most Suitable Career Path Out of 20 Career
            Clusters, 160 + Career Paths and 3000+ Occupations
          </p>

          {/* Two Hero CTAs */}
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/MTY4Mg==/as11-as12-as13"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-7 py-3 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs sm:text-sm font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-200 text-center"
            >
              Start Career Assessment for Students
            </a>

            <a
              href="https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/MTY4Mg==/as14-as204"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-7 py-3 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs sm:text-sm font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-200 text-center"
            >
              Start Career Assessment for Professionals
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
