import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Phone,
  Clock,
  Send
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.\n\nTelefone: ${formData.phone}\n\nMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5567991674724?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para conversar conosco no WhatsApp.",
    });

    // Reset form
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const whatsappDirect = () => {
    window.open('https://wa.me/5567991674724?text=Olá! Gostaria de saber mais sobre os serviços da Renato Ar Condicionado.', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Estamos prontos para atender você. Entre em contato conosco e solicite 
              um orçamento personalizado para seu equipamento.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 shadow-card border-0">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Solicite seu Orçamento
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Telefone/WhatsApp *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(67) 99167-4724"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Mensagem *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva seu equipamento e o tipo de serviço que precisa..."
                    className="mt-2 min-h-32"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                >
                  <Send className="w-5 h-5" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* WhatsApp Card */}
              <Card className="p-6 shadow-card border-0 bg-green-50 border-green-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      WhatsApp - Atendimento Rápido
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Fale conosco diretamente pelo WhatsApp para um atendimento mais ágil.
                    </p>
                    <Button 
                      variant="whatsapp" 
                      size="sm"
                      onClick={whatsappDirect}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Iniciar Conversa
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Email Card */}
              <Card className="p-6 shadow-card border-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Email</h4>
                    <p className="text-muted-foreground">renatosantanams@gmail.com</p>
                  </div>
                </div>
              </Card>

              {/* Location Card */}
              <Card className="p-6 shadow-card border-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Localização</h4>
                    <p className="text-muted-foreground">Campo Grande - MS</p>
                    <p className="text-sm text-muted-foreground mt-1">Atendemos toda a região Centro-Oeste</p>
                  </div>
                </div>
              </Card>

              {/* Business Hours Card */}
              <Card className="p-6 shadow-card border-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Horário de Atendimento</h4>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Segunda a Sexta: 7h as 18h</p>
                      <p>Sábado: 7h as 12h</p>
                      <p className="text-sm text-primary font-medium">Emergências: 24h via WhatsApp</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA Bottom */}
          <div className="mt-16 text-center bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para Manter Seu Equipamento em Perfeito Estado?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco agora mesmo e garante que suas máquinas agrícolas 
              funcionem com máxima eficiência durante toda a safra.
            </p>
            <Button 
              variant="hero" 
              size="xl"
              onClick={whatsappDirect}
              className="bg-white text-primary hover:bg-white/90"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com Especialista Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;