import { useRef, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  speed?: number;
  scale?: number;
}

const ParallaxImage = ({
  src,
  alt,
  className,
  containerClassName,
  speed = 0.15,
  scale = 1.2,
}: ParallaxImageProps) => {
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
    <div
      ref={containerRef}
      className={cn("overflow-hidden", containerClassName)}
    >
      <img
        src={src}
        alt={alt}
        className={cn("w-full h-full object-cover will-change-transform", className)}
        style={{
          transform: `translate3d(0, ${offset}px, 0) scale(${scale})`,
        }}
      />
    </div>
  );
};

export default ParallaxImage;
