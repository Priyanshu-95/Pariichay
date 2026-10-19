"use client";

import React, { useState, useMemo } from "react";
import {
  CAREER_DATABASE,
  CAREER_CATEGORIES,
  CareerItem,
} from "@/data/careerData";
import { useBookingModal } from "@/context/BookingModalContext";
import {
  Search,
  BookOpen,
  Briefcase,
  Compass,
  GraduationCap,
  Sparkles,
  ArrowRight,
  X,
  TrendingUp,
  Award,
  Layers,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export default function CareerLibrarySection() {
  const { openModal } = useBookingModal();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Careers");
  const [activeCareer, setActiveCareer] = useState<CareerItem | null>(null);

  // Filtered list based on search and category
  const filteredCareers = useMemo(() => {
    return CAREER_DATABASE.filter((career) => {
      const matchesCategory =
        selectedCategory === "All Careers" ||
        career.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        career.title.toLowerCase().includes(q) ||
        career.category.toLowerCase().includes(q) ||
        career.about.toLowerCase().includes(q) ||
        career.keySkills.some((s) => s.toLowerCase().includes(q)) ||
        career.occupations.some((o) => o.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="career-library-section" className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#123E25]/10 text-[#123E25] text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Encyclopedia of 3000+ Career Occupations</span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Explore Career Library & Execution Roadmaps
          </h3>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
            Gain in-depth clarity on career responsibilities, future industry demand, entry salary levels, entrance exams, and top Indian colleges across all disciplines.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search careers, skills, or job roles (e.g. Fashion, AI, CA, Psychology)..."
              className="w-full pl-11 pr-10 py-3 text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C8232C]/30 focus:border-[#C8232C] transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none justify-start lg:justify-center">
          {CAREER_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#C8232C] text-white shadow-xs"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Career Cards Grid */}
        {filteredCareers.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-sm">
              No career path found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Careers");
              }}
              className="mt-3 text-xs text-[#C8232C] font-semibold underline hover:text-[#A81C24]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCareers.map((career) => (
              <div
                key={career.slug}
                onClick={() => setActiveCareer(career)}
                className="group bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-[#C8232C]/40 transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Category Pill & Demand Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C8232C] bg-red-50 px-2.5 py-0.5 rounded-md border border-red-100">
                      {career.category}
                    </span>
                    <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {career.demand} Demand
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#C8232C] transition-colors leading-snug">
                    {career.title}
                  </h4>

                  {/* Tagline */}
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {career.tagline}
                  </p>

                  {/* Skills Snapshot */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {career.keySkills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                    {career.keySkills.length > 3 && (
                      <span className="text-[10px] bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded">
                        +{career.keySkills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#C8232C]">
                  <span>Explore Roadmaps & Colleges</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Global Edumilestones Direct Access Note */}
        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-5 sm:p-6 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h5 className="text-sm font-bold text-gray-900">
              Need Comprehensive Encyclopedia Search?
            </h5>
            <p className="text-xs text-gray-500 mt-0.5">
              Access the complete Edumilestones 3000+ career database partner portal.
            </p>
          </div>
          <a
            href="https://nveducation.edumilestones.com/career-library/all/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-900 hover:bg-black text-white text-xs font-medium rounded-md shadow-xs flex items-center gap-1.5 shrink-0 transition-colors"
          >
            <span>Open Full Library</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Career Detail Modal */}
      {activeCareer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
          onClick={() => setActiveCareer(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto p-6 sm:p-8 border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveCareer(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C8232C] bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
                {activeCareer.category}
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                {activeCareer.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{activeCareer.tagline}</p>
            </div>

            {/* About Career */}
            <div className="mt-6 border-t border-gray-100 pt-5">
              <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1.5 uppercase tracking-wide">
                <BookOpen className="w-4 h-4 text-[#C8232C]" />
                About This Career
              </h4>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {activeCareer.about}
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
              <div>
                <span className="text-[10px] uppercase font-semibold text-gray-400 block">
                  Industry Demand
                </span>
                <span className="text-xs sm:text-sm font-bold text-emerald-700">
                  {activeCareer.demand}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-gray-400 block">
                  Salary Level
                </span>
                <span className="text-xs sm:text-sm font-bold text-gray-900">
                  {activeCareer.salaryLevel}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-gray-400 block">
                  Course Fees
                </span>
                <span className="text-xs sm:text-sm font-bold text-gray-900">
                  Medium
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-gray-400 block">
                  Prep Duration
                </span>
                <span className="text-xs sm:text-sm font-bold text-gray-900">
                  6 - 12 Months
                </span>
              </div>
            </div>

            {/* Roles & Responsibilities */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1.5 uppercase tracking-wide">
                <Briefcase className="w-4 h-4 text-[#C8232C]" />
                Roles & Responsibilities
              </h4>
              <ul className="mt-2.5 space-y-2">
                {activeCareer.workNature.map((role, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-[#C8232C] mt-1 shrink-0">•</span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Skills & Opportunities */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50/70 p-4 rounded-lg border border-gray-100">
                <h5 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                  Key Skills Required
                </h5>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {activeCareer.keySkills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-white text-gray-700 px-2.5 py-1 rounded border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50/70 p-4 rounded-lg border border-gray-100">
                <h5 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                  Career Opportunities & Roles
                </h5>
                <ul className="mt-2 space-y-1">
                  {activeCareer.occupations.map((occ, idx) => (
                    <li key={idx} className="text-xs text-gray-600">
                      • {occ}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Career Navigators / Educational Roadmap */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1.5 uppercase tracking-wide">
                <Compass className="w-4 h-4 text-[#C8232C]" />
                Education Roadmap & Navigators
              </h4>
              <div className="mt-3 space-y-3">
                {activeCareer.navigators.map((nav, idx) => (
                  <div key={idx} className="p-3 bg-red-50/30 rounded-lg border border-red-100">
                    <span className="text-xs font-bold text-[#C8232C] block mb-1.5">
                      {nav.title}
                    </span>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-700">
                      {nav.steps.map((step, stepIdx) => (
                        <React.Fragment key={stepIdx}>
                          <span className="bg-white px-2.5 py-1 rounded border border-gray-200 font-medium">
                            {step}
                          </span>
                          {stepIdx < nav.steps.length - 1 && (
                            <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Colleges in India */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1.5 uppercase tracking-wide">
                <GraduationCap className="w-4 h-4 text-[#C8232C]" />
                Top Colleges in India
              </h4>
              <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeCareer.topCollegesGrad.map((col, idx) => (
                  <div key={idx} className="text-xs bg-gray-50 p-2.5 rounded border border-gray-200 flex items-start gap-1.5">
                    <span className="text-gray-400 font-bold shrink-0">{idx + 1}.</span>
                    <div>
                      <span className="font-semibold text-gray-900 block">{col.name}</span>
                      {col.location && <span className="text-gray-500">{col.location}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons inside Modal */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href="https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/MTY4Mg==/as11-as12-as13"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#C8232C] hover:bg-[#A81C24] text-white text-xs sm:text-sm font-semibold rounded-md shadow-xs text-center transition-colors"
              >
                Take Career Assessment
              </a>

              <button
                type="button"
                onClick={() => {
                  setActiveCareer(null);
                  openModal(`Career Guidance: ${activeCareer.title}`);
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#123E25] hover:bg-[#0B2014] text-white text-xs sm:text-sm font-semibold rounded-md shadow-xs text-center transition-colors cursor-pointer"
              >
                Book 1-on-1 Guidance
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
