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
      
      {/* Line with V notch - horizontal then vertical with upward V */}
      <div className="flex-grow relative">
        <svg 
          width="100%" 
          height="200" 
          preserveAspectRatio="none"
          viewBox="0 0 1000 200"
          className="w-full"
        >
          {/* Downward V notch at start */}
          <polyline 
            points="15,2 25,12 35,2" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="2.5" 
            fill="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          {/* Horizontal line continuing to near end */}
          <line 
            x1="35" 
            y1="2" 
            x2="980" 
            y2="2" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="2.5" 
          />
          {/* Vertical line going up */}
          <line 
            x1="980" 
            y1="2" 
            x2="980" 
            y2="140" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="2.5" 
          />
          {/* Upward V notch on vertical line */}
          <polyline 
            points="980,140 990,100 980,60" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="2.5" 
            fill="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          {/* Vertical line continuing up */}
          <line 
            x1="980" 
            y1="60" 
            x2="980" 
            y2="0" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="2.5" 
          />
        </svg>
      </div>
    </div>
  );
};

export default TitleWithLeftDivider;
