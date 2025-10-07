import { cn } from "@/lib/utils";

interface DecorativeLineProps {
  className?: string;
  withDiamond?: boolean;
  orientation?: "horizontal" | "vertical";
}

const DecorativeLine = ({ 
  className, 
  withDiamond = true, 
  orientation = "horizontal" 
}: DecorativeLineProps) => {
  if (orientation === "vertical") {
    return (
      <div className={cn("relative flex items-center justify-center", className)}>
        <div className="w-px h-full bg-border" />
        {withDiamond && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-border rotate-45" />
        )}
      </div>
    );
  }

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div className="flex-1 h-px bg-border" />
      {withDiamond && (
        <div className="w-2 h-2 bg-border rotate-45 mx-4" />
      )}
      <div className="flex-1 h-px bg-border" />
    </div>
  );
};

export default DecorativeLine;
