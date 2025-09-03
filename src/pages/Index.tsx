import { useState } from "react";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatsAppDemo from "@/components/WhatsAppDemo";
import Solution from "@/components/Solution";
import Objections from "@/components/Objections";
import CTA from "@/components/CTA";
import { useVideoCompletion } from "@/hooks/useVideoCompletion";

const Index = () => {
  const [videoStarted, setVideoStarted] = useState(false);
  const { isCompleted, startWatching, isWatching } = useVideoCompletion();

  const handleVideoStart = () => {
    setVideoStarted(true);
    startWatching();
  };

  return (
    <div className="min-h-screen">
      {/* Hero sempre visível */}
      <Hero onVideoStart={handleVideoStart} showCTA={isCompleted} isWatching={isWatching} />
      
      {/* Resto do conteúdo só aparece após assistir o vídeo completo */}
      {isCompleted && (
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
