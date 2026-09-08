export const projects = [
  {
    id: 1,
    title: "Ragenta AI",
    description:
      "A multi-tenant AI SaaS platform that combines RAG over private knowledge bases with configurable AI agents. Includes workspace-based access control, credit and token accounting, and Stripe billing.",
    technologies: [
      "Node.js",
      "Next.js",
      "Hono",
      "Better Auth",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    image:
      "https://shoes-ecommerce.s3.ap-southeast-1.amazonaws.com/images/Screenshot+2026-09-08+095950.png",
    demoUrl: "https://staging.ragenta.cloud/en",
    githubUrl: "https://github.com/trantuananh-17/ragenta-landing-page",
  },
  {
    id: 2,
    title: "E-commerce Microservices",
    description:
      "The project separates core features such as authentication, product management, orders, payments, and notifications into independent services, improving maintainability, scalability, and deployment flexibility.",
    technologies: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "Docker",
      "MongoDB",
      "Kafka",
    ],
    image:
      "https://shoes-ecommerce.s3.ap-southeast-1.amazonaws.com/images/Screenshot+2026-07-22+162742.png",
    demoUrl: "https://anhtt-stationery.store/vi",
    githubUrl: "https://github.com/trantuananh-17/stationery-be",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website designed to showcase my projects, technical skills, and development experience.",
    technologies: [
      "TypeScript",
      "React.js",
      "Tailwind CSS V4",
      "Vite",
      "Motion",
    ],
    image:
      "https://shoes-ecommerce.s3.ap-southeast-1.amazonaws.com/images/Screenshot+2026-07-22+161531.png",
    demoUrl: "https://portfolio.tranhtuananh-anhtt.site",
    githubUrl: "https://github.com/trantuananh-17/ta-portfolio",
  },

  {
    id: 4,
    title: "Backend Job Portal",
    description:
      "A RESTful backend system for a job recruitment platform that allows employers to manage job postings and candidates to search and apply for positions.",
    technologies: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "JWT",
    ],
    image:
      "https://shoes-ecommerce.s3.ap-southeast-1.amazonaws.com/images/job_prj.png",
    demoUrl: "",
    githubUrl: "https://github.com/trantuananh-17/Job-Portal",
  },
] as const;
