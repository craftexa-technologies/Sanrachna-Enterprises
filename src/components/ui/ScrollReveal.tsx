import { ReactNode } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  className?: string;
}

const animationClasses: Record<AnimationType, string> = {
  "fade-up": "reveal-fade-up",
  "fade-down": "reveal-fade-down",
  "fade-left": "reveal-fade-left",
  "fade-right": "reveal-fade-right",
  "scale": "reveal-scale",
};

const ScrollReveal = ({
  children,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  className,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold });

  return (
    <div
      ref={ref}
      className={cn(animationClasses[animation], isVisible && "reveal-visible", className)}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
