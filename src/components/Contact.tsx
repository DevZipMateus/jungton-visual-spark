import { MapPin, Phone, Mail, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import TitleWithLeftDivider from "@/components/TitleWithLeftDivider";

const testimonials = [
  {
    name: "Claudia B",
    rating: 5,
    date: "Há 12 semanas",
    text: "Super profissionais, trabalho de qualidade e agilidade. Atendimento excepcional. Super recomendo.",
    initial: "C",
    color: "bg-primary"
  },
  {
    name: "Tríptica Arquitetura",
    rating: 5,
    date: "Há 32 semanas",
    text: "Empresa excelente! Adoramos trabalhar com eles como nossos parceiros em tantos projetos!",
    initial: "T",
    color: "bg-slate-900"
  },
  {
    name: "Marcos Cavalheiro",
    rating: 5,
    date: "16 de mar. de 2024",
    text: "Nota 10 em todos os quesitos: qualidade, cumprimento de prazo, preço justo, atendimento.",
    initial: "M",
    color: "bg-pink-600"
  },
  {
    name: "Gabriel Colpo",
    rating: 5,
    date: "8 de mar. de 2024",
    text: "Ótimo serviço prestado! Rapidez em todo processo e profissionalismo! Recomendo!",
    initial: "G",
    color: "bg-teal-600"
  },
  {
    name: "Nathália Coelho",
    rating: 5,
    date: "13 de jul. de 2023",
    text: "Produtos de ótima qualidade, sempre apoiam as demandas e abraçam as ideias mais diferentes que inventamos. Quando compramos temos todo suporte do início a entrega do produto!",
    initial: "N",
    color: "bg-blue-600"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <TitleWithLeftDivider 
            subtitle="ENTRE EM" 
            title="CONTATO" 
            className="mb-12 md:mb-16 animate-fade-in px-4 md:px-0" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-0">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2">Localização</h3>
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
                  <h3 className="mb-2">Telefone</h3>
                  <a href="tel:+555532217731" className="text-foreground/80 hover:text-primary transition-smooth">
                    (55) 3221-7731
                  </a>
                  <div className="mt-2">
                    <h3 className="mb-1">WhatsApp</h3>
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
                  <h3 className="mb-2">E-mail</h3>
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
                  <h3 className="mb-2">Horário</h3>
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
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Rua+Otávio+Silvestre+de+Oliveira+120+Nossa+Senhora+do+Rosário+Santa+Maria+RS+97010-350&zoom=17"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jungton Comunicação Visual - R. Otávio Silvestre de Oliveira, 120"
              />
            </div>

            {/* Testimonials */}
            <div className="space-y-4 animate-fade-in">
              <h3 className="mb-4">Avaliações de Clientes</h3>
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-smooth"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white font-semibold`}>
                        {testimonial.initial}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex gap-0.5">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                          <span className="text-xs text-foreground/60">{testimonial.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
