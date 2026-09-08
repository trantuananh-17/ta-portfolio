"use client";

import { motion } from "motion/react";
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

import {
  fadeUp,
  HOVER_LIFT,
  HOVER_TRANSITION,
  stagger,
  VIEWPORT,
} from "@/lib/motion";

import { sectionContainer } from "../ui/container";

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

const sectionVariants = stagger(0.08);

const itemVariants = fadeUp;

const skillContainerVariants = stagger(0.04, 0.1);

const skillVariants = fadeUp;

const About = () => {
  return (
    <section id="about" className="relative px-4 pt-10 pb-24 lg:py-24">
      <motion.div
        className={sectionContainer}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
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
                whileHover={HOVER_LIFT}
                transition={HOVER_TRANSITION}
                className="group card-hover flex flex-col gap-4 overflow-hidden rounded-lg bg-card p-4 shadow-xs"
              >
                <div className="flex items-center gap-5">
                  {about.icon}

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
                  y: -3,
                }}
                transition={HOVER_TRANSITION}
                className="group flex flex-col items-center gap-2 rounded-md p-3 text-center"
              >
                {skill.icon}

                <p className="text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
