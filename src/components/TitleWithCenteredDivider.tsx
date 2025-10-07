import { cn } from "@/lib/utils";

interface TitleWithCenteredDividerProps {
  title: string;
  className?: string;
}

const TitleWithCenteredDivider = ({ title, className }: TitleWithCenteredDividerProps) => {
  return (
    <div className={cn("relative text-center my-12 md:my-16", className)}>
      {/* Background line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2" />
      
      {/* Title with background */}
      <h2 className="inline-block relative bg-background px-6 md:px-8 z-10 font-bold uppercase text-lg md:text-xl">
        {title}
      </h2>
      
      {/* V-shaped notch */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-px w-5 h-3 bg-background z-0"
        style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
      />
    </div>
  );
};

export default TitleWithCenteredDivider;
