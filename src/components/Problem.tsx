import { Card } from "@/components/ui/card";

const Problem = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A Revolução dos Negócios Digitais
            <span className="block text-primary">Está Acontecendo Agora</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enquanto a maioria das pessoas ainda não descobriu, existe uma oportunidade 
            bilionária crescendo no mercado de automação com IA.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 border-l-4 border-l-destructive bg-destructive/5">
            <h3 className="text-2xl font-bold mb-4 text-destructive">😰 O Problema</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-destructive text-xl">❌</span>
                <span>Empresas perdendo clientes por não responder rapidamente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive text-xl">❌</span>
                <span>Profissionais presos em empregos sem perspectiva de crescimento</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive text-xl">❌</span>
                <span>Custos altos com atendimento humano 24/7</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive text-xl">❌</span>
                <span>Falta de conhecimento técnico para automatizar processos</span>
              </li>
            </ul>
          </Card>
          
          <Card className="p-8 border-l-4 border-l-success bg-success/5">
            <h3 className="text-2xl font-bold mb-4 text-success">🚀 A Oportunidade</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-success text-xl">✅</span>
                <span>Mercado de chatbots crescendo 25% ao ano</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success text-xl">✅</span>
                <span>Empresas pagando R$ 5.000 - R$ 50.000 por automação</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success text-xl">✅</span>
                <span>Trabalhe de casa com alta lucratividade</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success text-xl">✅</span>
                <span>Profissão do futuro com alta demanda</span>
              </li>
            </ul>
          </Card>
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-primary p-8 rounded-2xl text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">📊 Dados do Mercado</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold">R$ 2.5Bi</div>
                <div className="opacity-90">Mercado brasileiro de chatbots</div>
              </div>
              <div>
                <div className="text-4xl font-bold">89%</div>
                <div className="opacity-90">Das empresas querem automatizar</div>
              </div>
              <div>
                <div className="text-4xl font-bold">R$ 15k</div>
                <div className="opacity-90">Salário médio da profissão</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;