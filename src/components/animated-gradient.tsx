import { cn } from "@/lib/utils";

const AnimatedGradient = () => {
  return (
    <div
      className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute top-0 right-0 h-[100vmax] w-[100vmax] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/20 blur-3xl",
          "animate-[spin_40s_linear_infinite]"
        )}
      />
      <div
        className={cn(
          "absolute bottom-0 left-0 h-[80vmax] w-[80vmax] translate-y-1/2 -translate-x-1/2 rounded-full bg-neutral-800/40 blur-3xl",
          "animate-[spin_45s_linear_infinite_reverse]"
        )}
      />
    </div>
  );
};

export default AnimatedGradient;
