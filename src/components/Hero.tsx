import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroTech from "@/assets/hero-tech.jpg";

const Hero = ({ onVideoStart, showCTA = false }: { onVideoStart: () => void; showCTA?: boolean }) => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-10"
        style={{ backgroundImage: `url(${heroTech})` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <Badge className="mb-6 text-sm font-medium bg-primary text-primary-foreground">
          🚀 Mentoria Robot S.A.
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
          Transforme sua carreira
          <span className="block text-transparent bg-clip-text bg-gradient-primary">
            dominando projetos de IA
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Aprenda a construir robôs que trabalham 24/7, mesmo enquanto você dorme. A profissão do futuro, disponível hoje.
        </p>
        
        {/* Video Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="relative bg-card border rounded-2xl p-2 shadow-elegant">
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/LmiEsSk12JA?rel=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <p className="text-center text-muted-foreground text-sm mt-3">
            ⏱️ Apresentação exclusiva que pode mudar sua vida financeira
          </p>
        </div>
        
        {showCTA && (
          <div className="animate-fade-in">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                variant="outline" 
                size="xl" 
                className="min-w-64"
                onClick={() => {
                  const whatsappSection = document.getElementById('whatsapp-demo');
                  whatsappSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                📱 Exemplo de uso
              </Button>
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
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Sem experiência necessária
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Suporte 24/7
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Garantia de 30 dias
              </div>
            </div>
          </div>
        )}
        
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
    </section>
  );
};

export default Hero;