import WhoWeHelp from "@/components/WhoWeHelp";
import MarqueeSection from "@/components/MarqueeSection";

export const metadata = {
  title: "Who We Help | Pariichay - Target Counselling for All Stages",
  description: "Specialized guidance structures supporting cognitive and psychological growth in children, students, parents, adults, teachers, and corporate groups.",
};

export default function WhoWeHelpPage() {
  return (
    <>
      <WhoWeHelp preview={false} />
      <div className="py-8 bg-transparent">
        <MarqueeSection />
      </div>
    </>
  );
}
