import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Solution = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-primary text-white">
            🎓 PANTECH - Programa de Aceleração
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sua Nova Profissão em
            <span className="block text-primary">30 Dias ou Menos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Método passo-a-passo para você dominar a criação de robôs de IA, 
            desde o zero até sua primeira venda de R$ 5.000+
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-4">Módulo 1: Fundamentos</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• O que são chatbots e como lucrar</li>
              <li>• Análise de mercado e oportunidades</li>
              <li>• Ferramentas necessárias (gratuitas)</li>
              <li>• Primeiros passos práticos</li>
            </ul>
          </Card>
          
          <Card className="p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-tech"></div>
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold mb-4">Módulo 2: Criação</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Criando seu primeiro robô do zero</li>
              <li>• Integrações com WhatsApp Business</li>
              <li>• Scripts de vendas comprovados</li>
              <li>• Testes e otimizações</li>
            </ul>
          </Card>
          
          <Card className="p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-whatsapp"></div>
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-4">Módulo 3: Monetização</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Como precificar seus serviços</li>
              <li>• Estratégias de prospecção</li>
              <li>• Apresentação para clientes</li>
              <li>• Escalando para R$ 50k+/mês</li>
            </ul>
          </Card>
        </div>
        
        <div className="bg-gradient-primary p-8 rounded-2xl text-white mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">🎁 Bônus Exclusivos</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="font-semibold">Templates Prontos (R$ 997)</p>
                    <p className="opacity-90 text-sm">10+ robôs para diferentes nichos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <p className="font-semibold">Suporte Premium 6 Meses (R$ 1.497)</p>
                    <p className="opacity-90 text-sm">Grupo VIP + Mentorias ao vivo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📈</span>
                  <div>
                    <p className="font-semibold">Scripts de Alto Ticket (R$ 797)</p>
                    <p className="opacity-90 text-sm">Para vendas de R$ 10k, R$ 20k, R$ 50k+</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 p-6 rounded-xl">
                <p className="text-sm opacity-90 mb-2">Valor total dos bônus:</p>
                <p className="text-3xl font-bold line-through opacity-75">R$ 3.291</p>
                <p className="text-4xl font-bold">GRÁTIS</p>
                <p className="text-sm opacity-90 mt-2">Para os primeiros 100 alunos</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="cta" size="xl" className="mb-4">
            🚀 Quero Transformar Minha Carreira Agora
          </Button>
          <p className="text-sm text-muted-foreground">
            ⏰ Oferta por tempo limitado • 💳 Parcelamos em até 12x • 🛡️ Garantia incondicional
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;