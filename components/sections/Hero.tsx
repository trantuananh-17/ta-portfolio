"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiFacebookCircleFill } from "react-icons/ri";

import AVATAR from "@/assets/imgs/avatar_bg.png";
import ImageIcon from "@/constants/imageIcon";

import OrbitBotLeft from "../ui/Orbit/OrbitBotLeft";
import OrbitBottom from "../ui/Orbit/OrbitBottom";
import OrbitLeft from "../ui/Orbit/OrbitLeft";
import OrbitRight from "../ui/Orbit/OrbitRight";
import OrbitTop from "../ui/Orbit/OrbitTop";
import OrbitTopLeft from "../ui/Orbit/OrbitTopLeft";
import { Button } from "../ui/button";

const contentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.16,
    },
  },
};

const headingVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const paragraphVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(3px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

const socialVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const orbitContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.15,
    },
  },
};

const avatarVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.4,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      delay: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const orbitItemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.4,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const description =
  "I'm a software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React and Express.js.";

const Hero = () => {
  return (
    <section
      id="hero"
      className="
        container relative mx-auto flex min-h-screen flex-col
        items-center justify-center gap-8 overflow-x-clip px-4 py-24
        sm:gap-10 sm:px-8
        md:px-12
        lg:flex-row lg:justify-between lg:gap-12 lg:px-16
        xl:gap-20 xl:px-24
        2xl:px-40
      "
    >
      {/* Left content */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="
    text-foreground flex w-full max-w-2xl flex-col
    items-center gap-4 text-center
    lg:w-[58%] lg:max-w-none lg:items-start lg:text-left
  "
      >
        <motion.h1
          variants={headingVariants}
          className="
            text-[30px] leading-tight font-semibold tracking-tighter
            sm:text-[36px]
            lg:text-[40px]
            xl:text-[54px]
            2xl:text-[60px]
            whitespace-nowrap
          "
        >
          <motion.span
            variants={itemVariants}
            className="mr-[0.25em] inline-block"
          >
            Hi, I&apos;m
          </motion.span>

          <motion.span
            variants={itemVariants}
            className="text-glow text-primary mr-[0.25em] inline-block"
          >
            Tran
          </motion.span>

          <motion.span
            variants={itemVariants}
            className="text-glow text-primary mr-[0.25em] inline-block"
          >
            Tuan
          </motion.span>

          <motion.span
            variants={itemVariants}
            className="text-glow text-primary inline-block"
          >
            Anh
          </motion.span>
        </motion.h1>

        <motion.p
          variants={paragraphVariants}
          className="
            max-w-xl text-center text-[16px] leading-[22px]
            md:text-[18px] md:leading-[26px]
            lg:text-left
            xl:max-w-2xl xl:text-[20px] xl:leading-[28px]
          "
        >
          {description.split(" ").map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              variants={wordVariants}
              className="mr-[0.25em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="
            flex w-full flex-col justify-center gap-4
            sm:w-auto sm:flex-row
            lg:justify-start
          "
        >
          <Button size="lg" className="w-full rounded-2xl px-9 py-6 sm:w-auto">
            <motion.a
              href="/cv/cv_tran_tuan_anh.pdf"
              download="Tran-Tuan-Anh-CV.pdf"
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              Download CV
            </motion.a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full rounded-2xl px-9 py-6 sm:w-auto"
          >
            <motion.a
              href="/#contact"
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              Contact Me!
            </motion.a>
          </Button>
        </motion.div>

        <motion.div
          variants={contentVariants}
          className="flex w-full justify-center gap-4 lg:justify-start"
        >
          <motion.a
            variants={socialVariants}
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="
              bg-background flex items-center justify-center
              rounded-full border border-gray-800 p-2
            "
            whileHover={{
              scale: 1.12,
              y: -3,
              boxShadow: "0 0 14px rgba(139, 92, 246, 0.6)",
            }}
            whileTap={{
              scale: 0.92,
            }}
          >
            <RiFacebookCircleFill className="text-foreground h-6 w-6" />
          </motion.a>

          <motion.a
            variants={socialVariants}
            href="https://www.linkedin.com/in/tu%E1%BA%A5n-anh-tr%E1%BA%A7n-260198424/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              bg-background flex items-center justify-center
              rounded-full border border-gray-800 p-2
            "
            whileHover={{
              scale: 1.12,
              y: -3,
              boxShadow: "0 0 14px rgba(139, 92, 246, 0.6)",
            }}
            whileTap={{
              scale: 0.92,
            }}
          >
            <FaLinkedin className="text-foreground h-6 w-6" />
          </motion.a>

          <motion.a
            variants={socialVariants}
            href="https://github.com/trantuananh-17"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              bg-background flex items-center justify-center
              rounded-full border border-gray-800 p-2
            "
            whileHover={{
              scale: 1.12,
              y: -3,
              boxShadow: "0 0 14px rgba(139, 92, 246, 0.6)",
            }}
            whileTap={{
              scale: 0.92,
            }}
          >
            <FaGithub className="text-foreground h-6 w-6" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right orbit */}
      <motion.div
        variants={orbitContainerVariants}
        initial="hidden"
        animate="visible"
        className="
    relative flex h-[300px] w-full shrink-0
    items-center justify-center
    sm:h-[360px]
    md:h-[420px]
    lg:h-[500px] lg:w-[42%]
  "
      >
        <div
          className="
            relative h-[350px] w-[650px] shrink-0 origin-center
            scale-[0.46]
            min-[400px]:scale-[0.52]
            sm:scale-[0.62]
            md:scale-[0.72]
            lg:scale-[0.76]
            xl:scale-[0.86]
            2xl:scale-[0.95]
          "
        >
          {/* Avatar */}
          <div
            className="
              absolute top-1/2 left-1/2 z-10
              h-[220px] w-[220px]
              -translate-x-1/2 -translate-y-1/2
            "
          >
            <motion.div
              variants={avatarVariants}
              className="
                border-border relative h-full w-full overflow-hidden
                rounded-full border-2 bg-transparent
              "
            >
              <Image
                src={AVATAR}
                alt="Avatar của Tran Tuan Anh"
                fill
                priority
                sizes="220px"
                className="object-cover object-[center_30%]"
              />
            </motion.div>
          </div>

          {/* Inner orbit */}
          <div
            className="
              absolute top-1/2 left-1/2 z-50
              h-[220px] w-[220px]
              -translate-x-1/2 -translate-y-1/2
            "
          >
            <motion.div variants={orbitItemVariants} className="h-full w-full">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  border-border relative h-full w-full
                  rounded-full border-2
                "
              >
                <OrbitTop icon={ImageIcon.JS} />
                <OrbitBottom icon={ImageIcon.TS} />
              </motion.div>
            </motion.div>
          </div>

          {/* Second orbit */}
          <div
            className="
              absolute top-1/2 left-1/2
              h-[180px] w-[330px]
              -translate-x-1/2 -translate-y-1/2 z-50
            "
          >
            <motion.div variants={orbitItemVariants} className="h-full w-full">
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  border-border relative h-full w-full
                  rounded-[75%] border
                "
              >
                <OrbitRight icon={ImageIcon.REACT} />
                <OrbitTopLeft icon={ImageIcon.TAILWIND} />
                <OrbitBotLeft icon={ImageIcon.NEXT} />
              </motion.div>
            </motion.div>
          </div>

          {/* Third orbit */}
          <div
            className="
              absolute top-1/2 left-1/2
              h-[260px] w-[450px]
              -translate-x-1/2 -translate-y-1/2 z-50
            "
          >
            <motion.div variants={orbitItemVariants} className="h-full w-full">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  border-border relative h-full w-full
                  rounded-[75%] border
                "
              >
                <OrbitLeft icon={ImageIcon.NODEJS} />
                <OrbitRight icon={ImageIcon.NEST} />
              </motion.div>
            </motion.div>
          </div>

          {/* Outer orbit */}
          <div
            className="
              absolute top-1/2 left-1/2
              h-[350px] w-[580px]
              -translate-x-1/2 -translate-y-1/2 z-50
            "
          >
            <motion.div variants={orbitItemVariants} className="h-full w-full">
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  border-border relative h-full w-full
                  rounded-[80%] border
                "
              >
                <OrbitRight icon={ImageIcon.POSTGRES} />
                <OrbitTopLeft icon={ImageIcon.DOCKER} />
                <OrbitBotLeft icon={ImageIcon.MONGOD} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
