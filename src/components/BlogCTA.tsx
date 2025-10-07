import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import textureGrid from "@/assets/texture-grid.png";

const BlogCTA = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <img 
          src={textureGrid} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Decorative line with title and arrow */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-4">
              <div className="flex-1 h-px bg-foreground" />
              <h2 className="uppercase tracking-wider font-bold text-xl whitespace-nowrap">
                FIQUE POR DENTRO DAS NOVIDADES
              </h2>
              <div className="flex-1 h-px bg-foreground" />
            </div>
            <div className="flex justify-center mt-2">
              <svg className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12,17 7,12 17,12" />
              </svg>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
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
