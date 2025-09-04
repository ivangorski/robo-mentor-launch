import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import heroTech from "@/assets/hero-tech.jpg";

const Hero = ({ onVideoStart, showCTA = false }: { onVideoStart: () => void; showCTA?: boolean }) => {
  const handlePlayClick = () => {
    onVideoStart();
  };

  useEffect(() => {
    // Load the video player script
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/fdff6f2a-ce9b-408f-9a35-7fddc1c9d4c5/players/68b70cecf062462f922f8aaa/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
        style={{ backgroundImage: `url(${heroTech})` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
        <Badge className="mb-6 text-sm font-medium bg-white/20 text-white border-white/30">
          🚀 Programa de Aceleração em Novas Tecnologias
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transforme Sua Carreira com
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-glow">
            Robôs de IA para WhatsApp
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
          Aprenda a criar e comercializar chatbots inteligentes que vendem 24/7, 
          mesmo enquanto você dorme. Uma profissão do futuro, disponível hoje.
        </p>
        
        {/* Video Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl p-2 shadow-glow">
            <div className="aspect-video rounded-xl overflow-hidden" onClick={handlePlayClick}>
              <div 
                dangerouslySetInnerHTML={{
                  __html: '<vturb-smartplayer id="vid-68b70cecf062462f922f8aaa" style="display: block; margin: 0 auto; width: 100%; height: 100%;"></vturb-smartplayer>'
                }}
              />
            </div>
          </div>
          <p className="text-center text-white/70 text-sm mt-3">
            ⏱️ Apresentação exclusiva que pode mudar sua vida financeira
          </p>
        </div>
        
        {showCTA && (
          <div className="animate-fade-in">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                variant="cta" 
                size="xl" 
                className="min-w-64"
                onClick={() => {
                  const ctaSection = document.getElementById('cta-section');
                  ctaSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                🎯 Quero Começar Agora
              </Button>
              <Button 
                variant="secondary" 
                size="xl" 
                className="min-w-64 bg-white/20 text-white border-white/30 hover:bg-white/30 hover:text-white backdrop-blur-sm"
                onClick={() => {
                  const whatsappSection = document.getElementById('whatsapp-demo');
                  whatsappSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                📱 Ver Demonstração
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Sem experiência necessária
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Suporte 24/7
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Garantia de 30 dias
              </div>
            </div>
          </div>
        )}
        
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl animate-pulse"></div>
    </section>
  );
};

export default Hero;