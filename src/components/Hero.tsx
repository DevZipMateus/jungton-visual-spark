import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="mb-6">
            Jungton Comunicação Visual Ltda
          </h1>
          
          <h2 className="mb-8 text-muted-foreground font-normal">
            Comunicação visual que gera conexão e resultados
          </h2>

          <p className="text-lg text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Na Jungton, temos soluções em comunicação visual que valorizam espaços, marcas e serviços. 
            Combinamos tecnologia, design inteligente e mão de obra especializada para entregar resultados 
            que unem estética, funcionalidade e credibilidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              onClick={() => scrollToSection("solutions")}
            >
              Conheça nossas soluções
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <a href="https://wa.me/5555991630953" target="_blank" rel="noopener noreferrer">
                Fale conosco
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
