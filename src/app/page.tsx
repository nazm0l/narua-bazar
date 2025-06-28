import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="container mx-auto p-8 h-96 bg-accent">
        <p>Section 2</p>
      </div>
    </div>
  );
}
