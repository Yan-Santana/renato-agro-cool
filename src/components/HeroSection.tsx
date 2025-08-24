import { Button } from '@/components/ui/button';
import { MessageCircle, Settings, Wrench } from 'lucide-react';
import heroImage from '@/assets/hero-agricultural.jpg';

const HeroSection = () => {
  const whatsappLink = () => {
    window.open('https://wa.me/5567991674724?text=Olá! Gostaria de saber mais sobre os serviços de manutenção de ar condicionado para máquinas agrícolas.', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Máquinas agrícolas em campo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
            <Settings className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Especialistas em Ar Condicionado Agrícola</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Especialistas em manutenção de 
            <span className="text-primary block">ar condicionado</span>
            para máquinas agrícolas
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Atendemos agricultores, pecuaristas e empresas de todos os portes na região do Centro-Oeste, 
            com <strong>profissionalismo</strong> e <strong>dedicação</strong>.
          </p>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-agricultural/20 backdrop-blur-sm rounded-full px-4 py-2 mb-10 border border-agricultural/30">
            <span className="text-white font-medium">📍 Campo Grande - MS e região</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={whatsappLink}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="w-5 h-5" />
              Fale Conosco no WhatsApp
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Wrench className="w-5 h-5" />
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">3+</div>
              <div className="text-white/80">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24h</div>
              <div className="text-white/80">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;