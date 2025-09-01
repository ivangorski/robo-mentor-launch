import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import whatsappDemo1 from "@/assets/whatsapp-demo1.jpg";
import whatsappMulti from "@/assets/whatsapp-multi.jpg";

const WhatsAppDemo = () => {
  return (
    <section className="py-20 bg-whatsapp-light/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-whatsapp text-whatsapp-foreground">
            🤖 Demonstração Real
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Veja Como Funciona na Prática
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estes são exemplos reais de robôs criados por nossos alunos. 
            Eles vendem mentoria individualizada automaticamente pelo WhatsApp.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              💬 Conversação Inteligente
            </h3>
            <div className="space-y-6">
              <Card className="p-6 bg-whatsapp/5 border-whatsapp/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-whatsapp rounded-full flex items-center justify-center text-white font-bold">
                    🤖
                  </div>
                  <div className="flex-1">
                    <p className="font-medium mb-2">Robô de IA:</p>
                    <p className="text-muted-foreground">
                      "Olá! Vi que você tem interesse em mentoria para desenvolvimento pessoal. 
                      Que tipo de desafio você está enfrentando atualmente?"
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-blue-50 border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    👤
                  </div>
                  <div className="flex-1">
                    <p className="font-medium mb-2">Cliente:</p>
                    <p className="text-muted-foreground">
                      "Quero mudar de carreira mas não sei por onde começar..."
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-whatsapp/5 border-whatsapp/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-whatsapp rounded-full flex items-center justify-center text-white font-bold">
                    🤖
                  </div>
                  <div className="flex-1">
                    <p className="font-medium mb-2">Robô de IA:</p>
                    <p className="text-muted-foreground">
                      "Entendo perfeitamente! Mudança de carreira é um dos maiores desafios. 
                      Tenho um programa específico que já ajudou +500 pessoas. 
                      Quer conhecer como funciona? É só R$ 497 à vista ou 12x de R$ 49,70."
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="text-center">
            <img 
              src={whatsappDemo1} 
              alt="WhatsApp Demo" 
              className="rounded-2xl shadow-whatsapp max-w-sm mx-auto"
            />
            <p className="mt-4 text-sm text-muted-foreground">
              Interface real do WhatsApp com nosso robô
            </p>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <img 
            src={whatsappMulti} 
            alt="Multiple WhatsApp Conversations" 
            className="rounded-2xl shadow-primary max-w-4xl mx-auto"
          />
          <p className="mt-6 text-lg text-muted-foreground">
            Um só robô pode atender centenas de clientes simultaneamente, 
            qualificando leads e fechando vendas 24/7
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="text-3xl mb-4">⚡</div>
            <h4 className="font-bold mb-2">Resposta Instantânea</h4>
            <p className="text-sm text-muted-foreground">
              Cliente nunca fica esperando. Atendimento imediato 24/7.
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-3xl mb-4">🎯</div>
            <h4 className="font-bold mb-2">Qualificação Inteligente</h4>
            <p className="text-sm text-muted-foreground">
              IA identifica o perfil do cliente e oferece a solução ideal.
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-3xl mb-4">💰</div>
            <h4 className="font-bold mb-2">Conversão Alta</h4>
            <p className="text-sm text-muted-foreground">
              Scripts otimizados que convertem visitantes em clientes.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppDemo;