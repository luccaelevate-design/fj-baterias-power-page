import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 93930-7700",
      description: "Ligue agora para falar conosco"
    },
    {
      icon: Mail,
      title: "Whatsapp",
      info: "(11) 93930-7700",
      description: "Envie sua mensagem pelo Whatsapp"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "São Paulo - SP",
      description: "Atendemos o estado de São Paulo"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Seg-Sex: 7h às 17h",
      description: "Suporte técnico"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender suas necessidades. Entre em contato conosco 
            e descubra como podemos ajudar seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Fale Conosco
              </h3>
              <p className="text-muted-foreground mb-8">
                Nossa equipe está sempre disponível para esclarecer dúvidas, 
                fornecer orçamentos e oferecer as melhores soluções para sua empresa.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="border-2 hover:border-accent transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-hero-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                        <contact.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{contact.title}</h4>
                        <p className="text-lg font-medium text-foreground mb-1">{contact.info}</p>
                        <p className="text-sm text-muted-foreground">{contact.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-section-gradient rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-primary mb-4">
                Atendimento Especializado
              </h4>
              <p className="text-muted-foreground mb-6">
                Nossa equipe técnica qualificada está preparada para oferecer 
                suporte completo em baterias tracionárias, desde a escolha do 
                produto ideal até a manutenção especializada.
              </p>
              <Button variant="energy" size="lg">
                <a href="http://wa.me/5511939307700" target="_blank" rel="noopener noreferrer">
                  Solicitar Atendimento
                </a>
              </Button>
            </div>
          </div>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Solicitar Orçamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nome *
                  </label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Empresa
                  </label>
                  <Input placeholder="Nome da sua empresa" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    E-mail *
                  </label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Telefone *
                  </label>
                  <Input type="tel" placeholder="(11) 93930-7700" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Tipo de Serviço
                </label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                  <option>Selecione o serviço desejado</option>
                  <option>Venda de Baterias</option>
                  <option>Locação de Baterias</option>
                  <option>Manutenção e Assistência</option>
                  <option>Consultoria Técnica</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Mensagem
                </label>
                <Textarea 
                  placeholder="Descreva suas necessidades, tipo de equipamento, quantidade, etc." 
                  rows={4}
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                <a href="http://wa.me/5511939307700" target="_blank" rel="noopener noreferrer">
                  Enviar Solicitação
                </a>
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Entraremos em contato em até 2 horas úteis. Campos com * são obrigatórios.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
