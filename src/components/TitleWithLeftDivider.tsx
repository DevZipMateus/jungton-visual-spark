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
      
      {/* Line container with V notch */}
      <div className="flex-grow relative h-3">
        {/* Horizontal line */}
        <div className="absolute left-0 top-[10px] w-full h-[1.5px] bg-border z-0" />
        
        {/* V notch that cuts into the line */}
        <div 
          className="absolute left-[15px] top-[5px] w-[10px] h-[6px] bg-background z-10"
          style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}
        />
      </div>
    </div>
  );
};

export default TitleWithLeftDivider;
