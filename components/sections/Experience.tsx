"use client";
import { motion } from "motion/react";

import {
  DURATION,
  EASE,
  fadeIn,
  fadeUp,
  HOVER_LIFT,
  HOVER_TRANSITION,
  stagger,
  VIEWPORT,
} from "@/lib/motion";

import { sectionContainer } from "../ui/container";

const experiences = [
  {
    period: "06/2026 — 09/2026",
    role: "Software Engineer",
    company: "NYB AI",
    description:
      "Delivered the promo-code and credit feature end to end across admin APIs, the admin console and the user redeem flow. Built timezone-aware webinar scheduling, hardened Google One Tap sign-in and sign-in analytics, and improved onboarding and chat UX.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "PostHog",
      "Docker",
    ],
    current: true,
  },
  {
    period: "12/2025 — 06/2026",
    role: "Fullstack Developer",
    company: "Rocket Global",
    description:
      "Worked on TradeWize, a US-based educational trading simulator. Developed frontend and backend features for web and app modules, including APIs, dashboards, user flows and data processing, and refactored existing modules to improve stability.",
    technologies: [
      "TypeScript",
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Git",
    ],
    current: false,
  },
  {
    period: "09/2025 — 11/2025",
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

const headerVariants = fadeUp;

const experienceVariants = fadeUp;

const technologyContainerVariants = stagger(0.04, 0.15);

const technologyVariants = fadeIn;

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-4 pt-10 pb-24 lg:py-24"
    >
      <div className={sectionContainer}>
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:gap-5"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <h2 className="mb-4 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
            My <span className="text-primary">Experience</span>
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-muted-foreground">
            A timeline of my professional journey, from a first internship to
            shipping production features across the full stack.
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
            viewport={VIEWPORT}
            transition={{
              duration: 1.4,
              ease: EASE,
            }}
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              return (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  variants={experienceVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  className="relative grid gap-8 md:grid-cols-2"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute top-0 left-0 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2"
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={VIEWPORT}
                    transition={{
                      delay: 0.1,
                      duration: DURATION.base,
                      ease: EASE,
                    }}
                  >
                    {exp.current && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-primary"
                        animate={{
                          scale: [1, 1.9],
                          opacity: [0.5, 0],
                        }}
                        transition={{
                          duration: 2.6,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
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
                      whileHover={HOVER_LIFT}
                      transition={HOVER_TRANSITION}
                    >
                      <span className="text-sm font-medium text-primary">
                        {exp.period}
                      </span>

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
                        viewport={VIEWPORT}
                      >
                        {exp.technologies.map((tech) => (
                          <motion.span
                            key={`${exp.company}-${tech}`}
                            variants={technologyVariants}
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
