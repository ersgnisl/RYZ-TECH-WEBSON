import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="tag mb-4 inline-flex" aria-label={eyebrow}>
          {eyebrow}
        </p>
      )}
      <h2 className="display-md text-balance mb-4">
        {title}
        {titleHighlight && (
          <>
            {" "}
            <span className="gradient-text">{titleHighlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="body-lg text-[var(--text-secondary)] text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
