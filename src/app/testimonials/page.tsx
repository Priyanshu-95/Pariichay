import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Client Testimonials | Pariichay - Stories of Real Growth",
  description: "Read reviews from parents, students, and professionals who found clarity, streamlined academic directions, and reduced stress using Pariichay.",
};

export default function TestimonialsPage() {
  return (
    <Testimonials preview={false} />
  );
}
