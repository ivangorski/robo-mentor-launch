import { useState } from "react";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatsAppDemo from "@/components/WhatsAppDemo";
import Solution from "@/components/Solution";
import Objections from "@/components/Objections";
import CTA from "@/components/CTA";
import { useTimeLock } from "@/hooks/useTimeLock";

const Index = () => {
  const [videoStarted, setVideoStarted] = useState(false);
  const { isUnlocked, startTimer } = useTimeLock(10);

  const handleVideoStart = () => {
    setVideoStarted(true);
    startTimer();
  };

  return (
    <div className="min-h-screen">
      {/* Hero sempre visível */}
      <Hero onVideoStart={handleVideoStart} />
      
      {/* Resto do conteúdo só aparece após 10 minutos */}
      {isUnlocked && (
        <div className="animate-fade-in">
          <Problem />
          <WhatsAppDemo />
          <Solution />
          <Objections />
          <CTA />
        </div>
      )}
    </div>
  );
};

export default Index;
