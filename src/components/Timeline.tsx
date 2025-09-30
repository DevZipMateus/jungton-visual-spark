import { Building2, Palette, Monitor, Users, TrendingUp } from "lucide-react";

const Timeline = () => {
  const milestones = [
    {
      year: "1970",
      title: "O começo",
      description: "Cristovão Hugo Jungton inicia o trabalho artístico com pintura manual de logotipos",
      icon: Palette,
    },
    {
      year: "1981",
      title: "Fundação oficial",
      description: "Fundação da Jungton Publicidade, que mais tarde se tornaria Jungton Comunicação Visual",
      icon: Building2,
    },
    {
      year: "1994",
      title: "Era digital",
      description: "Chegada da tecnologia digital com o primeiro plotter de recorte",
      icon: Monitor,
    },
    {
      year: "2000",
      title: "Nova gestão",
      description: "Ana Cristina e Zélia Maria assumem a gestão e aceleram a modernização",
      icon: Users,
    },
    {
      year: "Hoje",
      title: "Referência regional",
      description: "Referência em comunicação visual, unindo tradição, inovação e design inteligente",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="history" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-4 animate-fade-in">
            Nossa história
          </h2>
          
          <p className="text-center text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
            Na Jungton, cada projeto é mais do que comunicação visual: é a soma de história, 
            inovação e paixão pelo que fazemos. Nossa trajetória começou há mais de 50 anos 
            e continua evoluindo.
          </p>

          {/* Desktop Timeline - Horizontal */}
          <div className="hidden lg:block relative">
            {/* Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2" />
            
            <div className="relative grid grid-cols-5 gap-4">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    {/* Connector Dot */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                    
                    {/* Content */}
                    <div className="text-center pt-24">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="font-bold text-2xl text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="lg:hidden relative">
            {/* Line */}
            <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-primary/20" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <div key={index} className="relative pl-20 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    {/* Connector Dot */}
                    <div className="absolute left-6 top-8 w-5 h-5 bg-primary rounded-full border-4 border-background z-10" />
                    
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-3">
                      <Icon className="w-7 h-7" />
                    </div>
                    
                    {/* Content */}
                    <div className="font-bold text-xl text-primary mb-1">{milestone.year}</div>
                    <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional History Text */}
          <div className="mt-16 max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              De São Borja a Santa Maria, da pintura manual aos mais avançados recursos digitais, 
              crescemos junto com as transformações do mercado. O olhar cuidadoso e criativo que 
              marcou nosso início continua presente até hoje.
            </p>
            
            <p>
              Hoje, a Jungton é referência em comunicação visual em Santa Maria e região, entregando 
              muito mais do que peças gráficas. Nossos clientes e parceiros depositam na Jungton sua 
              confiança de que entregaremos dentro do prazo e com a qualidade de sempre.
            </p>

            <p className="text-xl font-semibold text-primary text-center pt-4">
              A história da Jungton continua — e cada novo desafio é um convite para inovar ainda mais
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
