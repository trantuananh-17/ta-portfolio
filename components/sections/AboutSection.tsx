"use client";

import { motion, type Variants } from "motion/react";
import { CircleUserRound, Fingerprint, Rocket } from "lucide-react";
import {
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiExpress } from "react-icons/si";

const abouts = [
  {
    id: 1,
    icon: <CircleUserRound size={30} className="text-primary" />,
    title: "Who Am I?",
    description:
      "I am a Software Engineer and highly motivated Web Developer with solid knowledge in software development.",
  },
  {
    id: 2,
    icon: <Rocket size={30} className="text-primary" />,
    title: "My Objective",
    description:
      "My goal is to continue learning and applying my current knowledge to gain experience in various areas such as Front-end and Back-end. I am passionate about creating elegant solutions for complex problems.",
  },
  {
    id: 3,
    icon: <Fingerprint size={30} className="text-primary" />,
    title: "My Profile",
    description:
      "I am characterized by my ability to quickly adapt to new work environments and technologies, my attention to detail, and my commitment to delivering high-quality products.",
  },
];

const skills = [
  {
    id: 1,
    icon: <RiJavascriptFill size={30} className="text-yellow-400" />,
    name: "JavaScript",
  },
  {
    id: 2,
    icon: <BiLogoTypescript size={30} className="text-blue-400" />,
    name: "TypeScript",
  },
  {
    id: 3,
    icon: <FaDocker size={30} className="text-blue-400" />,
    name: "Docker",
  },
  {
    id: 4,
    icon: <FaNodeJs size={30} className="text-green-400" />,
    name: "Node.js",
  },
  {
    id: 5,
    icon: <RiTailwindCssFill size={30} className="text-blue-400" />,
    name: "Tailwind",
  },
  {
    id: 6,
    icon: <FaReact size={30} className="text-blue-400" />,
    name: "React.js",
  },
  {
    id: 7,
    icon: <SiExpress size={30} className="text-foreground" />,
    name: "Express.js",
  },
  {
    id: 8,
    icon: <RiNextjsFill size={30} className="text-foreground" />,
    name: "Next.js",
  },
  {
    id: 9,
    icon: <BiLogoPostgresql size={30} className="text-blue-400" />,
    name: "PostgreSQL",
  },
  {
    id: 10,
    icon: <BiLogoMongodb size={30} className="text-green-400" />,
    name: "MongoDB",
  },
];

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
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
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

const skillContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
};

const skillVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="relative px-4 pt-10 pb-24 lg:py-24">
      <motion.div
        className="container mx-auto sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
      >
        <motion.div variants={itemVariants} className="flex flex-col md:gap-5">
          <h2 className="mb-4 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
            <span className="text-primary">About </span> Me!
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-muted-foreground">
            Here’s a showcase of who I am — a blend of my background, skills,
            and experiences that shape the way I create and solve problems.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div
            variants={sectionVariants}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {abouts.map((about) => (
              <motion.div
                key={about.id}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group card-hover flex flex-col gap-4 overflow-hidden rounded-lg bg-card p-4 shadow-xs"
              >
                <div className="flex items-center gap-5">
                  <motion.span
                    whileHover={{
                      rotate: 8,
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {about.icon}
                  </motion.span>

                  <p className="text-md font-bold text-primary">
                    {about.title}
                  </p>
                </div>

                <p className="text-left text-sm text-muted-foreground">
                  {about.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={skillContainerVariants}
            className="grid grid-cols-2 rounded-lg bg-card sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={skillVariants}
                whileHover={{
                  y: -5,
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="group flex flex-col items-center gap-2 rounded-md p-3 text-center"
              >
                <motion.div
                  whileHover={{
                    rotate: [0, -8, 8, 0],
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  {skill.icon}
                </motion.div>

                <p className="text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
