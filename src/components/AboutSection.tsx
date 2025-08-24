import { Card } from '@/components/ui/card';
import { Shield, Users, Clock, Award } from 'lucide-react';
import johnDeereImage from '@/assets/john-deere-field.jpg';

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Profissionalismo",
      description: "Atendimento técnico especializado com profissionais qualificados"
    },
    {
      icon: Users,
      title: "Compromisso",
      description: "Dedicação total com cada cliente e projeto realizado"
    },
    {
      icon: Clock,
      title: "Transparência",
      description: "Comunicação clara do início ao fim do processo"
    },
    {
      icon: Award,
      title: "Cuidado",
      description: "Atenção aos detalhes em cada serviço prestado"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a <span className="text-primary">Renato Ar Condicionado</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A empresa<strong className="text-primary">Renato Ar Condicionado</strong> atua desde <strong>2021</strong>, 
                oferecendo soluções em manutenção de ar condicionado para máquinas agrícolas e automotivas.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                        Ao longo dos anos, construímos uma reputação baseada em <strong className="text-primary">profissionalismo</strong>,
        <strong className="text-primary"> destreza</strong> e <strong className="text-primary">cuidado</strong> em 
                cada serviço realizado.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa missão é garantir <strong className="text-primary">conforto</strong> e <strong className="text-primary">eficiência</strong> para 
                agricultores, pecuaristas e empresários da região do <strong>Centro-Oeste</strong>.
              </p>

              {/* Highlight Box */}
              <div className="bg-gradient-primary p-6 rounded-lg text-white">
                <h3 className="text-xl font-semibold mb-3">Nossa Missão</h3>
                <p className="text-white/90">
                  Proporcionar soluções eficientes e duradouras em climatização para o agronegócio, 
                  contribuindo para a produtividade e conforto no campo.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={johnDeereImage} 
                  alt="Colheitadeira John Deere em atividade no campo" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-primary border border-primary/10">
                <div className="text-2xl font-bold text-primary mb-1">2021</div>
                <div className="text-sm text-muted-foreground">Fundação da empresa</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 border-0 bg-white">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;