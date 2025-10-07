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
      
      {/* Line with vertical start and horizontal continuation */}
      <div className="flex-grow relative">
        <svg 
          width="100%" 
          height="200" 
          preserveAspectRatio="none"
          viewBox="0 0 1000 200"
          className="w-full"
        >
          {/* Vertical line from top */}
          <line 
            x1="2" 
            y1="0" 
            x2="2" 
            y2="60" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="2.5" 
          />
          {/* Right-pointing V notch on vertical */}
          <polyline 
            points="2,60 16,100 2,140" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="2.5" 
            fill="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          {/* Vertical line continuing down to corner */}
          <line 
            x1="2" 
            y1="140" 
            x2="2" 
            y2="198" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="2.5" 
          />
          {/* Horizontal line continuing to end */}
          <line 
            x1="2" 
            y1="198" 
            x2="1000" 
            y2="198" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="2.5" 
          />
        </svg>
      </div>
    </div>
  );
};

export default TitleWithLeftDivider;
