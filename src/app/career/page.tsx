import type { Metadata } from "next";
import CareerHero from "@/components/career/CareerHero";
import CareerAssessments from "@/components/career/CareerAssessments";
import CareerSuitabilitySection from "@/components/career/CareerSuitabilitySection";
import CareerLibrarySection from "@/components/career/CareerLibrarySection";
import CareerAboutCounsellor from "@/components/career/CareerAboutCounsellor";

export const metadata: Metadata = {
  title: "Career Counselling & Psychometric Assessments | Pariichay",
  description:
    "Comprehensive career counselling, 5-stage psychometric career assessments, career suitability checks, and 3000+ occupation encyclopedia by expert counsellor Jignesh Prajapati at Pariichay Consultancy.",
  keywords:
    "Career Counselling Ahmedabad, Psychometric Career Assessment, Career Guidance Students, Stream Selection Class 10, Career Roadmap Class 12, Jignesh Prajapati Career Coach, Pariichay Career Library",
  alternates: {
    canonical: "https://pariichay.com/career",
  },
  openGraph: {
    title: "Career Counselling & Psychometric Assessments | Pariichay",
    description:
      "Explore 20 career clusters, 160+ paths, and 3000+ occupations with expert career assessments and 1-on-1 personalized guidance.",
    url: "https://pariichay.com/career",
    siteName: "Pariichay",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Counselling & Psychometric Assessments | Pariichay",
    description:
      "Evidence-based career assessments and guidance by Certified Coach Jignesh Prajapati.",
  },
};

export default function CareerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Comprehensive Career Counselling & Psychometric Assessment",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Pariichay Consultancy",
      "url": "https://pariichay.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "204, Pushkar Icon Near Kalyan Chawk, Nikol",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "382350",
        "addressCountry": "IN"
      },
      "telephone": "+919313812657"
    },
    "description": "Evidence-based psychometric testing, multiple intelligence analysis, and career execution roadmaps for school students, graduates, and professionals.",
    "serviceType": "Career Counselling",
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Career Assessment Tiers",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Career Analysis for 2nd to 7th Class"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Career Analysis for 8th to 10th Class"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Career Analysis for 11th & 12th Class"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Career Analysis for Graduates"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Career Analysis for Professionals"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="w-full bg-white flex flex-col min-h-screen">
        {/* Exact Hero Header matching Screenshot 1 */}
        <CareerHero />

        {/* Exact Five Assessment Cards matching Screenshot 2 */}
        <CareerAssessments />

        {/* 30-Minute Career Suitability Section */}
        <CareerSuitabilitySection />

        {/* Interactive Global Career Library & Search */}
        <CareerLibrarySection />

        {/* About Us, Services Grid, Jignesh Sir Profile & Contact */}
        <CareerAboutCounsellor />
      </div>
    </>
  );
}
