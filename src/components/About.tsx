const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-16 animate-fade-in">
          A Jungton
        </h2>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center animate-fade-in">
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
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  A JUNGTON<br />
                  COMUNICAÇÃO VISUAL<br />
                  QUE GERA CONEXÃO<br />
                  E RESULTADOS
                </h3>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 text-center">
            <p className="text-lg text-foreground/60 mb-2">Transforme sua marca</p>
            <a 
              href="https://wa.me/5551999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#25D366] hover:text-[#20BA5A] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Fale conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
