import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import architectureImg from "@/assets/solution-architecture.jpg";
import constructionImg from "@/assets/solution-construction.jpg";
import retailImg from "@/assets/solution-retail.jpg";
import healthImg from "@/assets/solution-health.jpg";
import corporateImg from "@/assets/solution-corporate.jpg";

const Solutions = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const solutions = [
    {
      title: "Arquitetura & Engenharia",
      description: "Soluções visuais para valorizar projetos, fachadas e interiores",
      image: architectureImg,
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
      image: retailImg,
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
      image: healthImg,
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
      image: corporateImg,
      services: [
        "Fachadas e sinalização corporativa",
        "Totens e comunicação institucional",
        "Impressão digital de grande formato",
        "Adesivos e letras caixa",
      ],
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-4 animate-fade-in">
            Soluções personalizadas
          </h2>
          
          <p className="text-center text-lg text-muted-foreground mb-4 max-w-3xl mx-auto">
            Cada negócio tem sua identidade, seu público e suas próprias necessidades de comunicação visual.
          </p>

          <p className="text-center text-base text-foreground/80 mb-16 max-w-2xl mx-auto">
            Por isso, na Jungton colocamos em prática, com excelência, os projetos desenvolvidos por 
            escritórios de arquitetura, engenharia, agências de publicidade e empresas em geral.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-smooth hover:shadow-elegant cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-smooth hover:scale-110"
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
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4"
                  >
                    {expandedCard === index ? "Ver menos" : "Ver mais"}
                  </Button>
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
