import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import About from "@/components/About";
import Services from "@/components/Services";
import WhoWeHelp from "@/components/WhoWeHelp";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";

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
