export const projects = [
  {
    id: 1,
    title: "E-commerce Microservices",
    description:
      "The project separates core features such as authentication, product management, orders, payments, and notifications into independent services, improving maintainability, scalability, and deployment flexibility.",
    technologies: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "Docker",
      "MongoDB",
      "RabbitMQ",
    ],
    image:
      "https://shoes-ecommerce.s3.ap-southeast-1.amazonaws.com/images/Screenshot+2026-07-22+162742.png",
    demoUrl: "https://anhtt-stationery.store/vi",
    githubUrl: "https://github.com/trantuananh-17/stationery-be",
  },
  {
    id: 2,
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
    id: 3,
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
