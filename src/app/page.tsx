import HeroSection from "@/components/HeroSection";
import LatestNews from "@/components/LatestNews";
import LatestShops from "@/components/LatestShops";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="bg-linear-to-r from-cyan-100/10 to-blue-200/30">
        <div className="container mx-auto p-4">
          <LatestNews />
          <LatestShops />
        </div>
      </div>
    </div>
  );
}
