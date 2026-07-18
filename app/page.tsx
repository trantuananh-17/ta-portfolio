import { Header } from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <Container size="2xl" className="p-0 ">
      <HeroSection />
    </Container>
  );
}
