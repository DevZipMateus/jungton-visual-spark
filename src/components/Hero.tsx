import { Button } from "@/components/ui/button";
import logo from "@/assets/jungton-logo.png";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import heroCarousel8 from "@/assets/hero-carousel-8.jpg";
import { useState, useEffect } from "react";
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [heroBanner1, heroBanner2, heroCarousel8];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Images Carousel */}
      {backgroundImages.map((image, index) => <div key={index} className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{
      opacity: currentImageIndex === index ? 1 : 0
    }}>
          <img src={image} alt={`Hero background ${index + 1}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>)}
      
      {/* Logo no canto superior esquerdo */}
      <div className="absolute top-24 left-8 z-20 animate-fade-in">
        <img src={logo} alt="Jungton" className="h-20 md:h-24 brightness-0 invert" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center animate-fade-in">
            {/* Left Column - Text with Orange Bar */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#FF8C00]" />
              <div className="pl-8 space-y-6 text-base leading-relaxed text-white/90">
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

            {/* Right Column - Highlighted Statement */}
            <div className="relative">
              <div className="absolute right-0 top-0 bottom-0 w-px bg-white/20 hidden md:block" />
              <div className="md:pr-8">
                <h2 className="text-3xl md:text-4xl leading-tight font-bold text-white">
                  <strong>A JUNGTON</strong><br />
                  COMUNICAÇÃO VISUAL<br />
                  QUE GERA CONEXÃO<br />
                  E RESULTADOS
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;