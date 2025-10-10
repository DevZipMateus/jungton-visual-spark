import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCTA = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in px-4">
          <h2 className="whitespace-normal md:whitespace-nowrap text-sm md:text-xl text-center mb-6 font-bold uppercase">
            FIQUE POR DENTRO DAS NOVIDADES
          </h2>
        </div>
      </div>
      
      {/* Full-width decorative line with downward V notch */}
      <div className="relative w-full mb-8">
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
          {/* Downward V notch */}
          <polyline 
            points="490,2 500,12 510,2" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="2.5" 
            fill="none"
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
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in px-4">
          
          <p className="text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            No nosso blog você encontra dicas, cases de sucesso, tendências 
            do mercado e insights sobre comunicação visual que podem transformar 
            o seu negócio.
          </p>

          <Button
            size="lg"
            asChild
            className="group"
          >
            <Link to="/blog">
              Confira nosso blog
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogCTA;
