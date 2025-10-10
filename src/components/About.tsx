import DecorativeLine from "@/components/DecorativeLine";

const About = () => {
  return <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center animate-fade-in relative">
            {/* Left Column - Text with Yellow Bar */}
            <div className="relative order-2 md:order-1">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary" />
              <div className="pl-6 md:pl-8 space-y-4 md:space-y-6 leading-relaxed text-foreground/80">
                <p>
                  Na Jungton, temos soluções em comunicação visual que valorizam espaços, marcas e serviços. 
                  Atendemos escritórios de arquitetura e engenharia, construtoras, supermercadistas, varejistas, 
                  profissionais de saúde e empresas que buscam destacar sua identidade.
                </p>

                <p>
                  Combinamos tecnologia, design inteligente e mão de obra especializada para entregar resultados 
                  que unem estética, funcionalidade e credibilidade. Cada detalhe é pensado para transmitir 
                  confiança, gerar conexão com o público e fortalecer sua marca.
                </p>

                <p>
                  Trabalhamos com ética, transparência e responsabilidade socioambiental, oferecendo agilidade 
                  e qualidade em cada etapa. Nosso compromisso é transformar sua visão em resultados reais, 
                  com soluções de melhor custo e benefício que comunicam e encantam.
                </p>
              </div>
            </div>

            {/* Center Decorative Line */}
            <DecorativeLine 
              orientation="vertical"
              className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-32"
            />

            {/* Right Column - Highlighted Statement */}
            <div className="relative order-1 md:order-2">
              <div className="absolute right-0 top-0 bottom-0 w-px bg-border hidden md:block" />
              <div className="md:pr-8">
                <h2 className="leading-tight text-2xl md:text-3xl">
                  A JUNGTON,<br />
                  COMUNICAÇÃO VISUAL<br />
                  QUE GERA CONEXÃO<br />
                  E RESULTADOS
                </h2>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          
        </div>
      </div>
    </section>;
};
export default About;