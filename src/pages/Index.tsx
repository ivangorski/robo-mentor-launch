import { useState } from "react";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatsAppDemo from "@/components/WhatsAppDemo";
import Solution from "@/components/Solution";
import Objections from "@/components/Objections";
import CTA from "@/components/CTA";
import TimeLockOverlay from "@/components/TimeLockOverlay";
import { useTimeLock } from "@/hooks/useTimeLock";

const Index = () => {
  const [timerStarted, setTimerStarted] = useState(false);
  const { isUnlocked } = useTimeLock(10);

  const handleTimerStart = () => {
    setTimerStarted(true);
  };

  return (
    <div className="min-h-screen relative">
      <Hero onTimerStart={handleTimerStart} />
      
      {/* Content that gets locked */}
      <div className={`${!isUnlocked && timerStarted ? 'pointer-events-none select-none opacity-30' : ''} transition-all duration-500`}>
        <Problem />
        <WhatsAppDemo />
        <Solution />
        <Objections />
        <CTA />
      </div>
      
      {/* Time lock overlay */}
      <TimeLockOverlay isActive={timerStarted} />
    </div>
  );
};

export default Index;
