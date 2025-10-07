import { cn } from "@/lib/utils";

interface TitleWithCenteredDividerProps {
  title: string;
  className?: string;
}

const TitleWithCenteredDivider = ({ title, className }: TitleWithCenteredDividerProps) => {
  return (
    <div className={cn("relative text-center my-12 md:my-16", className)}>
      {/* A linha cinza que passa por trás */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-border z-0" />
      
      {/* Title with background */}
      <h2 className="inline-block relative bg-background px-5 md:px-6 z-10 font-bold uppercase text-lg md:text-xl">
        {title}
      </h2>
      
      {/* O "V" (entalhe) no meio da linha */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 w-[18px] h-3 bg-background z-0"
        style={{ 
          clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
          transform: 'translateX(-50%) translateY(calc(-50% + 1px))'
        }}
      />
    </div>
  );
};

export default TitleWithCenteredDivider;
