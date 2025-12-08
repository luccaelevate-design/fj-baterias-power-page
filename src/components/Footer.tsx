import { Phone, Mail, MapPin, Battery } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-energy-gradient rounded-lg flex items-center justify-center">
                <Battery className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="text-2xl font-bold">FJ Baterias</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Especialistas em soluções completas para baterias tracionárias, 
              oferecendo qualidade e confiabilidade para seu negócio.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Vendas de Baterias</li>
              <li>Locação de Equipamentos</li>
              <li>Manutenção Preventiva</li>
              <li>Assistência Técnica</li>
              <li>Consultoria Especializada</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Equipamentos</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Empilhadeiras</li>
              <li>Transpaletes Elétricos</li>
              <li>Plataformas Elevatórias</li>
              <li>Equipamentos Industriais</li>
              <li>Sistemas de Energia</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">(11) 97624-3616</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">São Paulo - SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 FJ Baterias. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-accent transition-colors">Certificações</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;