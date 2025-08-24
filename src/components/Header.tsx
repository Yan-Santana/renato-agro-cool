import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const whatsappLink = () => {
    window.open('https://wa.me/5567999999999?text=Olá! Gostaria de saber mais sobre os serviços de manutenção de ar condicionado.', '_blank');
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/77feb991-8c1a-4e5e-bcc5-13b7adfdfd8d.png" 
            alt="Renato Ar Condicionado" 
            className="h-12 w-auto"
          />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-primary">Renato Ar Condicionado</h1>
            <p className="text-xs text-muted-foreground">Máquinas Agrícolas & Automotivo</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('servicos')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Contato
          </button>
        </nav>

        {/* WhatsApp Button */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="whatsapp" 
            size="sm" 
            onClick={whatsappLink}
            className="hidden sm:flex"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="flex flex-col space-y-4 p-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Contato
            </button>
            <Button 
              variant="whatsapp" 
              size="sm" 
              onClick={whatsappLink}
              className="justify-start"
            >
              <MessageCircle className="w-4 h-4" />
              Fale Conosco no WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;