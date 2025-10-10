import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OptimizedImage from "@/components/OptimizedImage";
import textureGrid from "@/assets/texture-grid.png";
import DecorativeLine from "@/components/DecorativeLine";

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
    <section id="solutions" className="py-20 relative overflow-hidden">
      {/* Background Texture - Full Width */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={textureGrid} 
          alt="" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            {/* Decorative line with title */}
            <div className="relative max-w-2xl mx-auto mb-6 md:mb-8 px-4">
              <DecorativeLine className="mb-4" />
              <h2 className="text-center text-base md:text-xl font-bold uppercase mb-8">
                SOLUÇÕES PERSONALIZADAS
              </h2>
            </div>
            
            {/* Full-width decorative line with V notch */}
            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mb-8">
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
          </div>
          
          <p className="text-center md:text-justify text-muted-foreground mb-12 md:mb-16 max-w-3xl mx-auto px-4">
            Cada negócio tem sua identidade, seu público e suas próprias necessidades de comunicação visual. Por isso, na Jungton colocamos em prática, com excelência, os projetos desenvolvidos por escritórios de arquitetura, engenharia, agências de publicidade e empresas em geral.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-0">
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
                  <h3 className="mb-4">{solution.description}</h3>
                  
                  {expandedCard === index && (
                    <div className="space-y-2 animate-fade-in">
                      <p className="font-semibold text-primary mb-2">Serviços inclusos:</p>
                      <ul className="space-y-1">
                        {solution.services.map((service, idx) => (
                          <li key={idx} className="text-foreground/80 flex items-start">
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

          {/* Bottom Section with Decorative Design */}
          <div className="mt-12 md:mt-16 max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              {/* Yellow Bar */}
              <div className="w-1 h-12 md:h-16 bg-primary flex-shrink-0" />
              
              {/* Text */}
              <div className="flex-shrink-0">
                <h2 className="leading-tight text-lg md:text-xl font-bold uppercase">
                  NA JUNGTON<br />
                  SEU PROJETO GANHA VIDA<br />
                  COM QUALIDADE E PRECISÃO
                </h2>
              </div>
              
              {/* Decorative Line with Diamond */}
              <DecorativeLine className="flex-grow ml-0 md:ml-4 w-full md:w-auto" />
            </div>
          </div>
          
          {/* Full-width decorative line with upward V notch at start */}
          <div className="relative w-full mt-8">
            <svg 
              width="100%" 
              height="16" 
              preserveAspectRatio="none"
              viewBox="0 0 1000 16"
              className="w-full"
            >
              {/* Line from start to V notch */}
              <line 
                x1="0" 
                y1="12" 
                x2="15" 
                y2="12" 
                stroke="hsl(var(--foreground))" 
                strokeWidth="2.5" 
              />
              {/* Upward V notch */}
              <polyline 
                points="15,12 25,2 35,12" 
                stroke="hsl(var(--foreground))" 
                strokeWidth="2.5" 
                fill="none"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
              {/* Line continuing to end */}
              <line 
                x1="35" 
                y1="12" 
                x2="1000" 
                y2="12" 
                stroke="hsl(var(--foreground))" 
                strokeWidth="2.5" 
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
