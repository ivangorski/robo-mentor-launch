import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary-glow/20 rounded-full blur-xl animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
          ⏰ ÚLTIMAS VAGAS DISPONÍVEIS
        </Badge>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Sua Nova Vida Começa
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-glow">
            Nos Próximos 30 Dias
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
          Não deixe essa oportunidade passar. O mercado de IA está explodindo e quem entrar primeiro vai lucrar mais.
        </p>
        
        <Card className="p-8 mb-8 bg-white/10 backdrop-blur-sm border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="text-3xl font-bold mb-4">🎯 O Que Você Leva Hoje:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-xs">✓</span>
                  <span>Certificação na Plataforma - R$ 1.990</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-xs">✓</span>
                  <span>Mentoria Individual por 3 meses - R$ 9.000</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-xs">✓</span>
                  <span>Cerificação de Consultor - R$ inestimável</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-xs">✓</span>
                  <span>e tem mais</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-xs">✓</span>
                  <span>Grupo VIP</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-xs">✓</span>
                  <span>Receba leads da sua região</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-xs">✓</span>
                  <span>Garantia incondicional de 7 dias</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <p className="text-lg opacity-75 mb-2">Valor total:</p>
              <p className="text-4xl font-bold line-through opacity-60">R$ 5.288</p>
              
              <p className="text-lg opacity-75 mb-2 mt-4">Sua oportunidade:</p>
              <p className="text-6xl font-bold text-yellow-300">R$ 1.997</p>
              <p className="text-xl opacity-90">ou 12x de R$ 197</p>
              
              <div className="bg-destructive/20 p-4 rounded-lg mt-4">
                <p className="font-bold">⚡ DESCONTO DE 62% HOJE</p>
                <p className="text-sm opacity-90">Apenas para os próximos 47 alunos</p>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="space-y-4 mb-8">
          <Button variant="hero" size="xl" className="text-2xl py-6 px-12 w-full md:w-auto">
            🚀 SIM! QUERO GARANTIR MINHA VAGA AGORA
          </Button>
          <p className="text-sm opacity-75">
            🔒 Pagamento 100% seguro • ⚡ Acesso imediato • 🎁 Bônus liberados na hora
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 text-sm opacity-90">
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-8 bg-success rounded-full flex items-center justify-center">🛡️</span>
            <span>Garantia 7 dias</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-8 bg-success rounded-full flex items-center justify-center">💳</span>
            <span>12x sem juros</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-8 bg-success rounded-full flex items-center justify-center">⏰</span>
            <span>Acesso vitalício</span>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/20">
          <p className="text-lg font-semibold mb-2">🔥 URGÊNCIA REAL</p>
          <p className="opacity-90">
            Só conseguimos dar suporte individualizado para 100 alunos por turma. 
            Restam apenas <span className="font-bold text-yellow-300">47 vagas</span>. 
            A próxima turma só abre em 3 meses com preço 40% maior.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;