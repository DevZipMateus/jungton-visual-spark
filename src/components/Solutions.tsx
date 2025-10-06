import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OptimizedImage from "@/components/OptimizedImage";
import textureGrid from "@/assets/texture-grid.png";

const Solutions = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const solutions = [
    {
      title: "Arquitetura & Engenharia",
      description: "Soluções visuais para valorizar projetos, fachadas e interiores",
      image: "/imagens/arquitetura e engenharia/0808bb33-eb15-44b7-9289-1e48e5d19744.jpg",
      link: "/arquitetura-engenharia",
      services: [
        "Placas e sinalização técnica",
        "Totens e fachadas personalizadas",
        "Comunicação visual para stands e mostras",
        "Revestimentos e painéis decorativos",
      ],
    },
    {
      title: "Supermercados & Varejo",
      description: "Identidade forte para gerar impacto e estimular vendas",
      image: "/imagens/supermercado e varejo/2016-11-24 13.17.53-2.jpg",
      link: "/supermercados-varejo",
      services: [
        "Fachadas e luminosos",
        "Comunicação interna e PDV",
        "Adesivos, banners e displays promocionais",
        "Totens e sinalização de setores",
      ],
    },
    {
      title: "Saúde & Bem-estar",
      description: "Ambientes que inspiram confiança, credibilidade e bem-estar",
      image: "/imagens/saude e bem estar/0512b11e-fd73-41a3-836a-5ca62627c429.jpg",
      link: "/saude-bem-estar",
      services: [
        "Fachadas e placas de identificação",
        "Sinalização interna (consultórios, recepções, salas)",
        "Adesivos decorativos e privativos",
        "Comunicação para campanhas e eventos",
      ],
    },
    {
      title: "Empresas & Negócios em Geral",
      description: "Presença visual para marcas de todos os segmentos",
      image: "/imagens/empresas e negocios/01fd69d8-8302-4943-8dde-5dd456fc9acb.jpg",
      link: "/empresas-negocios",
      services: [
        "Fachadas e sinalização corporativa",
        "Totens e comunicação institucional",
        "Impressão digital de grande formato",
        "Adesivos e letras caixa",
      ],
    },
  ];

  // Preload critical images
  useEffect(() => {
    solutions.slice(0, 3).forEach((solution) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = solution.image;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <section id="solutions" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <img 
          src={textureGrid} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="mb-6 uppercase tracking-wide">
              SOLUÇÕES PERSONALIZADAS
            </h2>
            
            {/* Decorative line with icon */}
            <div className="relative max-w-md mx-auto mb-8">
              <div className="absolute left-0 right-0 top-1/2 h-px bg-border" />
              <div className="relative flex justify-center">
                <div className="bg-background px-2">
                  <svg className="w-4 h-4 text-border" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-justify text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
            Cada negócio tem sua identidade, seu público e suas próprias necessidades de comunicação visual. Por isso, na Jungton colocamos em prática, com excelência, os projetos desenvolvidos por escritórios de arquitetura, engenharia, agências de publicidade e empresas em geral.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-smooth hover:shadow-elegant cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-smooth hover:scale-110"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 text-secondary-foreground">
                    {solution.title}
                  </h3>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  
                  {expandedCard === index && (
                    <div className="space-y-2 animate-fade-in">
                      <p className="font-semibold text-sm text-primary mb-2">Serviços inclusos:</p>
                      <ul className="space-y-1">
                        {solution.services.map((service, idx) => (
                          <li key={idx} className="text-sm text-foreground/80 flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <Link to={solution.link}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-4"
                    >
                      Ver mais
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-lg font-semibold text-primary mt-16">
            Na Jungton, seu projeto ganha vida com qualidade e precisão
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
