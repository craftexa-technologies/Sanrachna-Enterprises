import { Button, ButtonProps } from "@/components/ui/button";
import ConstructionLoader from "./ConstructionLoader";
import { cn } from "@/lib/utils";

interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean;
  loadingText?: string;
}

const LoadingButton = ({
  isLoading = false,
  loadingText = "Building...",
  children,
  className,
  disabled,
  ...props
}: LoadingButtonProps) => {
  return (
    <Button
      className={cn(className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <ConstructionLoader />
          {loadingText}
        </span>
      ) : (
        children
      )}
    </Button>
  );
};

export default LoadingButton;
