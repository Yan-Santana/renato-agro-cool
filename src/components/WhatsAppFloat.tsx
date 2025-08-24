import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppFloat = () => {
  const whatsappLink = () => {
    window.open('https://wa.me/5567991674724?text=Olá! Gostaria de saber mais sobre os serviços da Renato Ar Condicionado.', '_blank');
  };

  return (
    <Button
      variant="whatsapp"
      size="icon"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-xl hover:shadow-2xl animate-pulse hover:animate-none transition-all duration-300"
      onClick={whatsappLink}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </Button>
  );
};

export default WhatsAppFloat;