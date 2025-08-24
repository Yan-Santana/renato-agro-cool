import { Card } from '@/components/ui/card';
import { Quote, Star, Shield, MessageSquare, Users, CheckCircle } from 'lucide-react';

const TestimonialsSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Serviços executados com máxima confiança e segurança"
    },
    {
      icon: MessageSquare,
      title: "Comunicação Clara",
      description: "Transparência total do início ao fim do processo"
    },
    {
      icon: Users,
      title: "Autonomia",
      description: "Equipe capacitada para resolver qualquer situação"
    },
    {
      icon: CheckCircle,
      title: "Garantia de Qualidade",
      description: "Satisfação garantida em todos os serviços prestados"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Depoimentos dos <span className="text-primary">Nossos Clientes</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card mb-12 relative">
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="pt-6">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed text-center mb-8">
                "Nossos clientes ficam <strong className="text-primary">extremamente satisfeitos</strong> com a 
                qualidade dos serviços prestados e destacam nossa <strong className="text-agricultural">transparência</strong> do 
                início ao fim do processo. Trabalhamos sempre com <strong className="text-primary">confiabilidade</strong>, 
                <strong className="text-primary"> segurança</strong>, <strong className="text-primary">autonomia</strong> e 
                <strong className="text-primary"> comunicação clara</strong>, garantindo 
                <strong className="text-agricultural"> tranquilidade</strong> e 
                <strong className="text-agricultural">confiança</strong> em cada atendimento."
              </blockquote>

              <div className="text-center">
                <div className="text-lg font-semibold text-foreground">Equipe Renato Ar Condicionado</div>
                <div className="text-muted-foreground">Campo Grande - MS</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 border-0 bg-white group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-primary transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* Satisfaction Guarantee */}
          <div className="mt-12 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Garantia de Satisfação
              </h3>
              <p className="text-xl text-white/90 mb-6">
                Trabalhamos com <strong>transparência total</strong> e <strong>comunicação clara</strong> 
                para garantir que você tenha a melhor experiência possível.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-white/80">Transparência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24h</div>
                  <div className="text-white/80">Suporte</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">3+</div>
                  <div className="text-white/80">Anos de Experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;