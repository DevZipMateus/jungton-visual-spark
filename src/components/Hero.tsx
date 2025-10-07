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
  return <>
      {/* Full-width decorative line at header/hero division */}
      <div className="relative w-full bg-background">
        <svg 
          width="100%" 
          height="16" 
          preserveAspectRatio="none"
          viewBox="0 0 1000 16"
          className="w-full"
        >
          {/* Left line */}
          <line 
            x1="0" 
            y1="2" 
            x2="490" 
            y2="2" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="2.5" 
          />
          {/* Downward V notch with white fill */}
          <polyline 
            points="490,2 500,12 510,2" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="2.5" 
            fill="white"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          {/* Right line */}
          <line 
            x1="510" 
            y1="2" 
            x2="1000" 
            y2="2" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="2.5" 
          />
        </svg>
      </div>
      
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images Carousel */}
      {backgroundImages.map((image, index) => <div key={index} className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{
      opacity: currentImageIndex === index ? 1 : 0
    }}>
          <img src={image} alt={`Hero background ${index + 1}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>)}
      
      {/* Logo no canto superior esquerdo */}
      <div className="absolute top-24 left-4 md:left-8 z-20 animate-fade-in">
        <img src={logo} alt="Jungton" className="h-16 md:h-20 lg:h-24 brightness-0 invert" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in px-4">
          <h1 className="mb-6 text-white text-xl md:text-2xl">
            Jungton Comunicação Visual Ltda
          </h1>
          
          

          

          
        </div>
      </div>
    </section>
  </>;
};
export default Hero;