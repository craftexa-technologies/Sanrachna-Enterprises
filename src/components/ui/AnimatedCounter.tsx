import useCountUp from "@/hooks/useCountUp";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) => {
  const { ref, count } = useCountUp({ end, duration });

  return (
    <div ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </div>
  );
};

export default AnimatedCounter;
