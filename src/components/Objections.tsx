import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Objections = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            "Mas e se..."
            <span className="block text-primary">Suas Dúvidas Respondidas</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Entendemos suas preocupações. Aqui estão as respostas para as principais dúvidas.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1">
            <Card>
              <AccordionTrigger className="px-6 py-4 text-left">
                <span className="text-lg font-semibold">
                  😰 "Não tenho conhecimento técnico, será que consigo?"
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="bg-success/10 p-4 rounded-lg border-l-4 border-success">
                  <p className="text-muted-foreground">
                    <strong>Resposta:</strong> Nosso método foi criado para iniciantes. 
                    Você vai aprender do zero, passo-a-passo, com linguagem simples. 
                    Além disso a MENTORIA permite sanar dúvidas e dificuldades que você tenha - 
                    além disso lembre-se que você tem 7 dias de garantia se decidir cancelar.
                  </p>
                </div>
              </AccordionContent>
            </Card>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <Card>
              <AccordionTrigger className="px-6 py-4 text-left">
                <span className="text-lg font-semibold">
                  ⏰ "Não tenho tempo, trabalho muito..."
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="bg-tech-blue-light p-4 rounded-lg border-l-4 border-tech-blue">
                  <p className="text-muted-foreground">
                    <strong>Resposta:</strong> Comece com 2-3h por semana. Impossível uma oportunidade mais adequada para quem já trabalha ou tem pouco tempo. As aulas são gravadas e você acessa quando quiser. Muitos alunos estudam durante o almoço ou aos fins de semana. Vá aos poucos até sentir segurança
                  </p>
                </div>
              </AccordionContent>
            </Card>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <Card>
              <AccordionTrigger className="px-6 py-4 text-left">
                <span className="text-lg font-semibold">
                  💰 "E se eu não conseguir vender nada?"
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="bg-whatsapp-light p-4 rounded-lg border-l-4 border-whatsapp">
                  <p className="text-muted-foreground">
                    <strong>Resposta:</strong> Temos uma <strong>Garantia Incondicional de 7 dias</strong>! 
                    Se você não conseguir criar seu primeiro robô funcionando ou não ficar satisfeito 
                    por qualquer motivo, devolvemos 100% do seu dinheiro. 
                    Além disso, a MENTORIA ajuda demais a entrar com dicas e conselhos sob medida para suas dificuldades.
                  </p>
                </div>
              </AccordionContent>
            </Card>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <Card>
              <AccordionTrigger className="px-6 py-4 text-left">
                <span className="text-lg font-semibold">
                  🤖 "IA não vai substituir isso no futuro?"
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-muted-foreground">
                    <strong>Resposta:</strong> Empresas precisam de especialistas que entendam tanto de negócios quanto de IA. 
                    Essa é a profissão do futuro, e você está entrando no momento certo! 
                    Aprendendo agora você estará À FRENTE da curva.
                  </p>
                </div>
              </AccordionContent>
            </Card>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <Card>
              <AccordionTrigger className="px-6 py-4 text-left">
                <span className="text-lg font-semibold">
                  💸 "O investimento é muito alto para mim..."
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="bg-gradient-primary/10 p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-muted-foreground">
                    <strong>Resposta:</strong> Pense assim: um curso superior custa R$ 100k+ e demora 4 anos. 
                    Aqui você investe menos de R$ 2k e em 30 dias já pode estar faturando R$ 5k+/mês. 
                    Dividimos em até 12x sem juros. É literalmente o valor de um celular, 
                    mas que pode transformar sua vida financeira para sempre. 
                    Quanto você já gastou em coisas que não mudaram sua situação?
                  </p>
                </div>
              </AccordionContent>
            </Card>
          </AccordionItem>
        </Accordion>
        
        <div className="text-center mt-12">
          <Card className="p-8 bg-gradient-primary text-white">
            <h3 className="text-2xl font-bold mb-4">🛡️ Nossa Garantia Para Você</h3>
            <p className="text-lg mb-6">
              Se em 30 dias você não estiver 100% satisfeito ou não conseguir criar seu primeiro robô, 
              devolvemos todo seu dinheiro, sem perguntas, sem burocracia.
            </p>
            <p className="font-semibold">
              Você não tem nada a perder, só a ganhar! 🚀
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Objections;