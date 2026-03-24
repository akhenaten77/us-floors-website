import Hero from "@/components/home/Hero";
import ExplodedSystem from "@/components/home/ExplodedSystem";
import ScrollStory from "@/components/home/ScrollStory";
import ProductHighlight from "@/components/home/ProductHighlight";
import TechSpecs from "@/components/home/TechSpecs";
import Applications from "@/components/home/Applications";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <ExplodedSystem />
      <ScrollStory />
      <ProductHighlight />
      <TechSpecs />
      <Applications />
      <ProjectShowcase />
      <CTA />
    </main>
  );
}
