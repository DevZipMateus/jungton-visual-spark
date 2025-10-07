import { cn } from "@/lib/utils";
import dividerImage from "@/assets/divider-v-notch.png";

interface TitleWithCenteredDividerProps {
  title: string;
  className?: string;
  showImage?: boolean;
}

const TitleWithCenteredDivider = ({ title, className, showImage = false }: TitleWithCenteredDividerProps) => {
  return (
    <div className={cn("relative text-center my-12 md:my-16", className)}>
      {!showImage ? (
        <>
          {/* Title with background */}
          <h2 className="inline-block relative bg-background px-5 md:px-6 z-10 font-bold uppercase text-lg md:text-xl mb-4">
            {title}
          </h2>
          
          {/* Decorative line with centered V notch */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
            <svg 
              width="100%" 
              height="16" 
              preserveAspectRatio="none"
              viewBox="0 0 1000 16"
              className="w-full"
            >
              {/* Left line */}
              <line 
                x1="0" 
                y1="2" 
                x2="490" 
                y2="2" 
                stroke="hsl(var(--border))" 
                strokeWidth="2.5" 
              />
              {/* Downward V notch */}
              <polyline 
                points="490,2 500,12 510,2" 
                stroke="hsl(var(--border))" 
                strokeWidth="2.5" 
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
                strokeWidth="2.5" 
              />
            </svg>
          </div>
        </>
      ) : (
        <>
          {/* Title */}
          <h2 className="inline-block relative bg-background px-5 md:px-6 z-10 font-bold uppercase text-lg md:text-xl mb-4">
            {title}
          </h2>
          {/* Decorative divider image */}
          <div className="flex justify-center">
            <img 
              src={dividerImage} 
              alt="" 
              className="w-full max-w-md h-auto"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TitleWithCenteredDivider;
