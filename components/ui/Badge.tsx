import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "cyan" | "purple" | "green" | "amber";
  className?: string;
}

const variants = {
  default: "bg-indigo-500/10 border-indigo-500/25 text-indigo-300",
  cyan: "bg-cyan-500/10 border-cyan-500/25 text-cyan-300",
  purple: "bg-purple-500/10 border-purple-500/25 text-purple-300",
  green: "bg-emerald-500/10 border-emerald-500/25 text-emerald-300",
  amber: "bg-amber-500/10 border-amber-500/25 text-amber-300",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full border tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
