import type { Metadata } from "next";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { BookingModalProvider } from "@/context/BookingModalContext";
import BookingModal from "@/components/BookingModal";

export const metadata: Metadata = {
  title: "Pariichay | 360° Counselling Solutions - Discover Your Potential",
  description: "Experience premium, scientific, and Vedic counselling at Pariichay. Specializing in career guidance, parenting, relationship counselling, IQ testing, and biometric assessments.",
  keywords: "Counselling, Career Guidance, Positive Parenting, Psychometric Testing, IQ Testing, Vedic Counselling, Numerology, DMIT Assessment, Relationship Counselling, Pariichay",
  authors: [{ name: "Pariichay Team" }],
  openGraph: {
    title: "Pariichay | 360° Counselling Solutions",
    description: "Premium, scientific, and Vedic counselling solutions designed to help you and your child discover your true potential.",
    url: "https://pariichay.com",
    siteName: "Pariichay",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pariichay | 360° Counselling Solutions",
    description: "Holistic counselling blending modern psychometrics with ancient Vedic wisdom.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-body bg-primary-bg text-body-text overflow-x-hidden selection:bg-premium-teal/20 selection:text-premium-teal">
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CounselingService",
              "name": "Pariichay – 360° Counselling Solutions",
              "image": "https://pariichay.com/og-image.jpg",
              "description": "Scientific & Vedic Counselling Solutions for Career, Parenting, and Holistic Growth.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "204, Pushkar Icon Near Kalyan Chawk, Shukan Cross Road, Nikol - Naroda Rd, Nikol",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "382350",
                "addressCountry": "IN"
              },
              "telephone": "+919313812657",
              "priceRange": "$$",
              "openingHours": "Mo-Sa 09:00-19:00"
            })
          }}
        />
        {/* Premium Core UI Elements */}
        <BookingModalProvider>
          <LoadingScreen />
          <ScrollProgress />
          <Navbar />
          
          {/* Page Content */}
          <main className="flex-grow pt-[80px]">
            {children}
          </main>

          <Footer />
          <FloatingActions />
          <BookingModal />
        </BookingModalProvider>
      </body>
    </html>
  );
}
