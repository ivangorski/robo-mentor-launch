import logoRobotsa from "@/assets/logo-robotsa.png";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={logoRobotsa} alt="Robot S.A." className="h-12" />
          </div>

          {/* Company Info */}
          <div className="text-sm text-muted-foreground space-y-2">
            <p className="font-semibold">ROBOTSA SOFTWARE E GESTAO</p>
            <p>CNPJ: 62.194.036/0001-00</p>
            <p className="mt-4">&copy; {new Date().getFullYear()} Robot S.A. - Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
