type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
};

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
}: AnimatedCounterProps) {
  const display =
    decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));

  return (
    <span className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
