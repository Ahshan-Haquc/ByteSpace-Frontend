import { BrandMarquee } from "@/components/landingPage/BrandMarquee";
import { HeroSection } from "@/components/landingPage/HeroSection";
import { TopBar } from "@/layout/TopBar";

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen">
      <HeroSection />
      <BrandMarquee/>
    </div>
  );
}
