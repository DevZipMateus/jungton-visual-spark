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
