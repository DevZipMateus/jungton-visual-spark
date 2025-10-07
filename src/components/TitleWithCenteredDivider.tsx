import { cn } from "@/lib/utils";

interface TitleWithCenteredDividerProps {
  title: string;
  className?: string;
}

const TitleWithCenteredDivider = ({ title, className }: TitleWithCenteredDividerProps) => {
  return (
    <div className={cn("relative text-center my-12 md:my-16", className)}>
      {/* Title with background */}
      <h2 className="inline-block relative bg-background px-6 md:px-8 z-10 font-bold uppercase text-lg md:text-xl mb-4">
        {title}
      </h2>
      
      {/* Line with downward V notch below title */}
      <div className="relative w-full">
        <svg 
          width="100%" 
          height="12" 
          preserveAspectRatio="none"
          viewBox="0 0 1000 12"
          className="w-full"
        >
          {/* Left line */}
          <line 
            x1="0" 
            y1="2" 
            x2="490" 
            y2="2" 
            stroke="hsl(var(--border))" 
            strokeWidth="1.5" 
          />
          {/* Downward V notch */}
          <polyline 
            points="490,2 500,10 510,2" 
            stroke="hsl(var(--border))" 
            strokeWidth="1.5" 
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
            stroke="hsl(var(--border))" 
            strokeWidth="1.5" 
          />
        </svg>
      </div>
    </div>
  );
};

export default TitleWithCenteredDivider;
