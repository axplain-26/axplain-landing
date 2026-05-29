import Hero from "@/components/sections/Hero";
import Needs from "@/components/sections/Needs";
import Features from "@/components/sections/Features";
import Lifecycle from "@/components/sections/Lifecycle";
import Legal from "@/components/sections/Legal";
import Security from "@/components/sections/Security";
import TrustBanner from "@/components/sections/TrustBanner";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Needs />
      <Features />
      <Lifecycle />
      <Legal />
      <Security />
      <TrustBanner />
      <CTA />
    </div>
  );
}
