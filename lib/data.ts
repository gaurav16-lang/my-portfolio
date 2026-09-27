export const profile = {
  name: "Gaurav Maihuria",
  title: "Senior Software Engineer",
  subtitle: "Full-Stack Developer — MERN, NestJS, AWS",
  location: "Bangalore, Karnataka",
  phone: "+91 8081530413",
  email: "maihuriagaurav16@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/gaurav-maihuria",
    github: "https://github.com/gaurav16-lang",
    invarium: "https://app.invarium.dev",
    site: "https://gauravmaihuria.dorik.io",
  },
  summary:
    "Highly motivated and results-oriented full-stack web developer with expertise in the MERN stack, NestJS, and cloud services (AWS). Proven ability to design, develop, and optimize scalable web applications — including leading AI-assisted legacy migrations and independently building products end-to-end, from architecture to production.",
  resumeFile: "/Gaurav_Maihuria_Resume.pdf",
};

export const skillGroups = [
  {
    label: "Languages & Frameworks",
    items: ["TypeScript", "JavaScript", "React.js", "Node.js", "NestJS", "Express.js", "Redux", "React-Router-DOM"],
  },
  {
    label: "Data & Infra",
    items: ["MongoDB", "PostgreSQL", "Prisma", "Redis", "BullMQ", "SQL", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    label: "AWS",
    items: ["EC2", "Lambda", "Auto-Scaling", "ELB", "S3", "EBS", "Cognito", "IAM", "CloudWatch", "Route 53"],
  },
  {
    label: "Practices",
    items: [
      "RESTful APIs",
      "Microservices",
      "System Design (HLD + LLD)",
      "React Testing Library",
      "AI-agent-assisted development",
      "Leadership & Mentoring",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "CrimsonLogic India Pvt. Ltd.",
    location: "Bangalore",
    period: "May 2026 — Present",
    current: true,
    points: [
      "Working on the SmartGWT-to-React migration for CrimsonLogic's trade facilitation and maritime port services platform, using AI agents to accelerate development and increase productivity.",
      "Successfully migrated two applications, FTZ (Free Trade Zone) and EMS, from SmartGWT to a modern React-based architecture.",
      "Worked across a config-driven, ERA → Core → EMS layer architecture, debugging backend and DataSource issues to ensure a clean migration.",
      "Used Claude Code, Cursor, and Playwright MCP for AI-assisted automation testing, streamlining QA workflows across the migration.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-employed",
    location: "Remote",
    period: "Feb 2026 — May 2026",
    points: [
      "Built Invarium.ai end-to-end, from coding to production — an independent AI agent testing and evaluation platform featuring agent intelligence graphs, a scenario builder, test runner, evaluator, MCP server integration, and a results dashboard.",
      "Partnered with ContentLens.ai to enhance their existing application, adding new features and improving overall functionality.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Tricog Health India",
    location: "Bangalore",
    period: "Mar 2022 — Feb 2026",
    points: [
      "Architected and developed robust RESTful APIs to enable seamless communication between frontend and backend systems.",
      "Integrated critical Omron APIs to retrieve real-time health data from blood pressure monitoring devices and Apple Watch, ensuring accurate and reliable data synchronization.",
      "Engineered a comprehensive notification service, delivering timely push notifications, SMS, and email for doctors, care teams, and patients.",
      "Spearheaded the migration of the Atlas Admin Portal (TLAS) from Angular to the MERN stack, significantly enhancing dashboard performance, maintainability, and scalability.",
      "Led the end-to-end development of the Tricare platform from scratch, encompassing system architecture design, database schema modeling, and comprehensive feature implementation.",
      "Developed and deployed a log-tracer microservice, capturing and tracking audit logs to improve system observability and ensure compliance.",
      "Designed and implemented a dynamic report builder, generating patient reports to enhance data visibility and support clinical decision-making.",
      "Authored a vital-converter library to standardize and efficiently process patient vitals across the application.",
      "Integrated secure Agora APIs, enabling one-click video calling and recording for clients, streamlining access through the UI.",
      "Implemented advanced OCR functionality to extract structured data from PDFs and images, including API development, caching strategies, and UI integration.",
      "Integrated Exotel APIs to facilitate one-click calling and recording between patients and care teams directly within the platform.",
      "Architected and deployed secure authentication and authorization flows leveraging AWS Cognito, ensuring robust access control and role-based permissions for the TCC platform.",
      "Optimized backend APIs and system architecture, significantly reducing response latency and improving performance and scalability under increasing user load.",
      "Mentored and trained junior team members, enhancing overall team efficiency and code quality through structured code reviews and technical sessions.",
    ],
  },
];

export type Project = {
  name: string;
  role: string;
  tech: string[];
  description: string;
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Invarium.ai",
    role: "Independent Builder",
    tech: ["React", "NestJS", "PostgreSQL", "Prisma", "Redis", "BullMQ", "AWS"],
    description:
      "An AI agent testing and evaluation platform built independently end-to-end (coding to production) — agent intelligence graphs, audit overlays, React Flow dashboards, an MCP server with VS Code/Cursor integration, and Google/GitHub OAuth built from scratch.",
    link: "https://app.invarium.dev",
    featured: true,
  },
  {
    name: "Keebo Health",
    role: "Software Engineer",
    tech: ["NestJS", "React.js"],
    description:
      "An advanced connected cardiac care platform designed to transform how heart conditions are monitored and managed remotely, developed through a collaboration between OMRON Healthcare and Tricog Health.",
  },
  {
    name: "Care-Platform",
    role: "Software Engineer",
    tech: ["React.js"],
    description:
      "A care platform that turns cardiac data and AI insights into continuous patient care, used by doctors and care teams to monitor patients remotely, review alerts, take timely clinical actions, and coordinate follow-up.",
  },
  {
    name: "SaaS Admin",
    role: "Software Engineer",
    tech: ["NestJS", "React.js"],
    description:
      "A SaaS admin to centrally manage multiple hospitals, users, and devices, handle configs without code changes, ensure data isolation & compliance, and let ops teams run daily workflows without developer dependency — all while scaling the product safely.",
  },
];

export const achievements = [
  "Migrated SmartGWT to React using AI agents, successfully delivering the FTZ and EMS application migrations at CrimsonLogic.",
  "Optimized backend APIs and system architecture, significantly reducing response latency and improving performance and scalability under increasing user load.",
  "Independently built and developed Invarium.ai end-to-end, from coding to production.",
  "Used Claude Code, Cursor, and Playwright MCP for AI-assisted automation testing at CrimsonLogic.",
];

export const education = [
  {
    title: "Full-Stack Development Certificate",
    place: "Masai School, Bangalore",
    period: "Jun 2021 — Mar 2022",
  },
  {
    title: "Bachelor of Engineering in Computer Science & Engineering",
    place: "RGPV University, Bhopal",
    period: "Aug 2016 — Dec 2020",
  },
  {
    title: "Intermediate (10+2)",
    place: "Kendriya Vidyalaya No-3, Jhansi",
    period: "Jun 2014 — Jun 2015",
  },
];

export const certifications = ["Namaste React — Namaste Dev (2025)"];

export const languages = ["English", "Hindi"];
