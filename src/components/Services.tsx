import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Calendar, Settings, Battery, Gauge, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Vendas de Baterias",
      description: "Baterias tracionárias de alta qualidade para empilhadeiras, transpaletes e equipamentos industriais.",
      features: ["Marcas renomadas", "Garantia estendida", "Entrega rápida", "Preços competitivos"]
    },
    {
      icon: Calendar,
      title: "Locação de Baterias",
      description: "Soluções flexíveis de locação para atender necessidades temporárias ou permanentes.",
      features: ["Contratos flexíveis", "Manutenção inclusa", "Substituição imediata", "Sem investimento inicial"]
    },
    {
      icon: Settings,
      title: "Manutenção Especializada",
      description: "Serviços completos de manutenção preventiva e corretiva para prolongar a vida útil das baterias.",
      features: ["Técnicos qualificados", "Peças originais", "Atendimento 24h", "Relatórios detalhados"]
    }
  ];

  const advantages = [
    {
      icon: Battery,
      title: "Alta Performance",
      description: "Baterias com tecnologia avançada para máxima eficiência energética"
    },
    {
      icon: Gauge,
      title: "Durabilidade",
      description: "Produtos testados e aprovados para uso industrial intensivo"
    },
    {
      icon: Clock,
      title: "Atendimento Ágil",
      description: "Resposta rápida e soluções eficientes para suas necessidades"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em baterias tracionárias, 
            desde vendas até manutenção especializada, sempre com qualidade e confiabilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-accent transition-colors duration-300 shadow-elegant">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-section-gradient rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Por que escolher a FJ Baterias?
            </h3>
            <p className="text-lg text-muted-foreground">
              Nossa experiência e compromisso garantem as melhores soluções para seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-energy-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <advantage.icon className="w-10 h-10 text-accent-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-3">{advantage.title}</h4>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;