
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  badge?: string;
  align?: "left" | "center" | "right";
}

const SectionHeader = ({
  title,
  subtitle,
  className,
  badge,
  align = "left",
}: SectionHeaderProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("max-w-3xl mb-12", alignmentClasses[align], className)}>
      {badge && (
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 animate-fade-in">
          {badge}
        </span>
      )}
      <h2 className="section-title animate-fade-in">{title}</h2>
      {subtitle && (
        <p className="subtitle animate-fade-in delay-100">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
