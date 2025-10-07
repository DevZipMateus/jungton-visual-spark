import { Building2, Palette, Monitor, Users, TrendingUp, Home } from "lucide-react";
import textureGrid from "@/assets/texture-grid.png";
import DecorativeLine from "@/components/DecorativeLine";

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
      year: "2012",
      title: "Sede própria",
      description: "Mudança para sede própria, maior e mais completa, reunindo atendimento, administrativo e produção em um só lugar",
      icon: Home,
    },
    {
      year: "Hoje",
      title: "Referência regional",
      description: "Referência em comunicação visual, unindo tradição, inovação e design inteligente",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="history" className="py-20 relative overflow-hidden">
      {/* Background Texture - Full Width */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={textureGrid} 
          alt="" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section with Layout Similar to About */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center animate-fade-in relative mb-12 md:mb-16">
            {/* Left Column - Highlighted Statement with Vertical Decorative Line */}
            <div className="relative">
              {/* Vertical line with right-pointing V-notch */}
              <div className="absolute left-0 top-0 bottom-0 hidden md:block">
                <svg 
                  width="16" 
                  height="100%" 
                  preserveAspectRatio="none"
                  viewBox="0 0 16 1000"
                  className="h-full"
                >
                  {/* Line from top to V notch */}
                  <line 
                    x1="2" 
                    y1="0" 
                    x2="2" 
                    y2="300" 
                    stroke="hsl(var(--foreground))" 
                    strokeWidth="2.5" 
                  />
                  {/* Right-pointing V notch */}
                  <polyline 
                    points="2,300 12,310 2,320" 
                    stroke="hsl(var(--foreground))" 
                    strokeWidth="2.5" 
                    fill="none"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                  {/* Line continuing to bottom */}
                  <line 
                    x1="2" 
                    y1="320" 
                    x2="2" 
                    y2="1000" 
                    stroke="hsl(var(--foreground))" 
                    strokeWidth="2.5" 
                  />
                </svg>
              </div>
              <div className="md:pl-8">
                <h2 className="leading-tight text-2xl md:text-3xl font-bold uppercase">
                  NOSSA HISTÓRIA<br />
                  TRADIÇÃO E INOVAÇÃO<br />
                  EM CADA PROJETO
                </h2>
              </div>
            </div>

            {/* Center Decorative Line */}
            <DecorativeLine 
              orientation="vertical"
              className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-32"
            />

            {/* Right Column - Text with Orange Bar */}
            <div className="relative">
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-[#FF8C00]" />
              <div className="pr-6 md:pr-8 space-y-4 md:space-y-6 leading-relaxed text-foreground/80">
                <p>
                  Na Jungton, cada projeto é mais do que comunicação visual: é a soma de história, 
                  inovação e paixão pelo que fazemos. Nossa trajetória começou há mais de 50 anos 
                  e continua evoluindo.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Timeline - Horizontal */}
          <div className="hidden lg:block relative">
            {/* Line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-primary/20" />
            
            <div className="relative grid grid-cols-6 gap-4">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    {/* Year - Above the dot */}
                    <div className="text-center mb-4">
                      <div className="font-bold text-2xl text-primary">{milestone.year}</div>
                    </div>
                    
                    {/* Connector Dot */}
                    <div className="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                    
                    {/* Content - Below the dot */}
                    <div className="text-center pt-28">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
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
                    <h3 className="mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional History Text */}
          <div className="mt-12 md:mt-16 max-w-4xl mx-auto space-y-4 md:space-y-6 leading-relaxed text-foreground/80 text-justify px-4">
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

            <div className="relative mt-8 md:mt-12 pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#FF8C00]" />
              <h2 className="leading-tight text-xl md:text-2xl">
                A HISTÓRIA CONTINUA<br />
                E CADA NOVO DESAFIO É UM<br />
                CONVITE PARA INOVAR AINDA MAIS
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
