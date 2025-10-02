import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import whatsappDemo1 from "@/assets/whatsapp-demo1.jpg";
import whatsappRobotDemo from "@/assets/whatsapp-robot-demo.jpg";

const WhatsAppDemo = () => {
  return (
    <section id="whatsapp-demo" className="esconder py-20 bg-whatsapp-light/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-whatsapp text-whatsapp-foreground">
            🤖 Demonstração Real
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Exemplo de aplicação prática
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Neste consultório o robô atende clientes, agenda consultas e faz tudo em linguagem natural baseado em GPT. Quase imperceptível com uma grande economia no negócio.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              💬 Conversação inteligente
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
                      "Olá! Vi que você tem uma consulta agendada para hoje às 15h. 
                      Como posso ajudá-lo?"
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
                      "Olá! Estou atrasado no trânsito e não vou conseguir chegar às 15h. Tem como reagendar?"
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
                      "Sem problema! Verificando a agenda... Temos disponibilidade às 18h hoje. 
                      Posso reagendar sua consulta para esse horário?"
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="text-center">
            <img 
              src="/lovable-uploads/07d7f690-69f5-42f2-8a87-771bf73a4dcb.png" 
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
            src={whatsappRobotDemo}
            alt="WhatsApp AI Robot Demo" 
            className="rounded-2xl shadow-primary max-w-4xl mx-auto"
          />
          <p className="mt-6 text-lg text-muted-foreground">
            Finanças, Marketing, Vendas são só exemplos de aplicações. Existem inúmeras oportunidades para usar IA nos negócios e a Robot é a plataforma ideal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="text-3xl mb-4">⚡</div>
            <h4 className="font-bold mb-2">Reduz custos</h4>
            <p className="text-sm text-muted-foreground">
              Licenças de software e pessoas são maiores despesas das empresas. A Robot diminui as duas.
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-3xl mb-4">🎯</div>
            <h4 className="font-bold mb-2">Empresas investirão em IA</h4>
            <p className="text-sm text-muted-foreground">
              Seja você quem propõe e executa projetos na empresa. Ganhe visibilidade e liderança.
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-3xl mb-4">💰</div>
            <h4 className="font-bold mb-2">Conversão alta</h4>
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