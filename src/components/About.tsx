const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12 animate-fade-in">
            A Jungton
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-foreground/80 animate-fade-in">
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

            <p className="text-xl font-semibold text-primary text-center pt-4">
              Transformamos ideias em experiências visuais
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
