import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="mb-6">
            Fique por dentro das novidades
          </h2>
          
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
