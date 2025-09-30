const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Robot S.A.</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Plataforma completa de Inteligência Artificial para criação de agentes autônomos e automação de negócios.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://contrate.robotsa.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Contratar Plataforma
                </a>
              </li>
              <li>
                <a href="https://contrate.robotsa.com.br#recursos" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="https://contrate.robotsa.com.br#planos" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Planos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span>📱</span> WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:contato@robotsa.com.br" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span>✉️</span> contato@robotsa.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Robot S.A. - Todos os direitos reservados.</p>
          <p className="mt-2">
            CNPJ: XX.XXX.XXX/XXXX-XX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
