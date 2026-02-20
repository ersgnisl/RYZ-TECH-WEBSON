import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import ProcessSection from "@/components/home/ProcessSection";
import TeamPreview from "@/components/home/TeamPreview";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="divider" />
      <ServicesSection />
      <div className="divider" />
      <ProjectsPreview />
      <div className="divider" />
      <ProcessSection />
      <div className="divider" />
      <TeamPreview />
    </main>
  );
}
