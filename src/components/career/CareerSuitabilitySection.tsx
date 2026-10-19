"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, UserCheck, Sparkles, BookOpen } from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";

export default function CareerSuitabilitySection() {
  const { openModal } = useBookingModal();
  const [activeTab, setActiveTab] = useState<"students" | "graduates" | "professionals">("students");

  return (
    <section id="suitability-section" className="w-full bg-[#1F2328] py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold mb-3 border border-red-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>30-Minute Fast-Track Assessment</span>
        </span>

        {/* Heading & Subtitle */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          Check Career Suitability for your Dream Career
        </h3>
        <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Take informed career decisions with clarity. Identify your cognitive strengths, natural interests, and professional fit before committing time and finances.
        </p>

        {/* Category Tabs */}
        <div className="mt-8 inline-flex p-1 bg-gray-800/80 rounded-xl border border-gray-700">
          <button
            type="button"
            onClick={() => setActiveTab("students")}
            className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === "students"
                ? "bg-[#C8232C] text-white shadow"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Students (Classes 2–12)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("graduates")}
            className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === "graduates"
                ? "bg-[#C8232C] text-white shadow"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Graduates & College
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("professionals")}
            className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === "professionals"
                ? "bg-[#C8232C] text-white shadow"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Working Professionals
          </button>
        </div>

        {/* Tab Content Cards */}
        <div className="mt-10 bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-10 text-left max-w-3xl mx-auto">
          {activeTab === "students" && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-[#C8232C] bg-red-950/60 px-2.5 py-1 rounded border border-red-900/40">
                  School & Junior College
                </span>
                <span className="text-xs text-gray-400">Classes 2nd to 12th</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Stream Selection & Multiple Intelligence Discovery
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Determine whether Science (PCM/PCB), Commerce, or Humanities best matches your student&apos;s natural reasoning abilities, learning speed, and career aspirations.
              </p>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8232C] shrink-0" />
                  <span>Pinpoints Multiple Intelligence scores</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8232C] shrink-0" />
                  <span>Identifies ideal board (CBSE / ICSE / IB)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8232C] shrink-0" />
                  <span>Entrance exam compatibility (JEE / NEET / CLAT)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8232C] shrink-0" />
                  <span>Custom 10-year execution roadmap</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/MTY4Mg==/as11-as12-as13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-[#C8232C] hover:bg-[#A81C24] text-white text-xs sm:text-sm font-semibold rounded-md shadow text-center transition-colors flex items-center justify-center gap-2"
                >
                  <span>Start Student Suitability Test</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => openModal("Student Career Suitability")}
                  className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-xs sm:text-sm font-semibold rounded-md text-center transition-colors cursor-pointer"
                >
                  Talk to Jignesh Sir
                </button>
              </div>
            </div>
          )}

          {activeTab === "graduates" && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-[#C8232C] bg-red-950/60 px-2.5 py-1 rounded border border-red-900/40">
                  Graduation & Post-Graduation
                </span>
                <span className="text-xs text-gray-400">Final Year Students & Freshers</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Higher Education vs Industry Job Alignment
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Clarify whether you should pursue an MBA, MS abroad, Government civil services, or directly enter the corporate workforce with high-growth technical skills.
              </p>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8232C] shrink-0" />
                  <span>Job Role Fitment Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8232C] shrink-0" />
                  <span>Higher Studies vs Job Recommendation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8232C] shrink-0" />
                  <span>Global Study Abroad Suitability</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8232C] shrink-0" />
                  <span>Skill-gap mitigation guide</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/MTY4Mg==/as14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-[#C8232C] hover:bg-[#A81C24] text-white text-xs sm:text-sm font-semibold rounded-md shadow text-center transition-colors flex items-center justify-center gap-2"
                >
                  <span>Start Graduate Suitability Test</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => openModal("Graduate Career Guidance")}
                  className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-xs sm:text-sm font-semibold rounded-md text-center transition-colors cursor-pointer"
                >
                  Book Counselling Session
                </button>
              </div>
            </div>
          )}

          {activeTab === "professionals" && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-[#C8232C] bg-red-950/60 px-2.5 py-1 rounded border border-red-900/40">
                  Early & Mid-Career
                </span>
                <span className="text-xs text-gray-400">1 to 15+ Years Work Experience</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Career Transition, Burnout Recovery & Leadership Scaling
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Overcome mid-career plateaus, imposter syndrome, and industry obsolescence. Formulate an actionable execution roadmap to transition into leadership or high-demand sectors.
              </p>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8232C] shrink-0" />
                  <span>Leadership & Management Aptitude</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8232C] shrink-0" />
                  <span>Cross-industry transition feasibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8232C] shrink-0" />
                  <span>Workplace burnout & alignment assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8232C] shrink-0" />
                  <span>Custom executive salary scaling plan</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/MTY4Mg==/as204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-[#C8232C] hover:bg-[#A81C24] text-white text-xs sm:text-sm font-semibold rounded-md shadow text-center transition-colors flex items-center justify-center gap-2"
                >
                  <span>Start Professional Career Analysis</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => openModal("Professional Career Coaching")}
                  className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-xs sm:text-sm font-semibold rounded-md text-center transition-colors cursor-pointer"
                >
                  Executive Life Coaching
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
