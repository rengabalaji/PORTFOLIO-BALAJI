import { cn } from "@/lib/utils";

const AnimatedGradient = () => {
  return (
    <div
      className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute -top-1/4 left-0 h-[50vmax] w-[50vmax] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl",
          "animate-[spin_20s_linear_infinite]"
        )}
      />
      <div
        className={cn(
          "absolute -bottom-1/4 right-0 h-[50vmax] w-[50vmax] translate-x-1/2 rounded-full bg-accent/20 blur-3xl",
          "animate-[spin_25s_linear_infinite_reverse]"
        )}
      />
    </div>
  );
};

export default AnimatedGradient;
