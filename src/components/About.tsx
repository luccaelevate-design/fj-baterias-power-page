import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, MapPin, Clock } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Award,
      number: "15+",
      label: "Anos de Experiência",
      description: "Sólida trajetória no mercado"
    },
    {
      icon: Users,
      number: "500+",
      label: "Clientes Atendidos",
      description: "Empresas que confiam em nós"
    },
    {
      icon: MapPin,
      number: "SP",
      label: "Estados de Atuação",
      description: "Cobertura no estado SP"
    },
    {
      icon: Clock,
      number: "7h - 17",
      label: "Suporte Técnico",
      description: "Atendimento quando precisar"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Sobre a FJ Baterias
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A <strong className="text-primary">FJ Baterias</strong> é uma empresa especializada 
                  no mercado de baterias tracionárias, oferecendo soluções completas para empresas 
                  que dependem de equipamentos industriais como empilhadeiras, transpaletes e 
                  equipamentos de movimentação de materiais.
                </p>
                <p>
                  Nossa missão é fornecer produtos de alta qualidade e serviços especializados, 
                  garantindo que nossos clientes mantenham suas operações funcionando com 
                  máxima eficiência e confiabilidade.
                </p>
                <p>
                  Com uma equipe técnica altamente qualificada e parcerias com os principais 
                  fabricantes do setor, oferecemos desde a venda de baterias novas até 
                  serviços de locação e manutenção preventiva e corretiva.
                </p>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-semibold text-primary mb-4">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Ser a referência em soluções de baterias tracionárias, oferecendo produtos 
                de qualidade superior e serviços especializados que garantam a produtividade 
                e competitividade de nossos clientes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 border-2 hover:border-accent transition-colors duration-300 shadow-elegant">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-hero-gradient rounded-2xl flex items-center justify-center mx-auto">
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-transparent bg-energy-gradient bg-clip-text mb-2">
                      {stat.number}
                    </div>
                    <div className="font-semibold text-primary text-lg mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;