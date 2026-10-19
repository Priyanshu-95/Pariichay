"use client";

import React from "react";
import { GraduationCap, Compass, GitFork, School } from "lucide-react";

interface AssessmentCardData {
  id: string;
  title: string;
  description: string;
  destinationUrl: string;
  icon: React.ReactNode;
}

const ASSESSMENT_CARDS: AssessmentCardData[] = [
  {
    id: "as11",
    title: "Career Analysis for 2nd to 7th class",
    description: "It will help you to find out Multiple Intelligence of the Student",
    destinationUrl:
      "https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/MTY4Mg==/as11",
    icon: <School className="w-6 h-6 text-[#C8232C]" />,
  },
  {
    id: "as12",
    title: "Career Analysis for 8th, 9th & 10th Class",
    description: "It will help you to find out most suitable career path and subjects",
    destinationUrl:
      "https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/MTY4Mg==/as12",
    icon: <GitFork className="w-6 h-6 text-[#C8232C]" />,
  },
  {
    id: "as13",
    title: "Career Analysis for 11th & 12th Class",
    description:
      "It will help you to find out most suitable career path and career road map with detailed execution plan",
    destinationUrl:
      "https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/MTY4Mg==/as13",
    icon: <Compass className="w-6 h-6 text-[#C8232C]" />,
  },
  {
    id: "as14",
    title: "Career Analysis for Graduates",
    description:
      "It will help you to find out Most Suitable Career path and Career Road map with detailed execution plan",
    destinationUrl:
      "https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/MTY4Mg==/as14",
    icon: <GraduationCap className="w-6 h-6 text-[#C8232C]" />,
  },
  {
    id: "as204",
    title: "Career Analysis for Professionals",
    description:
      "Early and Mid career counselling for professionals with detailed execution plan",
    destinationUrl:
      "https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/MTY4Mg==/as204",
    icon: <Compass className="w-6 h-6 text-[#C8232C]" />,
  },
];

export default function CareerAssessments() {
  return (
    <section className="w-full bg-[#FAF9F6] py-14 md:py-18 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Optional Subtle Section Heading for Accessibility and SEO */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C8232C] bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Scientifically Validated Tests
          </span>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Psychometric Career Assessments
          </h3>
        </div>

        {/* Five Assessment Cards Container */}
        {/* Row 1: 3 cards on desktop; Row 2: 2 cards on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {/* First 3 Cards */}
          {ASSESSMENT_CARDS.slice(0, 3).map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg border border-gray-200/90 border-t-2 border-t-[#C8232C] p-6 sm:p-7 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-all duration-300 min-h-[300px]"
            >
              {/* Circular Icon with Red Outline */}
              <div className="w-13 h-13 rounded-full border-2 border-[#C8232C]/70 bg-red-50/50 flex items-center justify-center mb-5 shrink-0">
                {card.icon}
              </div>

              {/* Title */}
              <h4 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight leading-snug">
                {card.title}
              </h4>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-sm text-gray-500 font-normal leading-relaxed max-w-[270px]">
                {card.description}
              </p>

              {/* Bottom-Aligned Start Now Button */}
              <div className="mt-auto pt-6 w-full flex justify-center">
                <a
                  href={card.destinationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-[#C8232C] hover:bg-[#A81C24] text-white text-xs sm:text-sm font-semibold rounded shadow-xs hover:shadow transition-all duration-200 inline-block text-center cursor-pointer active:scale-95"
                >
                  Start Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: 2 cards on desktop centered, matching Screenshot 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6 lg:mt-8">
          {/* Card 4 */}
          <div className="bg-white rounded-lg border border-gray-200/90 border-t-2 border-t-[#C8232C] p-6 sm:p-7 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-all duration-300 min-h-[300px]">
            <div className="w-13 h-13 rounded-full border-2 border-[#C8232C]/70 bg-red-50/50 flex items-center justify-center mb-5 shrink-0">
              {ASSESSMENT_CARDS[3].icon}
            </div>

            <h4 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight leading-snug">
              {ASSESSMENT_CARDS[3].title}
            </h4>

            <p className="mt-3 text-xs sm:text-sm text-gray-500 font-normal leading-relaxed max-w-[270px]">
              {ASSESSMENT_CARDS[3].description}
            </p>

            <div className="mt-auto pt-6 w-full flex justify-center">
              <a
                href={ASSESSMENT_CARDS[3].destinationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#C8232C] hover:bg-[#A81C24] text-white text-xs sm:text-sm font-semibold rounded shadow-xs hover:shadow transition-all duration-200 inline-block text-center cursor-pointer active:scale-95"
              >
                Start Now
              </a>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-lg border border-gray-200/90 border-t-2 border-t-[#C8232C] p-6 sm:p-7 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-all duration-300 min-h-[300px]">
            <div className="w-13 h-13 rounded-full border-2 border-[#C8232C]/70 bg-red-50/50 flex items-center justify-center mb-5 shrink-0">
              {ASSESSMENT_CARDS[4].icon}
            </div>

            <h4 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight leading-snug">
              {ASSESSMENT_CARDS[4].title}
            </h4>

            <p className="mt-3 text-xs sm:text-sm text-gray-500 font-normal leading-relaxed max-w-[270px]">
              {ASSESSMENT_CARDS[4].description}
            </p>

            <div className="mt-auto pt-6 w-full flex justify-center">
              <a
                href={ASSESSMENT_CARDS[4].destinationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#C8232C] hover:bg-[#A81C24] text-white text-xs sm:text-sm font-semibold rounded shadow-xs hover:shadow transition-all duration-200 inline-block text-center cursor-pointer active:scale-95"
              >
                Start Now
              </a>
            </div>
          </div>

          {/* Empty column placeholder on large screens to keep 3-column rhythm matching 3-top, 2-bottom screenshot */}
          <div className="hidden lg:block pointer-events-none" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
