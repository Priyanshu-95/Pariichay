import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import SectionSkeleton from "@/components/SectionSkeleton";

// Dynamic progressive loading for below-the-fold sections
const About = dynamic(() => import("@/components/About"), {
  loading: () => <SectionSkeleton title="About Pariichay" height="h-[450px]" />,
});

const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <SectionSkeleton title="Counselling Offerings" height="h-[500px]" />,
});

const WhoWeHelp = dynamic(() => import("@/components/WhoWeHelp"), {
  loading: () => <SectionSkeleton title="Who We Help" height="h-[450px]" />,
});

const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), {
  loading: () => <SectionSkeleton title="Why Choose Us" height="h-[400px]" />,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <SectionSkeleton title="Client Reviews" height="h-[400px]" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <div className="pt-8 pb-12 relative z-20">
        <MarqueeSection />
      </div>
      <About preview={true} />
      <Services preview={true} />
      <WhoWeHelp preview={true} />
      <WhyChooseUs preview={true} />
      <Testimonials preview={true} />
    </>
  );
}
