# Pariichay | 360° Counselling Solutions

Pariichay is a premium web application for **Pariichay**, a holistic counselling and assessment platform. The platform blends cutting-edge scientific psychometrics and biometrics (DMIT) with ancient Vedic wisdom (Astrology, Kundali, and Numerology) to help individuals, parents, students, couples, and working professionals discover their true potential and outline actionable roadmaps for growth.

---

## 🚀 Features

- **Holistic Services Catalog**: Detailed sections showcasing:
  - **Scientific Assessments**: Psychometric tests, IQ testing, and Biometric (DMIT) assessments.
  - **Counselling Programs**: 360° Counselling, Career Guidance, Academic Counselling, Child Behaviour, and Corporate Programs.
  - **Vedic Guidance**: Vedic Astrology, Kundali Analysis, and Numerology Analysis.
- **Interactive Booking Flow**: A dynamic appointment booking modal powered by `react-hook-form` and `zod` for validation, providing a seamless user experience.
- **Aesthetic User Interface**: Premium, modern dark-themed web design using tailored color palettes, glassmorphism, smooth scrolling, and scroll progress tracking.
- **Custom Cursor & Micro-animations**: Immersive layout transitions and interactive hover elements developed using `framer-motion`.
- **Search Engine Optimized (SEO)**: Custom metadata configuration, structured JSON-LD schema markup, and semantic HTML5 structures to ensure high SEO rankings.
- **Responsive Layout**: Pixel-perfect viewports designed for mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack

- **Core**: React 19, Next.js 16 (App Router), TypeScript
- **Styling**: Tailwind CSS v4, PostCSS
- **Animations**: Framer Motion
- **Form Management**: React Hook Form, Zod (validation)
- **Icons & Visuals**: Lucide React, Canvas Confetti
- **Deployment**: Optimized for Vercel

---

## 📁 Folder Structure

```text
parichay-new/
├── public/                 # Static assets (icons, images)
├── src/
│   ├── app/                # Next.js App Router pages and API routes
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── faq/            # FAQ page
│   │   ├── process/        # Counselling process steps page
│   │   ├── services/       # Services listing page
│   │   ├── testimonials/   # Testimonials page
│   │   ├── layout.tsx      # Root HTML layout and SEO metadata
│   │   └── page.tsx        # Homepage
│   ├── assets/             # Statically imported local graphics/illustrations
│   ├── components/         # Reusable React components
│   │   ├── About.tsx       # About summary section
│   │   ├── BookingModal.tsx# Form modal for booking sessions
│   │   ├── Hero.tsx        # Premium landing banner with animations
│   │   ├── Services.tsx    # Interactive service list with categories
│   │   └── ...             # CustomCursor, LoadingScreen, ScrollProgress, etc.
│   ├── context/            # React Context API for global state management
│   ├── data/               # Static mock datasets and configurations
│   └── lib/                # Utility helper functions
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Node project configuration
└── .gitignore              # Repository file exclusion rules
```

---

## 💻 Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Priyanshu-95/Pariichay.git
   cd Pariichay
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory (refer to `.env.example` if available) and add your local configuration variables.

---

## ⚙️ Usage

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

To build the project for production:

```bash
npm run build
npm start
```

---

## 📸 Screenshots

*Screenshots will be uploaded here upon visual deployment validation.*

| Homepage Hero Section | Booking & Appointment Modal |
|---|---|
| ![Hero Banner Placeholder](https://placehold.co/600x400?text=Pariichay+Hero+Section) | ![Booking Modal Placeholder](https://placehold.co/600x400?text=Pariichay+Booking+Modal) |

---

## 🔮 Future Improvements

- [ ] **AI-Powered Recommendation Engine**: Suggest counselling services based on user-completed micro-questionnaires.
- [ ] **Payment Gateway Integration**: Direct online payment processing for booking slots.
- [ ] **Client Dashboard**: A private user portal to view past reports, upcoming appointments, and homework tasks.
- [ ] **Blog/Resource Hub**: Articles on parenting, career roadmaps, and Vedic wisdom to improve SEO and user retention.

---

## 👤 Author

- **Pariichay Team** - *Development & Design*

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
