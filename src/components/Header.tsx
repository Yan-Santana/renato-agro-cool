import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const whatsappLink = () => {
    window.open('https://wa.me/5567991674724?text=Olá! Gostaria de saber mais sobre os serviços de manutenção de ar condicionado.', '_blank');
  };

  return (
    <header className="fixed top-0 w-full bg-foreground backdrop-blur-sm border-b border-white/20 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/imgs/Logo Empresa.png" 
            alt="Renato Ar Condicionado" 
            className="h-12 w-auto"
          />
          <div className="block">
            <h1 className="text-xl font-extrabold text-white tracking-wide">Renato Ar Condicionado</h1>
            <p className="text-sm font-semibold text-white/80">Máquinas Agrícolas & Automotivo</p>          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white hover:text-primary transition-colors font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-white hover:text-primary transition-colors font-medium"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('servicos')}
            className="text-white hover:text-primary transition-colors font-medium"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="text-white hover:text-primary transition-colors font-medium"
          >
            Contato
          </button>
        </nav>

        {/* Actions */}
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
            className="md:hidden text-white hover:text-primary hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-foreground border-t border-white/20">
          <nav className="flex flex-col space-y-4 p-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-left text-white hover:text-primary transition-colors font-medium py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-left text-white hover:text-primary transition-colors font-medium py-2"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-left text-white hover:text-primary transition-colors font-medium py-2"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-left text-white hover:text-primary transition-colors font-medium py-2"
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