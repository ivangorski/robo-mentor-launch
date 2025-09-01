import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroTech from "@/assets/hero-tech.jpg";

const Hero = () => {
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
            <div className="aspect-video bg-gradient-to-br from-black/40 to-black/60 rounded-xl flex items-center justify-center relative overflow-hidden">
              {/* Video placeholder - replace with actual video */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-tech-blue/20"></div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto cursor-pointer hover:bg-white/30 transition-all duration-300 hover:scale-110">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white font-semibold text-lg mb-2">
                  🎬 Assista a Demonstração Completa
                </p>
                <p className="text-white/80 text-sm">
                  Veja como criar seu primeiro robô em menos de 10 minutos
                </p>
              </div>
              
              {/* If you have an actual video, replace the above with: */}
              {/* 
              <video 
                className="w-full h-full object-cover rounded-xl" 
                poster="path-to-your-thumbnail.jpg"
                controls
              >
                <source src="path-to-your-video.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              */}
              
              {/* Or for embedded video (YouTube, Vimeo, etc): */}
              {/* 
              <iframe 
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="PANTECH Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              */}
            </div>
          </div>
          <p className="text-center text-white/70 text-sm mt-3">
            ⏱️ 8 minutos que podem mudar sua vida financeira para sempre
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="xl" className="min-w-64">
            🎯 Quero Começar Agora
          </Button>
          <Button variant="outline" size="xl" className="min-w-64 border-white/30 text-white hover:bg-white/10">
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
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl animate-pulse"></div>
    </section>
  );
};

export default Hero;