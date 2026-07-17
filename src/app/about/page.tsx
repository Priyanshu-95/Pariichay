import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata = {
  title: "About Us | Pariichay - Clarity Today, Success Tomorrow",
  description: "Learn about Jignesh Prajapati, founder of Pariichay, and our mission to merge psychological science with Vedic wisdom for complete life alignment.",
};

export default function AboutPage() {
  return (
    <>
      <About preview={false} />
      <WhyChooseUs />
    </>
  );
}
