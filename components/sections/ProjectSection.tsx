"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { ExternalLink } from "lucide-react";
import { LuGithub } from "react-icons/lu";

import { projects } from "@/data/projects";

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const projectsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const projectCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const technologyContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.25,
    },
  },
};

const technologyVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const ProjectSection = () => {
  return (
    <section id="projects" className="relative  px-4 py-10 lg:py-24">
      <div className="container mx-auto sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="flex flex-col md:gap-5"
        >
          <h2 className="mb-4 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
            My <span className="text-primary">Projects</span>
          </h2>

          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-sm">
            Here’s a showcase of my work — projects that reflect my passion for
            detail, efficiency, and crafting engaging digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={projectsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={projectCardVariants}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              className="group card-hover bg-card overflow-hidden rounded-lg shadow-xs"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </div>

              <div className="flex h-[calc(100%-12rem)] flex-col gap-4 p-4">
                <h3 className="mt-1 text-xl font-semibold">{project.title}</h3>

                <p className="text-muted-foreground flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-3">
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      whileHover={{
                        scale: 1.15,
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}

                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      whileHover={{
                        scale: 1.15,
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <LuGithub size={20} />
                    </motion.a>
                  )}
                </div>

                <motion.div
                  variants={technologyContainerVariants}
                  className="mb-2 flex flex-wrap gap-2"
                >
                  {project.technologies.map((technology) => (
                    <motion.span
                      key={`${project.title}-${technology}`}
                      variants={technologyVariants}
                      whileHover={{
                        y: -2,
                        scale: 1.05,
                      }}
                      className="text-foreground border-border bg-primary/20 rounded-full border px-2 py-1 text-xs font-medium"
                    >
                      {technology}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
