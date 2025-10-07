import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Solutions from "@/components/Solutions";
import BlogCTA from "@/components/BlogCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Decorative line at header/hero division */}
      <div className="fixed top-20 left-0 right-0 w-full z-40">
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
          {/* Downward V notch - two separate lines */}
          <line 
            x1="490" 
            y1="2" 
            x2="500" 
            y2="12" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="2.5" 
          />
          <line 
            x1="500" 
            y1="12" 
            x2="510" 
            y2="2" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="2.5" 
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
      
      <main>
        <Hero />
        <About />
        <Timeline />
        <Solutions />
        <BlogCTA />
        <Contact />
      </main>
      
      {/* Monte Site Badge Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div id="montesite-footer-badge" className="flex justify-center"></div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
