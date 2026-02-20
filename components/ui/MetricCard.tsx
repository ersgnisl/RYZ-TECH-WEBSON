import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string;
  description?: string;
  change?: string;
  positive?: boolean;
  className?: string;
}

export default function MetricCard({
  label,
  value,
  description,
  change,
  positive = true,
  className,
}: MetricCardProps) {
  return (
    <div className={cn("metric-card", className)}>
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
        {label}
      </p>
      <p className="text-3xl font-black tracking-tight gradient-text mb-1">
        {value}
      </p>
      {(change || description) && (
        <div className="flex items-center gap-1.5 mt-2">
          {change && (
            <span
              className={cn(
                "flex items-center gap-0.5 text-xs font-semibold",
                positive ? "text-emerald-400" : "text-rose-400"
              )}
            >
              {positive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {change}
            </span>
          )}
          {description && (
            <span className="text-xs text-[var(--text-muted)]">{description}</span>
          )}
        </div>
      )}
    </div>
  );
}
