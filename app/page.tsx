import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Project from "@/components/sections/Project";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <Container size="2xl" className="p-0 ">
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </Container>
  );
}
