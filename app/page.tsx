import { Header } from "@/components/layout/Header";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <Container size="2xl" className="p-0 ">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </Container>
  );
}
