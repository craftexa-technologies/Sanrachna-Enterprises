import { useEffect, useRef, useState, useCallback } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
}

const easeOutQuart = (t: number): number => {
  return 1 - Math.pow(1 - t, 4);
};

const useCountUp = ({ end, duration = 2000, start = 0 }: UseCountUpOptions) => {
  const [count, setCount] = useState(start);
  const hasAnimatedRef = useRef(false);
  const ref = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();

  const animate = useCallback(() => {
    const startTime = performance.now();

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const currentCount = Math.floor(start + (end - start) * easedProgress);

      setCount(currentCount);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
  }, [end, duration, start]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            animate();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [animate, end]);

  return { ref, count };
};

export default useCountUp;
