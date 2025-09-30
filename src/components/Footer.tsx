import logoRobotsa from "@/assets/logo-robotsa.png";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-[hsl(var(--tech-blue-dark))] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6">
          {/* Left side: Logo + Company Info */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <img src={logoRobotsa} alt="Robot S.A." className="h-10" />
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-semibold">ROBOTSA SOFTWARE E GESTAO</p>
              <p>CNPJ: 62.194.036/0001-00</p>
            </div>
          </div>

          {/* Right side: Copyright */}
          <div className="text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Robot S.A. - Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
