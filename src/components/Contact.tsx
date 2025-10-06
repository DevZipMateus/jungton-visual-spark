import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import textureGrid from "@/assets/texture-grid.png";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <img 
          src={textureGrid} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16 animate-fade-in">
            Contato
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Localização</h3>
                  <p className="text-foreground/80">
                    Rua Otávio Silvestre de Oliveira, 120<br />
                    N. Sra do Rosário<br />
                    CEP 97010-035 | Santa Maria - RS
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Telefone</h3>
                  <a href="tel:+555532217731" className="text-foreground/80 hover:text-primary transition-smooth">
                    (55) 3221-7731
                  </a>
                  <div className="mt-2">
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/5555991630953"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-smooth"
                    >
                      (55) 9.9163-0953
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">E-mail</h3>
                  <a
                    href="mailto:contato@jungton.com.br"
                    className="text-foreground/80 hover:text-primary transition-smooth"
                  >
                    contato@jungton.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Horário</h3>
                  <p className="text-foreground/80">
                    Segunda a sexta<br />
                    8h às 12h – 13h30 às 18h
                  </p>
                </div>
              </div>

              <Button
                variant="default"
                size="lg"
                className="w-full sm:w-auto"
                asChild
              >
                <a href="https://wa.me/5555991630953" target="_blank" rel="noopener noreferrer">
                  Fale conosco pelo WhatsApp
                </a>
              </Button>
            </div>

            {/* Map */}
            <div className="h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-elegant animate-fade-in">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1234567890!2d-53.8!3d-29.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQwJzQ4LjAiUyA1M8KwNDgnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Jungton Comunicação Visual"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
