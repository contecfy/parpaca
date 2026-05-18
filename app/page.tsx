import AboutSection from "@/components/sections/About";
import BottomCTA from "@/components/sections/Bottom-CTA";
import Collaboration from "@/components/sections/Collaboration";
import Hero from "@/components/sections/Hero";
import KeyFoucs from "@/components/sections/KeyFocuses";
import TeamSection from "@/components/sections/Team";
import Whatwedo from "@/components/sections/What-we-do";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutSection />
      <Whatwedo />
      <KeyFoucs />
      <Collaboration />
      <TeamSection />
      <BottomCTA />
    </div>
  );
}
