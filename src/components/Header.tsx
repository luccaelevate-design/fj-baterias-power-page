import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">FJ</span>
            </div>
            <span className="text-xl font-bold text-primary">FJ Baterias</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">(11) 9390-7700</span>
              </div>
            </div>
            <Button variant="energy" size="sm">
                <a href="http://wa.me/5511976243616" target="_blank" rel="noopener noreferrer">
                    Solicitar Orçamento
                </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
