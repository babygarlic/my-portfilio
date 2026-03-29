import ParticlesBackground from "@/components/Animaions/ParticlesBackground"; 
import SmoothScroll from "@/components/Animaions/SmoothScroll";
import HomeSection from "@/components/Sections/HomeSection";
import ProjectSection from "@/components/Sections/ProjectSecrion";
import ServiceSection from "@/components/Sections/ServiceSection";
import AboutSection from "@/components/Sections/AboutSection";

export default function Home() {
  return (
    <div className="space-y-20 w-full">
      <ParticlesBackground />
      {/* use smooth scroll */}
      <SmoothScroll>
      {/* HOME */}
      <HomeSection/>
      {/* PROJECTS */}
      <ProjectSection />
      {/* SERVICES */}
      <ServiceSection />
      {/* ABOUT */}
      <AboutSection />
      {/* CONTACT */}
      </SmoothScroll>
      <ParticlesBackground />
    </div>
  )
}