import { ReactNode, useRef, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  backgroundElement?: ReactNode;
  speed?: number;
  overlay?: boolean;
  overlayClassName?: string;
}

const ParallaxSection = ({
  children,
  className,
  backgroundElement,
  speed = 0.3,
  overlay = true,
  overlayClassName,
}: ParallaxSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setOffset(0);
      return;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight / 2;
    const parallaxOffset = (elementCenter - viewportCenter) * speed;

    setOffset(parallaxOffset);
  }, [speed]);

  useEffect(() => {
    handleScroll();

    let rafId: number;
    const onScroll = () => {
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [handleScroll]);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      {/* Parallax Background */}
      {backgroundElement && (
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translate3d(0, ${offset}px, 0)`,
          }}
        >
          {backgroundElement}
        </div>
      )}

      {/* Overlay */}
      {overlay && (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80",
            overlayClassName
          )}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxSection;
