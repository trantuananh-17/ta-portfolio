"use client";
import { motion, type Variants } from "motion/react";

const experiences = [
  {
    period: "03/2026 — 06/2026",
    role: "Full-stack Developer",
    company: "Global AI",
    description:
      "Developed frontend and backend features for TradeWize, including dashboards, APIs, user flows, and data processing. ",
    technologies: [
      "TypeScript",
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Git",
    ],
    current: true,
  },
  {
    period: "11/2025 — 01/2026",
    role: "Node.js Intern",
    company: "Avada Group",
    description:
      "Built three Shopify demo applications using Koa.js, React.js, Firebase, Polaris, and Liquid. Worked with authentication, webhooks, APIs, Cloud Functions, and event-driven workflows.",
    technologies: [
      "Node.js",
      "Koa.js",
      "React.js",
      "Shopify",
      "Firebase",
      "Liquid",
    ],
    current: false,
  },
];

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const experienceVariants: Variants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction * 60,
    y: 20,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const technologyContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.08,
    },
  },
};

const technologyVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-4 pt-10 pb-24 lg:py-24"
    >
      <div className="container mx-auto sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:gap-5"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.4,
          }}
        >
          <h2 className="mb-4 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
            <span className="text-primary">Experience </span>
            That
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-muted-foreground">
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            className="timeline-glow absolute top-0 bottom-0 left-0 w-[2px] origin-top bg-gradient-to-b from-primary/70 via-primary/30 to-transparent shadow-[0_0_25px_rgba(32,178,166,0.8)] md:left-1/2 md:-translate-x-1/2"
            initial={{
              scaleY: 0,
              opacity: 0,
            }}
            whileInView={{
              scaleY: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const direction = idx % 2 === 0 ? -1 : 1;

              return (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  custom={direction}
                  variants={experienceVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.25,
                    margin: "0px 0px -80px 0px",
                  }}
                  className="relative grid gap-8 md:grid-cols-2"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute top-0 left-0 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2"
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.8,
                    }}
                    transition={{
                      delay: 0.15,
                      type: "spring",
                      stiffness: 350,
                      damping: 18,
                    }}
                  >
                    {exp.current && (
                      <>
                        <motion.span
                          className="absolute inset-0 rounded-full bg-primary"
                          animate={{
                            scale: [1, 2.4],
                            opacity: [0.7, 0],
                          }}
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />

                        <motion.span
                          className="absolute inset-0 rounded-full bg-primary"
                          animate={{
                            boxShadow: [
                              "0 0 0px hsl(var(--primary))",
                              "0 0 14px hsl(var(--primary))",
                              "0 0 0px hsl(var(--primary))",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </>
                    )}
                  </motion.div>

                  {/* Content */}
                  <div
                    className={`pl-8 md:pl-0 ${
                      idx % 2 === 0
                        ? "md:pr-16 md:text-right"
                        : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <motion.div
                      className="glass rounded-2xl border border-primary/30 p-6 transition-colors duration-300 hover:border-primary/60"
                      whileHover={{
                        y: -6,
                        scale: 1.015,
                      }}
                      whileTap={{
                        scale: 0.99,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 22,
                      }}
                    >
                      <motion.span
                        className="text-sm font-medium text-primary"
                        initial={{
                          opacity: 0,
                        }}
                        whileInView={{
                          opacity: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: 0.2,
                          duration: 0.4,
                        }}
                      >
                        {exp.period}
                      </motion.span>

                      <h3 className="mt-2 text-xl font-semibold">{exp.role}</h3>

                      <p className="text-muted-foreground">{exp.company}</p>

                      <p className="mt-4 text-sm text-muted-foreground">
                        {exp.description}
                      </p>

                      <motion.div
                        className={`mt-4 flex flex-wrap gap-2 ${
                          idx % 2 === 0 ? "md:justify-end" : ""
                        }`}
                        variants={technologyContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                          once: true,
                          amount: 0.5,
                        }}
                      >
                        {exp.technologies.map((tech) => (
                          <motion.span
                            key={`${exp.company}-${tech}`}
                            variants={technologyVariants}
                            whileHover={{
                              y: -2,
                              scale: 1.05,
                            }}
                            className="text-foreground border-border bg-primary/20 rounded-full border px-2 py-1 text-xs font-medium"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
