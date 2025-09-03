import { useState } from "react";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatsAppDemo from "@/components/WhatsAppDemo";
import Solution from "@/components/Solution";
import Objections from "@/components/Objections";
import CTA from "@/components/CTA";

const Index = () => {
  const [videoStarted, setVideoStarted] = useState(false);

  const handleVideoStart = () => {
    setVideoStarted(true);
  };

  return (
    <div className="min-h-screen">
      <Hero onVideoStart={handleVideoStart} showCTA={true} />
      <Problem />
      <WhatsAppDemo />
      <Solution />
      <Objections />
      <CTA />
    </div>
  );
};

export default Index;
