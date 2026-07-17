export interface Testimonial {
  id: string;
  authorName: string;
  profession: string;
  rating: number;
  text: string;
  initials: string;
  googleReviewUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    authorName: "Hetal Mali",
    profession: "School Teacher",
    rating: 5,
    text: "Back in 2021, when everyone pressured me to do CA or government jobs, I took a DMIT test with counselor Jignesh Prajapati to find my true calling. 📊 The report perfectly captured my strengths: management, teaching, and listening. ✨ Today, I’m happily teaching at Divine International School and preparing to become a management professor. 🎓 I am 100% satisfied—his guidance gave me the clarity to follow my heart and build a career I love! 💼",
    initials: "HM",
    googleReviewUrl: "https://maps.app.goo.gl/z7YUppHdun9o5iNG8"
  },
  {
    id: "2",
    authorName: "HIDDENEYE TECHNO SOLUTION",
    profession: "Business Client",
    rating: 5,
    text: "Parichay Career Counseling provides honest and expert career guidance. Their counselors patiently explain every option and help students choose the best career according to their interests and abilities. A trustworthy place for career planning. Highly recommended!",
    initials: "HT",
    googleReviewUrl: "https://maps.app.goo.gl/z7YUppHdun9o5iNG8"
  },
  {
    id: "3",
    authorName: "Chetan Suthar",
    profession: "Local Guide",
    rating: 5,
    text: `Dear Jigneshbhai Prajapati,

I would like to express my heartfelt gratitude for your invaluable guidance and astrological consultation. Your deep knowledge, patience, and honest approach made me feel truly understood and reassured. The way you carefully analyzed my situation and explained every aspect with clarity has given me a new perspective and renewed confidence.

Your guidance was not just a prediction of events but a source of hope, wisdom, and direction. It has helped me understand the importance of patience, self-belief, and making thoughtful decisions in life. I truly appreciate the sincerity, positivity, and dedication with which you shared your knowledge.

Thank you for answering all my questions with kindness and for providing practical remedies and meaningful advice. Your words have brought peace to my mind and strengthened my faith in moving forward with confidence.

I sincerely pray that God blesses you with good health, happiness, prosperity, and continued success so that you may keep guiding and inspiring many more people.

Thank you once again for your precious time, wisdom, and blessings. I will always remain grateful for your support and guidance.

Chetan Suthar.
Ahmedabad.`,
    initials: "CS",
    googleReviewUrl: "https://maps.app.goo.gl/z7YUppHdun9o5iNG8"
  },
  {
    id: "4",
    authorName: "Neev Bridal Studio And Academy",
    profession: "Client",
    rating: 5,
    text: "",
    initials: "NB",
    googleReviewUrl: "https://maps.app.goo.gl/z7YUppHdun9o5iNG8"
  }
];

export const googleReviewSummary = {
  rating: 5.0,
  totalReviews: 4,
  lastVerified: "July 2026"
};

export const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/z7YUppHdun9o5iNG8";
