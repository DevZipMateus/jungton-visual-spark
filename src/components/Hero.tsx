import { Button } from "@/components/ui/button";
import logo from "@/assets/jungton-logo.png";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import { useState, useEffect } from "react";
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [heroBanner1, heroBanner2];
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
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="mb-6 text-white">
            Jungton Comunicação Visual Ltda
          </h1>
          
          

          

          
        </div>
      </div>
    </section>;
};
export default Hero;