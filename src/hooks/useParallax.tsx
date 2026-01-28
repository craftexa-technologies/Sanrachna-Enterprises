import { useRef, useState, useEffect, useCallback } from "react";

interface UseParallaxOptions {
  speed?: number; // 0.1 = subtle, 0.5 = dramatic (negative for opposite direction)
  disabled?: boolean;
}

interface ParallaxStyle {
  transform: string;
}

export const useParallax = ({ speed = 0.3, disabled = false }: UseParallaxOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<ParallaxStyle>({ transform: "translate3d(0, 0, 0)" });

  const handleScroll = useCallback(() => {
    if (!ref.current || disabled) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate how far through the viewport the element is
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight / 2;
    const offset = (elementCenter - viewportCenter) * speed;

    setStyle({
      transform: `translate3d(0, ${offset}px, 0)`,
    });
  }, [speed, disabled]);

  useEffect(() => {
    if (disabled) return;

    // Initial calculation
    handleScroll();

    // Use requestAnimationFrame for smooth updates
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
  }, [handleScroll, disabled]);

  return { ref, style };
};

export default useParallax;
