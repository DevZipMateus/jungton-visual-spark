import { cn } from "@/lib/utils";

interface TitleWithLeftDividerProps {
  subtitle: string;
  title: string;
  className?: string;
}

const TitleWithLeftDivider = ({ subtitle, title, className }: TitleWithLeftDividerProps) => {
  return (
    <div className={cn("flex items-center gap-4 md:gap-6 my-12 md:my-16 w-full", className)}>
      {/* Text with vertical bar */}
      <div className="flex-shrink-0 border-l-4 border-foreground pl-4 md:pl-6 whitespace-nowrap">
        <div className="text-sm md:text-base text-muted-foreground leading-tight">
          {subtitle}
        </div>
        <div className="text-xl md:text-2xl font-bold text-foreground leading-tight">
          {title}
        </div>
      </div>
      
      {/* Line with V notch */}
      <div className="flex-grow relative">
        <svg 
          width="100%" 
          height="16" 
          preserveAspectRatio="none"
          viewBox="0 0 1000 16"
          className="w-full"
        >
          {/* Downward V notch at start */}
          <polyline 
            points="15,2 25,12 35,2" 
            stroke="hsl(var(--border))" 
            strokeWidth="2.5" 
            fill="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          {/* Line continuing to end */}
          <line 
            x1="35" 
            y1="2" 
            x2="1000" 
            y2="2" 
            stroke="hsl(var(--border))" 
            strokeWidth="2.5" 
          />
        </svg>
      </div>
    </div>
  );
};

export default TitleWithLeftDivider;
