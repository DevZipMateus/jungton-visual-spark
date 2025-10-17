import { Button } from "@/components/ui/button";
import logo from "@/assets/jungton-logo.png";
import heroNew1 from "@/assets/hero-new-1.jpg";
import heroNew2 from "@/assets/hero-new-2.jpg";
import heroNew3 from "@/assets/hero-new-3.jpg";
import heroNew4 from "@/assets/hero-new-4.jpg";
import heroNew5 from "@/assets/hero-new-5.jpg";
import heroNew6 from "@/assets/hero-new-6.jpg";
import heroNew7 from "@/assets/hero-new-7.jpg";
import heroNew8 from "@/assets/hero-new-8.jpg";
import { useState, useEffect } from "react";
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [heroNew1, heroNew2, heroNew3, heroNew4, heroNew5, heroNew6, heroNew7, heroNew8];
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
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images Carousel */}
      {backgroundImages.map((image, index) => <div key={index} className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{
        opacity: currentImageIndex === index ? 1 : 0,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
          <div className="absolute inset-0 bg-black/60" />
        </div>)}
      
      {/* Logo no canto superior esquerdo */}
      <div className="absolute top-24 left-4 md:left-8 z-20 animate-fade-in">
        <img src={logo} alt="Jungton" className="h-20 md:h-24 lg:h-32 brightness-0 invert" translate="no" />
      </div>

      {/* Content */}
      
    </section>
  </>;
};
export default Hero;