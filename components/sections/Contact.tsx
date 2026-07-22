"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion, type Variants } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageSquareText,
  Send,
} from "lucide-react";
import { RiFacebookFill } from "react-icons/ri";
import { SiZalo } from "react-icons/si";

import Loading from "../ui/loading";

type ContactItem = {
  id: number;
  label: string;
  value: string;
  href?: string;
  icon: ReactNode;
};

const contactItems: ContactItem[] = [
  {
    id: 1,
    label: "Email",
    value: "trantuananh.anhh17@gmail.com",
    href: "mailto:anhkyohauik17@gmail.com",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    id: 2,
    label: "Zalo",
    value: "Tuấn Anh",
    href: "https://zalo.me/0918590630",
    icon: <SiZalo className="h-5 w-5" />,
  },
  {
    id: 3,
    label: "Facebook",
    value: "Tuấn Anh",
    href: "https://facebook.com/tanhkyo",
    icon: <RiFacebookFill className="h-5 w-5" />,
  },
  {
    id: 4,
    label: "Location",
    value: "Mễ Trì, Hà Nội",
    icon: <MapPin className="h-5 w-5" />,
  },
];

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const leftPanelVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const formVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const contactListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const contactItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    setIsLoading(true);
    setIsSent(false);

    setTimeout(() => {
      form.reset();
      setIsLoading(false);
      setIsSent(true);

      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative  overflow-hidden px-4 py-16 lg:py-24"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="relative container mx-auto sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl"
      >
        <motion.div
          variants={headerVariants}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact <span className="text-primary">Me!</span>
          </h2>

          <p className="text-muted-foreground mt-4 text-sm leading-6 sm:text-base">
            Have a project, opportunity, or idea in mind? Send me a message and
            I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-border  lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={leftPanelVariants}
            className="relative overflow-hidden bg-primary p-6 text-primary-foreground sm:p-8 lg:p-10"
          >
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full border border-primary-foreground/10" />
            <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full border border-primary-foreground/10" />

            <div className="relative">
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary-foreground/70 uppercase">
                Contact information
              </p>

              <motion.div
                variants={contactListVariants}
                className="mt-10 space-y-4"
              >
                {contactItems.map((item) => {
                  const content = (
                    <>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground">
                        {item.icon}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-primary-foreground/60">
                          {item.label}
                        </p>

                        <p className="mt-1 truncate text-sm font-medium text-primary-foreground">
                          {item.value}
                        </p>
                      </div>

                      {item.href && (
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-primary-foreground/50" />
                      )}
                    </>
                  );

                  return (
                    <motion.div key={item.id} variants={contactItemVariants}>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex items-center gap-4 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-4 transition-colors hover:bg-primary-foreground/10"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-4">
                          {content}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>

              <div className="mt-10 flex items-center gap-3 border-t border-primary-foreground/10 pt-6">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground opacity-40" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-primary-foreground" />
                </span>

                <p className="text-xs text-primary-foreground/70">
                  Available for new opportunities
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={formVariants}
            className="bg-card p-6 sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <p className="text-primary text-sm font-semibold">
                Send a message
              </p>

              <h3 className="mt-2 text-2xl font-bold text-foreground">
                Tell me about your idea
              </h3>

              <p className="text-muted-foreground mt-2 text-sm">
                Fill in the form below and I&apos;ll respond shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    disabled={isLoading}
                    placeholder="Tuấn Anh"
                    className="border-input bg-background placeholder:text-muted-foreground/60 focus:border-primary focus:ring-primary/20 h-12 w-full rounded-xl border px-4 text-sm outline-none transition focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    disabled={isLoading}
                    placeholder="you@example.com"
                    className="border-input bg-background placeholder:text-muted-foreground/60 focus:border-primary focus:ring-primary/20 h-12 w-full rounded-xl border px-4 text-sm outline-none transition focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-foreground"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  disabled={isLoading}
                  placeholder="Project collaboration"
                  className="border-input bg-background placeholder:text-muted-foreground/60 focus:border-primary focus:ring-primary/20 h-12 w-full rounded-xl border px-4 text-sm outline-none transition focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  disabled={isLoading}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  className="border-input bg-background placeholder:text-muted-foreground/60 focus:border-primary focus:ring-primary/20 w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {isSent && (
                <div
                  role="status"
                  className="border-primary/20 bg-primary/10 text-primary rounded-xl border px-4 py-3 text-sm"
                >
                  Your message has been sent successfully.
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="bg-primary text-primary-foreground hover:bg-primary/90 flex h-12 w-full items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? (
                  <Loading />
                ) : (
                  <>
                    Send message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="text-muted-foreground text-center text-xs">
                Your information will only be used to reply to your message.
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
