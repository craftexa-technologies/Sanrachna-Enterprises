import { cn } from "@/lib/utils";

interface ConstructionLoaderProps {
  className?: string;
}

const ConstructionLoader = ({ className }: ConstructionLoaderProps) => {
  return (
    <div className={cn("flex items-end gap-0.5 h-4", className)}>
      <div className="w-2 h-2 bg-primary-foreground rounded-sm construction-block-1" />
      <div className="w-2 h-2 bg-primary-foreground rounded-sm construction-block-2" />
      <div className="w-2 h-2 bg-primary-foreground rounded-sm construction-block-3" />
    </div>
  );
};

export default ConstructionLoader;
