const About = () => {
  return <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center animate-fade-in relative">
            {/* Left Column - Text with Orange Bar */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#FF8C00]" />
              <div className="pl-8 space-y-6 text-base leading-relaxed text-foreground/80">
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
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-border">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8">
                <svg viewBox="0 0 32 32" className="w-full h-full text-border">
                  <line x1="0" y1="0" x2="32" y2="32" stroke="currentColor" strokeWidth="1" />
                  <line x1="32" y1="0" x2="0" y2="32" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
            </div>

            {/* Right Column - Highlighted Statement */}
            <div className="relative">
              <div className="absolute right-0 top-0 bottom-0 w-px bg-border hidden md:block" />
              <div className="md:pr-8">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  <strong>A JUNGTON</strong><br />
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