import Services from "@/components/Services";

export const metadata = {
  title: "Counselling Services | Pariichay - Personalized Growth Pathways",
  description: "Explore our wide range of counselling services including 360° personal counselling, psychometrics, IQ testing, career guidance, parenting support, and biometric assessments.",
};

export default function ServicesPage() {
  return (
    <Services preview={false} />
  );
}
