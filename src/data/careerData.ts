export interface CareerCollege {
  name: string;
  location?: string;
}

export interface CareerNavigator {
  title: string;
  steps: string[];
}

export interface CareerItem {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  iconName: string; // lucide icon identifier
  about: string;
  workNature: string[];
  keySkills: string[];
  occupations: string[];
  demand: "High" | "Medium" | "Very High";
  demandSummary: string;
  salaryLevel: "High" | "Medium" | "Very High";
  salaryRange: string;
  courseFees: string;
  preparationLevel: string;
  navigators: CareerNavigator[];
  topCollegesGrad: CareerCollege[];
  topCollegesPostGrad?: CareerCollege[];
  relatedSlugs: string[];
}

export const CAREER_CATEGORIES = [
  "All Careers",
  "Design & Arts",
  "Information Technology",
  "Business Management",
  "Marketing & Advertising",
  "Accounting and Finance",
  "Health Sciences",
  "Science, Maths & Engineering",
  "Media and Communication",
  "Human Services & Social Sciences",
  "Architecture and Construction",
  "Education and Training",
  "Hospitality and Tourism",
  "Legal Services",
  "Agriculture & Environment"
] as const;

export const CAREER_DATABASE: CareerItem[] = [
  {
    slug: "fashion-designing",
    title: "Fashion Designing",
    category: "Design & Arts",
    tagline: "Create functional, aesthetic apparel and define modern global fashion trends.",
    iconName: "Scissors",
    about: "Fashion design is the art of applying design, aesthetics, clothing construction, and natural beauty to clothing and its accessories. Influenced by culture and trends, fashion designers create innovative clothing lines, ramp collections, and custom couture for diverse clienteles.",
    workNature: [
      "Research emerging fashion trends, fabrics, textures, and color forecasting palettes.",
      "Sketch original apparel concepts manually and utilizing CAD (Computer-Aided Design) software.",
      "Select textiles, trims, embellishments, and oversee prototype sample garment creation.",
      "Collaborate with pattern makers, textile manufacturers, merchandisers, and runway stylists.",
      "Present seasonal collections to fashion houses, retail buyers, and media outlets."
    ],
    keySkills: ["Garment Construction", "Adobe Illustrator & Photoshop", "Fabric & Textile Knowledge", "Trend Forecasting", "Creative Sketching"],
    occupations: [
      "Apparel Fashion Designer",
      "Haute Couture Stylist",
      "Costume Designer (Film & Theatre)",
      "Fashion Merchandiser",
      "Textile & Surface Designer",
      "Design Director"
    ],
    demand: "Medium",
    demandSummary: "Steady growth across fast-fashion, e-commerce, bridal wear, and sustainable luxury couture.",
    salaryLevel: "Medium",
    salaryRange: "₹3.5 - 6 LPA (Entry), ₹12 - 30+ LPA (Lead Designer / Own Brand)",
    courseFees: "₹3 - 6 Lakhs per year in premier design institutes",
    preparationLevel: "1 year entrance test preparation (UCEED, NIFT, NID)",
    navigators: [
      {
        title: "Path 1: Design Bachelor's to Master's",
        steps: ["10+2 (Any Stream)", "B.Des in Fashion Design (4 Years)", "M.Des in Fashion Design / Luxury Brand Management"]
      },
      {
        title: "Path 2: Science / Commerce to Fashion Technology",
        steps: ["10+2 (Any Stream)", "B.FTech / B.Sc Fashion Technology", "PG Diploma in Fashion Merchandising"]
      }
    ],
    topCollegesGrad: [
      { name: "National Institute of Fashion Technology (NIFT)", location: "New Delhi & Mumbai" },
      { name: "National Institute of Design (NID)", location: "Ahmedabad" },
      { name: "Pearl Academy", location: "New Delhi & Mumbai" },
      { name: "Symbiosis Institute of Design (SID)", location: "Pune" }
    ],
    topCollegesPostGrad: [
      { name: "NIFT", location: "New Delhi" },
      { name: "NID", location: "Gandhinagar" },
      { name: "Domus Academy / Milan Fashion Institute", location: "International" }
    ],
    relatedSlugs: ["interior-designing", "graphical-designing", "product-designing", "multimedia-animation"]
  },
  {
    slug: "interior-designing",
    title: "Interior Designing",
    category: "Design & Arts",
    tagline: "Transform interior environments into functional, safe, and aesthetically stunning spaces.",
    iconName: "Home",
    about: "Interior designers plan, research, coordinate, and manage enhancement projects to make indoor spaces aesthetically pleasing, functional, and ergonomically sound for residential, corporate, retail, and hospitality spaces.",
    workNature: [
      "Assess client spatial needs, architectural drawings, lighting, and acoustic requirements.",
      "Formulate 2D layout drawings, 3D photorealistic renderings, and BIM models.",
      "Select sustainable materials, bespoke furniture, lighting fixtures, and finishes.",
      "Manage contractor schedules, civil works, electrical fittings, and budget compliance.",
      "Ensure compliance with structural safety, accessibility, and fire codes."
    ],
    keySkills: ["AutoCAD & 3ds Max", "SketchUp & Revit", "Spatial Ergonomics", "Material Science", "Project Budgeting"],
    occupations: [
      "Residential Interior Designer",
      "Corporate Workplace Strategist",
      "Commercial & Retail Space Designer",
      "Lighting Consultant",
      "Furniture & Fixture Designer"
    ],
    demand: "High",
    demandSummary: "Surging demand driven by real estate urbanization, commercial co-working, and luxury renovations.",
    salaryLevel: "Medium",
    salaryRange: "₹3.5 - 5.5 LPA (Entry), ₹10 - 25+ LPA (Senior Interior Architect)",
    courseFees: "₹2.5 - 5 Lakhs per year",
    preparationLevel: "6 months to 1 year portfolio and entrance preparation",
    navigators: [
      {
        title: "Standard Interior Pathway",
        steps: ["10+2 (Any Stream with 50%+)", "B.Des in Interior Design (4 Years)", "M.Des Interior Architecture / Spatial Design"]
      }
    ],
    topCollegesGrad: [
      { name: "CEPT University", location: "Ahmedabad" },
      { name: "National Institute of Design (NID)", location: "Ahmedabad" },
      { name: "Pearl Academy", location: "Mumbai / Delhi" },
      { name: "Sir J.J. School of Arts", location: "Mumbai" }
    ],
    relatedSlugs: ["fashion-designing", "architecture", "product-designing"]
  },
  {
    slug: "graphical-designing",
    title: "Graphical Designing",
    category: "Design & Arts",
    tagline: "Craft visual identities, brand systems, packaging, and digital communication.",
    iconName: "Palette",
    about: "Graphic designers create visual concepts using computer software or by hand to communicate ideas that inspire, inform, and captivate consumers. They develop brand identity systems, marketing collateral, digital UI illustrations, and packaging.",
    workNature: [
      "Develop graphic concepts, logos, brand guides, typography hierarchies, and icon systems.",
      "Design marketing assets for digital campaigns, social media, print, and outdoor billboards.",
      "Work with art directors, creative strategists, and copywriters to maintain brand synergy.",
      "Prepare prepress production files and digital vector assets for multi-screen responsive delivery."
    ],
    keySkills: ["Figma & Adobe Creative Suite", "Visual Hierarchy & Typography", "Color Theory", "Vector Illustration", "Brand Storytelling"],
    occupations: [
      "Brand Identity Designer",
      "Visual Communicator",
      "Packaging Designer",
      "Digital Illustrator",
      "Art Director"
    ],
    demand: "High",
    demandSummary: "Continuous high demand in corporate branding, tech startups, advertising, and digital media.",
    salaryLevel: "Medium",
    salaryRange: "₹3 - 5 LPA (Entry), ₹9 - 20+ LPA (Art Director / Brand Lead)",
    courseFees: "₹2 - 4 Lakhs per year",
    preparationLevel: "Portfolio development & creative aptitude tests",
    navigators: [
      {
        title: "Communication Design Pathway",
        steps: ["10+2 (Any Stream)", "B.Des in Graphic Design / Visual Communication", "M.Des in Communication Design"]
      }
    ],
    topCollegesGrad: [
      { name: "NID Ahmedabad", location: "Ahmedabad" },
      { name: "IDC School of Design, IIT Bombay", location: "Mumbai" },
      { name: "Srishti Institute of Art, Design & Technology", location: "Bengaluru" }
    ],
    relatedSlugs: ["web-ui-ux", "multimedia-animation", "advertising-communication"]
  },
  {
    slug: "web-ui-ux",
    title: "Web Designer & UI/UX Specialist",
    category: "Information Technology",
    tagline: "Design intuitive digital experiences, modern interfaces, and human-centered design systems.",
    iconName: "Layout",
    about: "UI/UX Designers solve complex user problems by creating seamless, accessible, and delight-inducing digital experiences across web, mobile, and wearable platforms.",
    workNature: [
      "Conduct user research, persona profiling, usability testing, and customer journey mapping.",
      "Develop interactive wireframes, low-to-high fidelity prototypes, and micro-interactions.",
      "Maintain scalable design systems with tokens, responsive layouts, and WCAG accessibility standards.",
      "Partner with frontend engineers to ensure precision in design-to-code execution."
    ],
    keySkills: ["Figma & Prototyping", "User Research & Usability Testing", "Design Systems & Tokens", "Interaction Design", "HTML/CSS Basics"],
    occupations: [
      "UI/UX Designer",
      "Product Designer",
      "UX Researcher",
      "Design Systems Engineer",
      "Interaction Designer"
    ],
    demand: "Very High",
    demandSummary: "One of the most heavily recruited tech-creative roles globally across SaaS, fintech, and consumer apps.",
    salaryLevel: "High",
    salaryRange: "₹5 - 9 LPA (Entry), ₹18 - 40+ LPA (Lead Product Designer)",
    courseFees: "₹2 - 5 Lakhs per year (Or specialized intensive bootcamps)",
    preparationLevel: "Interaction design portfolio, case studies, and problem-solving evaluations",
    navigators: [
      {
        title: "Interaction Design Track",
        steps: ["10+2 (Any Stream)", "B.Des in Interaction Design or B.Tech in CS with UX Focus", "Master in Human-Computer Interaction (HCI)"]
      }
    ],
    topCollegesGrad: [
      { name: "IIT Bombay (IDC)", location: "Mumbai" },
      { name: "NID Gandhinagar (New Media)", location: "Gandhinagar" },
      { name: "IIIT Delhi (Human-Centered Design)", location: "New Delhi" }
    ],
    relatedSlugs: ["programming-software", "graphical-designing", "multimedia-animation"]
  },
  {
    slug: "programming-software",
    title: "Programming & Software Development",
    category: "Information Technology",
    tagline: "Build enterprise software, scalable cloud systems, mobile apps, and algorithmic architectures.",
    iconName: "Code",
    about: "Software developers engineer the digital backbone of the modern world, designing algorithms, web backends, cloud architectures, and interactive mobile applications.",
    workNature: [
      "Write clean, performant, and test-driven code across backend and frontend architectures.",
      "Design microservices, APIs, database schemas, and cloud deployment pipelines.",
      "Diagnose system bottlenecks, security vulnerabilities, and code quality audits.",
      "Collaborate in agile sprints with product managers, QA engineers, and DevOps leads."
    ],
    keySkills: ["Data Structures & Algorithms", "Python / Java / TypeScript / Go", "SQL & NoSQL Databases", "Cloud (AWS / Azure)", "System Design"],
    occupations: [
      "Full Stack Software Engineer",
      "Backend Systems Architect",
      "Cloud & DevOps Engineer",
      "Mobile App Developer (iOS/Android)",
      "Engineering Manager"
    ],
    demand: "Very High",
    demandSummary: "Perennial high demand across global IT services, tech product companies, fintech, and startups.",
    salaryLevel: "Very High",
    salaryRange: "₹6 - 15 LPA (Entry Tier-1), ₹25 - 60+ LPA (Staff / Principal Engineer)",
    courseFees: "₹1.5 - 4 Lakhs per year for Engineering degrees",
    preparationLevel: "JEE Main / Advanced or BITSAT, followed by algorithmic competitive programming",
    navigators: [
      {
        title: "Core Software Engineering Pathway",
        steps: ["10+2 with PCM", "B.Tech / B.E. in Computer Science / IT (4 Years)", "M.Tech / MS in Computer Science or Direct Industry Specialization"]
      },
      {
        title: "BCA to MCA Pathway",
        steps: ["10+2 (Any Stream with Maths/CS)", "BCA (3 Years)", "MCA (2 Years)"]
      }
    ],
    topCollegesGrad: [
      { name: "IITs (Bombay, Delhi, Madras, Kanpur)", location: "Pan India" },
      { name: "NITs & BITS Pilani", location: "Pan India" },
      { name: "IIIT Hyderabad & Bangalore", location: "Hyderabad / Bengaluru" }
    ],
    relatedSlugs: ["artificial-intelligence", "ethical-hacking", "cloud-devops", "big-data-analytics"]
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence & Machine Learning",
    category: "Information Technology",
    tagline: "Pioneer neural networks, LLMs, computer vision, and autonomous intelligent systems.",
    iconName: "Cpu",
    about: "AI and Machine Learning Engineers develop algorithms that allow machines to learn from data, identify complex patterns, make predictions, and understand natural language and computer vision.",
    workNature: [
      "Train deep learning neural networks, Large Language Models (LLMs), and computer vision pipelines.",
      "Perform feature engineering, data preprocessing, model evaluation, and hyperparameter tuning.",
      "Deploy scalable inference engines to production cloud clusters with low latency.",
      "Evaluate AI ethics, bias mitigation, explainability, and data security guidelines."
    ],
    keySkills: ["Python & PyTorch / TensorFlow", "Linear Algebra & Probability", "Deep Learning & Transformers", "MLOps & Vector DBs", "CUDA / GPU Optimization"],
    occupations: [
      "Machine Learning Engineer",
      "AI Research Scientist",
      "Computer Vision Engineer",
      "NLP / LLM Engineer",
      "Data Science Lead"
    ],
    demand: "Very High",
    demandSummary: "Explosive global demand driven by generative AI transformation across enterprise and research.",
    salaryLevel: "Very High",
    salaryRange: "₹8 - 20 LPA (Entry), ₹35 - 80+ LPA (Senior AI Specialist)",
    courseFees: "₹2 - 5 Lakhs per year",
    preparationLevel: "Strong mathematical foundation (Calculus, Statistics) & Computer Science rigor",
    navigators: [
      {
        title: "AI Specialist Pathway",
        steps: ["10+2 with PCM", "B.Tech in Computer Science / AI & Data Science", "M.Tech / MS in Artificial Intelligence / PhD"]
      }
    ],
    topCollegesGrad: [
      { name: "IIT Madras (Robert Bosch Centre for Data Science and AI)", location: "Chennai" },
      { name: "IIT Hyderabad (Dedicated AI Department)", location: "Hyderabad" },
      { name: "IISc Bangalore", location: "Bengaluru" }
    ],
    relatedSlugs: ["programming-software", "big-data-analytics", "robotics-electronics"]
  },
  {
    slug: "chartered-accountant",
    title: "Chartered Accountant (CA)",
    category: "Accounting and Finance",
    tagline: "Guide corporate financial audits, taxation strategies, forensic accounting, and fiscal planning.",
    iconName: "Calculator",
    about: "Chartered Accountants are certified professionals authorized by the Institute of Chartered Accountants of India (ICAI) to manage statutory audits, corporate taxation, forensic accounting, mergers, and financial advisory.",
    workNature: [
      "Conduct statutory, internal, and tax audits for private corporations and listed entities.",
      "Structure corporate tax planning strategies, transfer pricing, and GST compliance.",
      "Provide advisory on mergers & acquisitions, financial due diligence, and capital valuations.",
      "Maintain enterprise financial transparency and compliance with International Financial Reporting Standards (IFRS)."
    ],
    keySkills: ["Advanced Auditing & Assurance", "Direct & Indirect Taxation", "Corporate Law", "Financial Reporting (IFRS/Ind AS)", "Forensic Accounting"],
    occupations: [
      "Chartered Accountant (Practicing)",
      "Corporate Chief Financial Officer (CFO)",
      "Statutory Auditor",
      "Taxation Specialist",
      "Forensic Auditor"
    ],
    demand: "High",
    demandSummary: "Continuous mandatory legal requirement for all Indian corporations, banks, and SMEs.",
    salaryLevel: "High",
    salaryRange: "₹7 - 14 LPA (Fresh CA qualification), ₹25 - 60+ LPA (Partner in Firm / Corporate CFO)",
    courseFees: "₹1.5 - 2.5 Lakhs overall (ICAI registration & coaching)",
    preparationLevel: "3–4 years of disciplined preparation & mandatory 2–3 years articleship",
    navigators: [
      {
        title: "ICAI Official Certification Route",
        steps: ["10+2 (Any Stream, Commerce preferred)", "CA Foundation Exam", "CA Intermediate & 2-Year Articleship", "CA Final Examination"]
      }
    ],
    topCollegesGrad: [
      { name: "The Institute of Chartered Accountants of India (ICAI)", location: "National Body" },
      { name: "SRCC (Delhi University) - B.Com (Hons)", location: "New Delhi" },
      { name: "St. Xavier's College", location: "Kolkata / Mumbai" }
    ],
    relatedSlugs: ["banking-financial", "company-secretary", "business-analytics"]
  },
  {
    slug: "banking-financial",
    title: "Banking & Financial Services",
    category: "Accounting and Finance",
    tagline: "Drive investment strategies, retail banking, corporate credit, and capital market assets.",
    iconName: "Landmark",
    about: "Professionals in banking and financial planning manage investment portfolios, corporate credit loans, risk assessment, capital raising, and wealth management for retail and institutional clients.",
    workNature: [
      "Evaluate creditworthiness, loan underwriting, and asset-liability ratios for clients.",
      "Manage wealth management portfolios across equities, mutual funds, and fixed-income assets.",
      "Execute foreign exchange transactions, liquidity management, and treasury bonds.",
      "Ensure regulatory compliance with RBI, SEBI, and Basel III banking accords."
    ],
    keySkills: ["Financial Modeling & Excel", "Risk Analysis & Portfolio Valuation", "Credit Appraisal", "Regulatory Accords (RBI/SEBI)", "Client Relationship Management"],
    occupations: [
      "Investment Banker",
      "Credit Risk Manager",
      "Wealth & Portfolio Advisor",
      "Treasury Manager",
      "Branch Banking Head"
    ],
    demand: "High",
    demandSummary: "Robust growth across NBFCs, private banking, wealth fintechs, and asset management companies.",
    salaryLevel: "High",
    salaryRange: "₹4.5 - 8 LPA (Entry), ₹18 - 45+ LPA (Senior VP / Portfolio Manager)",
    courseFees: "₹3 - 10 Lakhs (for MBA / specialized certifications like CFA)",
    preparationLevel: "CAT / XAT / NMAT for top B-Schools or CFA level preparation",
    navigators: [
      {
        title: "Finance & Banking Track",
        steps: ["10+2 (Commerce / Economics / Science)", "B.Com / BBA in Finance / Economics", "MBA in Finance or CFA Level I/II/III"]
      }
    ],
    topCollegesGrad: [
      { name: "IIM Ahmedabad, Bangalore, Calcutta", location: "Pan India" },
      { name: "JBIMS Mumbai", location: "Mumbai" },
      { name: "NMIMS School of Business Management", location: "Mumbai" }
    ],
    relatedSlugs: ["chartered-accountant", "business-management", "business-analytics"]
  },
  {
    slug: "counselling-psychology",
    title: "Counselling Psychology",
    category: "Human Services & Social Sciences",
    tagline: "Empower mental clarity, emotional resilience, relationship harmony, and personal development.",
    iconName: "HeartPulse",
    about: "Counselling psychologists help individuals overcome emotional trauma, stress, anxiety, relationship distress, and career confusion through evidence-based therapeutic methods and empathetic listening.",
    workNature: [
      "Conduct intake sessions to assess clients' psychological wellbeing and cognitive styles.",
      "Implement therapeutic interventions such as Cognitive Behavioral Therapy (CBT), Mindfulness, and REBT.",
      "Administer psychometric tests, personality inventories, and aptitude evaluations.",
      "Facilitate group therapy workshops, parenting guidance, and student life-skills panels."
    ],
    keySkills: ["Empathetic Active Listening", "Cognitive Behavioral Therapy (CBT)", "Psychometric Testing Administration", "Crisis Intervention", "Ethical Client Confidentiality"],
    occupations: [
      "Clinical / Counselling Psychologist",
      "School & Adolescent Counsellor",
      "Career & Life Clarity Coach",
      "Corporate Wellness Specialist",
      "Family & Marriage Therapist"
    ],
    demand: "Very High",
    demandSummary: "Significant post-pandemic societal awakening regarding mental wellbeing, student stress, and workplace health.",
    salaryLevel: "Medium",
    salaryRange: "₹3.5 - 6 LPA (Institutional Entry), ₹10 - 25+ LPA (Established Private Practice)",
    courseFees: "₹1 - 3 Lakhs per year",
    preparationLevel: "Academic excellence in Psychology & RCI / Master's degree accreditation",
    navigators: [
      {
        title: "Professional Psychology Route",
        steps: ["10+2 (Any Stream, Humanities/Science preferred)", "B.A. / B.Sc in Psychology (3 Years)", "M.A. / M.Sc in Counselling or Clinical Psychology", "M.Phil / Professional Diploma in Clinical Psychology (RCI recognized)"]
      }
    ],
    topCollegesGrad: [
      { name: "NIMHANS", location: "Bengaluru" },
      { name: "Tata Institute of Social Sciences (TISS)", location: "Mumbai" },
      { name: "Delhi University (Lady Shri Ram College / Daulat Ram)", location: "New Delhi" },
      { name: "Christ University", location: "Bengaluru" }
    ],
    relatedSlugs: ["clinical-psychology", "school-teaching", "human-resources"]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & Performance Growth",
    category: "Marketing & Advertising",
    tagline: "Drive audience acquisition, brand visibility, performance campaigns, and viral growth.",
    iconName: "Megaphone",
    about: "Digital marketers use online channels, search engines, social media platforms, email networks, and content marketing to attract, engage, and convert modern consumers into loyal brand advocates.",
    workNature: [
      "Manage performance marketing campaigns across Google Ads, Meta Ads, and programmatic platforms.",
      "Formulate SEO strategies to secure top organic search rankings on search engines.",
      "Analyze analytics dashboards (GA4, Mixpanel) to optimize customer acquisition cost (CAC) and ROI.",
      "Direct creative copywriting, video hooks, and influencer marketing partnerships."
    ],
    keySkills: ["Google Ads & Meta Business Suite", "SEO & Content Marketing", "Data Analytics (GA4 / Looker)", "Conversion Rate Optimization (CRO)", "Copywriting & Storytelling"],
    occupations: [
      "Performance Marketing Lead",
      "SEO & Organic Growth Strategist",
      "Social Media Campaign Manager",
      "Chief Marketing Officer (CMO)",
      "Content Strategist"
    ],
    demand: "Very High",
    demandSummary: "Essential for every company in the modern digital commerce economy.",
    salaryLevel: "High",
    salaryRange: "₹3.5 - 6 LPA (Entry), ₹15 - 35+ LPA (Growth Lead / VP Marketing)",
    courseFees: "₹1 - 3 Lakhs (Specialized bootcamps or MBA Marketing)",
    preparationLevel: "Hands-on campaign portfolios, live ROI simulations, and Google/Meta certifications",
    navigators: [
      {
        title: "Marketing Pathway",
        steps: ["10+2 (Any Stream)", "BBA / B.Com / B.A. in Media & Communication", "MBA in Marketing or Certified Growth Marketing Specialization"]
      }
    ],
    topCollegesGrad: [
      { name: "MICA", location: "Ahmedabad" },
      { name: "IIMs & Symbiosis (SIMC)", location: "Pune" },
      { name: "NMIMS", location: "Mumbai" }
    ],
    relatedSlugs: ["advertising-communication", "business-management", "web-ui-ux"]
  },
  {
    slug: "general-physician",
    title: "General Medicine & Physician",
    category: "Health Sciences",
    tagline: "Diagnose, treat, and heal patients while upholding the gold standard of clinical care.",
    iconName: "Stethoscope",
    about: "General Physicians are licensed medical practitioners who provide comprehensive preventative and curative care for acute and chronic illnesses across patients of all demographics.",
    workNature: [
      "Conduct clinical patient examinations, symptom assessments, and medical histories.",
      "Order and interpret diagnostic laboratory tests, radiological scans, and biometrics.",
      "Formulate pharmacological treatment plans, lifestyle modifications, and referrals to specialists.",
      "Manage emergency medical interventions, stabilization, and preventive healthcare immunizations."
    ],
    keySkills: ["Clinical Diagnostics & Pathology", "Pharmacology & Therapeutics", "Patient Empathy & Bedside Manner", "Emergency Triage", "Medical Ethics"],
    occupations: [
      "Consultant Physician",
      "Hospitalist Medical Officer",
      "Family Medicine Practitioner",
      "Public Health Administrator",
      "Super-Specialist (Cardiology, Neurology, etc.)"
    ],
    demand: "Very High",
    demandSummary: "Permanent critical necessity with doctor-to-population ratios needing major expansion across India.",
    salaryLevel: "Very High",
    salaryRange: "₹8 - 14 LPA (Fresh MBBS), ₹20 - 60+ LPA (MD / DM Specialist)",
    courseFees: "₹1 - 5 Lakhs (Govt Medical Colleges) to ₹30 - 80 Lakhs (Private Universities)",
    preparationLevel: "1–2 years intense preparation for NEET-UG and subsequent NEET-PG",
    navigators: [
      {
        title: "Medical Career Pathway",
        steps: ["10+2 with PCB (Physics, Chemistry, Biology) with 50%+", "NEET-UG Examination", "MBBS Degree (5.5 Years including 1-Year Compulsory Internship)", "NEET-PG Examination & MD / MS Specialization (3 Years)"]
      }
    ],
    topCollegesGrad: [
      { name: "AIIMS (All India Institute of Medical Sciences)", location: "New Delhi & Regional Campuses" },
      { name: "Christian Medical College (CMC)", location: "Vellore" },
      { name: "King George's Medical University (KGMU)", location: "Lucknow" },
      { name: "B.J. Medical College", location: "Ahmedabad" }
    ],
    relatedSlugs: ["biomedical-engineering", "counselling-psychology"]
  },
  {
    slug: "architecture",
    title: "Architectural Engineering",
    category: "Architecture and Construction",
    tagline: "Design breathtaking sustainable buildings, urban skylines, and green living habitats.",
    iconName: "Building2",
    about: "Architects design buildings and built environments, ensuring they are aesthetically inspiring, structurally sound, economically viable, and environmentally sustainable.",
    workNature: [
      "Consult with clients to determine building functional objectives, aesthetics, and site feasibility.",
      "Produce detailed architectural schematics, structural drawings, and BIM models.",
      "Ensure compliance with municipal zoning regulations, environmental ratings (GRIHA/LEED), and fire codes.",
      "Coordinate on-site structural engineers, MEP contractors, and landscape planners."
    ],
    keySkills: ["AutoCAD & Revit BIM", "Structural Mechanics & Statics", "Sustainable Green Design (LEED)", "3D Rendering (Lumion/Rhino)", "Zoning & Municipal Bylaws"],
    occupations: [
      "Principal Architect",
      "Urban Landscape Designer",
      "Green Building & LEED Consultant",
      "Historic Preservation Architect",
      "Interior Architect"
    ],
    demand: "Medium",
    demandSummary: "Steady growth spurred by smart cities initiatives, eco-sustainable architecture, and commercial high-rises.",
    salaryLevel: "Medium",
    salaryRange: "₹3.5 - 6 LPA (Junior Architect), ₹15 - 35+ LPA (Principal / Partner in Firm)",
    courseFees: "₹2 - 5 Lakhs per year",
    preparationLevel: "NATA (National Aptitude Test in Architecture) or JEE Main Paper 2",
    navigators: [
      {
        title: "Certified Architecture Track",
        steps: ["10+2 with PCM (Mandatory)", "Clear NATA or JEE Main Paper 2", "B.Arch (5 Years, Council of Architecture Approved)", "M.Arch / Urban Planning or Registered Practice"]
      }
    ],
    topCollegesGrad: [
      { name: "CEPT University", location: "Ahmedabad" },
      { name: "IIT Kharagpur / IIT Roorkee (Department of Architecture)", location: "Pan India" },
      { name: "School of Planning and Architecture (SPA)", location: "New Delhi & Bhopal" }
    ],
    relatedSlugs: ["interior-designing", "product-designing"]
  }
];

export function getCareerBySlug(slug: string): CareerItem | undefined {
  return CAREER_DATABASE.find((c) => c.slug === slug);
}

export function getCareersByCategory(category: string): CareerItem[] {
  if (category === "All Careers") return CAREER_DATABASE;
  return CAREER_DATABASE.filter((c) => c.category === category);
}

export function searchCareers(query: string): CareerItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return CAREER_DATABASE;
  return CAREER_DATABASE.filter(
    (c) =>
      c.title.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.about.toLowerCase().includes(q) ||
      c.keySkills.some((s) => s.toLowerCase().includes(q)) ||
      c.occupations.some((o) => o.toLowerCase().includes(q))
  );
}
