import { cn } from "@/lib/utils";

const AnimatedGradient = () => {
  return (
    <div
      className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute -top-1/4 right-0 h-[80vmax] w-[80vmax] -translate-y-1/2 translate-x-1/4 rounded-full bg-primary/30 blur-3xl",
          "animate-[spin_40s_linear_infinite]"
        )}
      />
      <div
        className={cn(
          "absolute -bottom-1/4 left-0 h-[60vmax] w-[60vmax] translate-y-1/2 -translate-x-1/4 rounded-full bg-background/50 blur-3xl",
          "animate-[spin_45s_linear_infinite_reverse]"
        )}
      />
    </div>
  );
};

export default AnimatedGradient;
