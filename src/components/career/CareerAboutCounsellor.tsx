"use client";

import React from "react";
import {
  Compass,
  GraduationCap,
  Users,
  Globe2,
  Fingerprint,
  Brain,
  Award,
  Phone,
  Mail,
  MapPin,
  CalendarCheck,
  CheckCircle,
} from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";

export default function CareerAboutCounsellor() {
  const { openModal } = useBookingModal();

  const services = [
    {
      title: "Career Counselling",
      desc: "We help students and professionals identify the best career paths based on their strengths, interests, and aspirations.",
      icon: <Compass className="w-6 h-6 text-[#123E25]" />,
    },
    {
      title: "Student Counselling",
      desc: "Our expert counselors guide students through academic decisions and help them build a strong future.",
      icon: <GraduationCap className="w-6 h-6 text-[#123E25]" />,
    },
    {
      title: "Parents Counselling",
      desc: "We provide guidance to parents on how to support their children's career development and academic growth.",
      icon: <Users className="w-6 h-6 text-[#123E25]" />,
    },
    {
      title: "Abroad Counselling",
      desc: "Our abroad counselling services help students make informed decisions about studying and working overseas.",
      icon: <Globe2 className="w-6 h-6 text-[#123E25]" />,
    },
    {
      title: "DMIT Counselling",
      desc: "Our DMIT (Dermatoglyphics Multiple Intelligence Test) counselling identifies natural abilities and potential to optimize career choices.",
      icon: <Fingerprint className="w-6 h-6 text-[#123E25]" />,
    },
    {
      title: "Psychometric Counselling",
      desc: "Psychometric testing helps us assess personality traits and aptitudes to guide career decisions based on a person's profile.",
      icon: <Brain className="w-6 h-6 text-[#123E25]" />,
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* 1. About Us Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C8232C] bg-red-50 px-3 py-1 rounded-full border border-red-100">
            About Our Center
          </span>
          <h3 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Scientific, Holistic & Empathetic Guidance
          </h3>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            We are a dedicated Career Counselling center providing solutions for career confusions among students and professionals. Our holistic approach, backed by empathy and thorough analysis, helps guide our clients to make informed career decisions and avoid pitfalls in the future.
          </p>
          <p className="mt-3 text-sm text-gray-500 leading-relaxed">
            Our center focuses on helping individuals choose a career path that matches their skills, interests, and goals. Our assessments provide a clear picture of strengths and developmental areas, guiding candidates to make confident choices with the right mental attitude.
          </p>
        </div>

        {/* 2. Six Core Services Grid */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Our Comprehensive Services
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-gray-500">
              Personalized interventions engineered for every developmental phase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF9F6] border border-gray-200/80 rounded-xl p-6 hover:shadow-md hover:border-[#123E25]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-4 shadow-2xs">
                    {item.icon}
                  </div>
                  <h5 className="text-base font-bold text-gray-900 mb-2">
                    {item.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-200/50">
                  <button
                    type="button"
                    onClick={() => openModal(item.title)}
                    className="text-xs font-semibold text-[#123E25] hover:text-[#C8232C] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inquire About {item.title}</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. About the Counsellor: Jignesh Prajapati */}
        <div className="bg-gradient-to-br from-[#FAF7F2] to-[#F3EDE2] rounded-2xl p-8 sm:p-12 border border-[#123E25]/10 shadow-sm mb-16">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#123E25] text-white flex flex-col items-center justify-center shrink-0 shadow-lg border-4 border-white">
              <Award className="w-10 h-10 text-[#CFB53B] mb-1" />
              <span className="text-xs font-bold uppercase tracking-wider text-center px-2">
                15+ Yrs Exp
              </span>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-2">
                <span className="text-xs font-semibold text-[#123E25] bg-white px-3 py-1 rounded-full border border-[#123E25]/20 shadow-2xs">
                  Certified Career Coach
                </span>
                <span className="text-xs font-semibold text-[#123E25] bg-white px-3 py-1 rounded-full border border-[#123E25]/20 shadow-2xs">
                  NLP Practitioner
                </span>
                <span className="text-xs font-semibold text-[#123E25] bg-white px-3 py-1 rounded-full border border-[#123E25]/20 shadow-2xs">
                  Life Clarity Coach
                </span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-bold text-[#0B2014] tracking-tight">
                Jignesh Prajapati
              </h4>
              <p className="text-xs sm:text-sm font-medium text-[#1E5E3A] mt-1">
                Founder, Pariichay Consultancy & Senior Career Analyst
              </p>

              <p className="mt-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Jignesh Prajapati is a Certified Career Coach and Life Clarity Coach with over 15 years of dedicated experience in the education and human potential field. His coaching philosophy centers on overcoming personal barriers, unlocking natural intelligences, and realizing the fullest potential of every student and professional.
              </p>

              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Having mentored students across nine reputed institutions, he combines evidence-based psychometric frameworks, DMIT biometric indicators, and NLP motivational methodologies to bring profound clarity, academic direction, and executive confidence.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={() => openModal("Career Counselling with Jignesh Sir")}
                  className="px-6 py-2.5 bg-[#123E25] hover:bg-[#0B2014] text-white text-xs sm:text-sm font-semibold rounded-md shadow-md flex items-center gap-2 cursor-pointer transition-all active:scale-95"
                >
                  <CalendarCheck className="w-4 h-4 text-[#CFB53B]" />
                  <span>Book 1-on-1 Session with Jignesh Sir</span>
                </button>

                <a
                  href="tel:+919313812657"
                  className="px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-800 text-xs sm:text-sm font-semibold rounded-md border border-gray-300 shadow-2xs flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#123E25]" />
                  <span>+91 93138 12657</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Let's Keep in Touch / Coordination Desk */}
        <div className="border border-gray-200 rounded-xl p-6 sm:p-8 bg-[#FAF9F6]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h5 className="text-lg font-bold text-gray-900">
                Let&apos;s keep in touch!
              </h5>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Connect with our care coordination team for test access codes, reports, or scheduling.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-4 text-xs text-gray-600">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C8232C]" />
                  204, Pushkar Icon, Near Kalyan Chawk, Nikol, Ahmedabad
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#C8232C]" />
                  info@pariichay.com
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => openModal("General Career Consultation")}
              className="px-6 py-3 bg-[#C8232C] hover:bg-[#A81C24] text-white text-xs sm:text-sm font-semibold rounded-md shadow transition-all shrink-0 cursor-pointer active:scale-95"
            >
              Request Quick Call Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
