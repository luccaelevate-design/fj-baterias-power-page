import { Button } from "@/components/ui/button";
import { Zap, Truck, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="bg-section-gradient pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Soluções em
                <span className="block text-transparent bg-energy-gradient bg-clip-text">
                  Baterias Tracionárias
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Somos a <strong>FJ Baterias</strong>, especialistas em prestação de serviços, 
                vendas e locações de baterias tracionárias para equipamentos industriais.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Vendas</h3>
                  <p className="text-sm text-muted-foreground">Baterias de alta qualidade</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Locações</h3>
                  <p className="text-sm text-muted-foreground">Soluções flexíveis</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Manutenção</h3>
                  <p className="text-sm text-muted-foreground">Assistência especializada</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                <a href="http://wa.me/5511939307700" target="_blank" rel="noopener noreferrer">
                    Solicitar Orçamento
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <a href="http://wa.me/5511939307700" target="_blank" rel="noopener noreferrer">
                    Falar com Especialista
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-hero-gradient rounded-3xl transform rotate-3 opacity-20"></div>
            <img 
              src={heroImage} 
              alt="Equipamentos industriais e baterias tracionárias" 
              className="relative rounded-3xl shadow-elegant w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
