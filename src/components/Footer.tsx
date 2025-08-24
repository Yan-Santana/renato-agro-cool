import { MessageCircle, Mail, MapPin, Settings } from 'lucide-react';

const Footer = () => {
  const whatsappLink = () => {
    window.open('https://wa.me/5567999999999?text=Olá! Vim através do site da Renato Ar Condicionado.', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/77feb991-8c1a-4e5e-bcc5-13b7adfdfd8d.png" 
                alt="Renato Ar Condicionado" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold">Renato Ar Condicionado</h3>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Especialistas em manutenção de ar condicionado para máquinas agrícolas 
              e automotivas na região Centro-Oeste desde 2021.
            </p>
            <div className="flex items-center space-x-2 text-agricultural">
              <Settings className="w-4 h-4" />
              <span className="text-sm font-medium">Profissionalismo e Qualidade</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-white/80 hover:text-agricultural transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block text-white/80 hover:text-agricultural transition-colors"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="block text-white/80 hover:text-agricultural transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block text-white/80 hover:text-agricultural transition-colors"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Principais Serviços</h4>
            <ul className="space-y-2 text-white/80">
              <li>• Carga de gás refrigerante</li>
              <li>• Limpeza e higienização</li>
              <li>• Troca de compressor</li>
              <li>• Manutenção preventiva</li>
              <li>• Venda de peças</li>
              <li>• Atendimento 24h</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <button 
                  onClick={whatsappLink}
                  className="text-white/80 hover:text-green-400 transition-colors"
                >
                  WhatsApp
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:renatosantanams@gmail.com"
                  className="text-white/80 hover:text-primary transition-colors break-all"
                >
                  renatosantanams@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-agricultural" />
                <span className="text-white/80">Campo Grande - MS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 Renato Ar Condicionado. Todos os direitos reservados.
            </div>
            <div className="text-white/60 text-sm">
              Especialistas em máquinas agrícolas desde 2021
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;