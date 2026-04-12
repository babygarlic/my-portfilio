import ParticlesBackground from "@/components/Animaions/ParticlesBackground"; 
import SmoothScroll from "@/components/Animaions/SmoothScroll";
import HomeSection from "@/components/Sections/HomeSection";
import ProjectSection from "@/components/Sections/ProjectSection";
import ServiceSection from "@/components/Sections/ServiceSection";
import AboutSection from "@/components/Sections/AboutSection";
import TechStackSection from "@/components/Sections/TechStackSection";
import ContactSection from "@/components/Sections/ContactSection";
import TimeLine from "@/components/Sections/TimeLine";

export default function Home() {
  return (
    <div className="space-y-20 w-full">
      <ParticlesBackground turnOn={false} />
      {/* use smooth scroll */}
      <SmoothScroll>
      {/* HOME */}
      <HomeSection/>
      {/* TECH STACK */}
      <TechStackSection />
      {/* PROJECTS */}
      <ProjectSection />
      {/* SERVICES */}
      <ServiceSection />
      {/* ABOUT */}
      <AboutSection />
      {/* TIMELINE */}
      <TimeLine />
      {/* CONTACT */}
      <ContactSection />
      </SmoothScroll>
      <ParticlesBackground />
    </div>
  )
}