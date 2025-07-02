import HeroSection from "@/components/HeroSection";
import LatestNews from "@/components/LatestNews";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="container mx-auto p-4">
        <LatestNews />
      </div>
    </div>
  );
}
