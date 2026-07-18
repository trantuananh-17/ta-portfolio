export const projects = [
  {
    id: 1,
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
    image: "/projects/project_portfolio.png",
    demoUrl: "https://portfolio-tadev.vercel.app",
    githubUrl: "https://github.com/trantuananh-17/Portfolio",
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
      "RabbitMQ",
    ],
    image: "/projects/project_ecommerce.png",
    demoUrl: "",
    githubUrl: "",
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
    image: "/projects/project_job_portal.png",
    demoUrl: "",
    githubUrl: "",
  },
] as const;
