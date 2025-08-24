import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Zap, 
  Droplets, 
  Settings, 
  Filter, 
  Thermometer, 
  Fan, 
  TrendingUp, 
  Shield,
  Wrench,
  Cable,
  ShoppingCart,
  MessageCircle
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    { icon: Zap, title: "Carga de gás", description: "Reposição e verificação do gás refrigerante" },
    { icon: Droplets, title: "Limpeza e higienização", description: "Limpeza completa do sistema de climatização" },
    { icon: Settings, title: "Troca do condensador e compressor", description: "Substituição de componentes principais" },
    { icon: Filter, title: "Filtro", description: "Troca e manutenção de filtros do sistema" },
    { icon: Thermometer, title: "Sensor", description: "Calibração e substituição de sensores" },
    { icon: Fan, title: "Motor de ventilação", description: "Reparo e substituição de motores" },
    { icon: TrendingUp, title: "Sensores de temperatura", description: "Instalação e calibração de sensores" },
    { icon: Shield, title: "Filtro secador", description: "Manutenção do sistema de filtragem" },
    { icon: Wrench, title: "Evaporador", description: "Limpeza e reparo do evaporador" },
    { icon: Fan, title: "Eletroventilador", description: "Manutenção de ventiladores elétricos" },
    { icon: Settings, title: "Válvula block", description: "Regulagem e troca de válvulas" },
    { icon: Cable, title: "Mangueira", description: "Substituição de mangueiras do sistema" },
    { icon: Cable, title: "Chicote elétrico", description: "Reparo da parte elétrica do sistema" }
  ];

  const whatsappLink = () => {
    window.open('https://wa.me/5567991674724?text=Olá! Gostaria de solicitar um orçamento para manutenção de ar condicionado.', '_blank');
  };

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Oferecemos uma gama completa de serviços especializados em ar condicionado 
              para máquinas agrícolas e automotivas
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-card transition-all duration-300 hover:scale-105 border-0 bg-white group"
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-primary transition-all duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>

          {/* Sales Section */}
          <div className="bg-gradient-agricultural rounded-2xl p-8 md:p-12 text-center text-white mb-12">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Venda de Peças
              </h3>
              <p className="text-xl text-white/90 mb-6">
                Também realizamos <strong>venda de peças</strong> para o seu maquinário agrícola.
              </p>
              <p className="text-white/80 mb-8">
                Trabalhamos com peças originais e de qualidade para garantir o melhor desempenho 
                e durabilidade do seu equipamento.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={whatsappLink}
                className="bg-white text-primary hover:bg-white/90"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Orçamento
              </Button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-muted/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Precisa de Manutenção?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e solicite um orçamento personalizado 
              para seu equipamento agrícola ou automotivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={whatsappLink}
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Orçamento
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Entre em Contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;