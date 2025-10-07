import { cn } from "@/lib/utils";

interface TitleWithLeftDividerProps {
  subtitle: string;
  title: string;
  className?: string;
}

const TitleWithLeftDivider = ({ subtitle, title, className }: TitleWithLeftDividerProps) => {
  return (
    <div className={cn("flex items-center my-12 md:my-16 w-full", className)}>
      {/* Text with vertical bar */}
      <div className="border-l-4 border-foreground pl-4 md:pl-6 mr-4 md:mr-6 whitespace-nowrap">
        <div className="text-sm md:text-base text-muted-foreground leading-tight">
          {subtitle}
        </div>
        <div className="text-xl md:text-2xl font-bold text-foreground leading-tight">
          {title}
        </div>
      </div>
      
      {/* Line with V notch at start and chevron at end */}
      <div className="flex-grow relative h-3">
        <svg 
          width="100%" 
          height="12" 
          preserveAspectRatio="none"
          className="absolute top-1/2 -translate-y-1/2"
        >
          <path 
            d="M 0 11 L 15 11 L 20 6 L 25 11 L 5000 11" 
            stroke="hsl(var(--border))" 
            strokeWidth="1.5" 
            fill="none" 
          />
        </svg>
      </div>
    </div>
  );
};

export default TitleWithLeftDivider;
