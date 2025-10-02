import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { differenceInDays } from "date-fns";

const calculateRemainingSlots = () => {
  const today = new Date();
  const startDate = new Date("2025-01-01");
  const endDate = new Date("2025-12-30");
  
  const totalDays = differenceInDays(endDate, startDate);
  const daysRemaining = differenceInDays(endDate, today);
  
  // Se já passou da data final, retorna 0
  if (daysRemaining <= 0) return 0;
  
  // Calcula proporcionalmente (50 vagas no início, 0 no final)
  const slots = Math.max(1, Math.round((daysRemaining / totalDays) * 50));
  
  return slots;
};

const CTA = () => {
  const remainingSlots = calculateRemainingSlots();
  
  return (
    <section id="cta-section" className="esconder py-20 bg-white text-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary-glow/10 rounded-full blur-xl animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-lg px-6 py-2 smartplayer-scroll-event">
          ⏰ ÚLTIMAS VAGAS DISPONÍVEIS
        </Badge>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Ganhe conhecimento e prática
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
            em pouco tempo
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
          Não deixe essa oportunidade passar. O mercado de IA está explodindo e quem entrar primeiro vai lucrar mais.
        </p>
        
        <Card className="p-8 mb-8 bg-gray-50 border-gray-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="text-3xl font-bold mb-4">O que você leva hoje:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-success">✓</span>
                  <span>60 dias plataforma - R$ 2.000</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-success">✓</span>
                  <span>Mentoria Individual por 3 meses - R$ 9.000</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-success">✓</span>
                  <span>Certificação de Consultor - R$ inestimável</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>e tem mais</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-success">✓</span>
                  <span>Grupo VIP</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-success">✓</span>
                  <span>Liberdade de trabalho</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-success">✓</span>
                  <span>Garantia incondicional de 7 dias</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <p className="text-lg opacity-75 mb-2">Valor total:</p>
              <p className="text-4xl font-bold line-through opacity-60">R$ 11.000</p>
              
              <p className="text-lg opacity-75 mb-2 mt-4">Sua oportunidade:</p>
              <p className="font-bold text-primary">
                <span className="text-2xl">10x de </span>
                <span className="text-4xl">R$ 29,90</span>
              </p>
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div 
                    onClick={() => (window as any).gtag('event', 'pagamento', {'nome_botao': 'DESCONTO'})}
                    className="block bg-gradient-to-r from-primary to-primary-glow p-4 rounded-lg mt-4 text-white hover:shadow-glow transition-all duration-300 cursor-pointer"
                  >
                    <p className="font-bold">⚡ FORMAÇÃO COM BOLSA 95%</p>
                    <p className="text-sm opacity-90">Apenas para os próximos {remainingSlots} alunos</p>
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Para contratar a mentoria escolha o pacote INICIANTE</AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction asChild>
                      <a 
                        href="https://contrate.robotsa.com.br/?plan=iniciante"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        CONTRATAR
                      </a>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </Card>
        
        <div className="space-y-4 mb-8">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button 
                variant="cta" 
                size="xl" 
                className="text-2xl py-6 px-12 w-full md:w-auto bg-gradient-to-r from-primary to-primary-glow text-white hover:shadow-glow border-2 border-primary"
                onClick={() => (window as any).gtag('event', 'pagamento', {'nome_botao': 'SIM_QUERO'})}
              >
                🚀 SIM! QUERO GARANTIR MINHA VAGA AGORA
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Para contratar a mentoria escolha o pacote INICIANTE</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction asChild>
                  <a 
                    href="https://contrate.robotsa.com.br/?plan=iniciante"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    CONTRATAR
                  </a>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <p className="text-sm opacity-75">
            🔒 Pagamento 100% seguro • ⚡ Acesso imediato • 🎁 Bônus liberados na hora
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 text-sm opacity-90">
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-8 rounded-full flex items-center justify-center">🛡️</span>
            <span>Garantia 7 dias</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-8 rounded-full flex items-center justify-center">💳</span>
            <span>12x sem juros</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-8 rounded-full flex items-center justify-center">⏰</span>
            <span>Acesso vitalício</span>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <p className="text-lg font-semibold mb-2">🔥 VAGAS LIMITADA COM MENTORIA</p>
          <p className="opacity-90">
            Só conseguimos dar suporte individualizado para 50 alunos este ano. 
            Restam apenas <span className="font-bold text-primary">{remainingSlots} vagas</span>. 
            A próxima turma somente no ano seguinte com mentorias em grupo. Aproveite.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;