
import { cn } from "@/lib/utils";
import { CSSProperties, ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
  glowing?: boolean;
  hoverable?: boolean;
  style?: CSSProperties;
}

const Card = ({
  className,
  children,
  glowing = false,
  hoverable = true,
  style,
}: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-lg bg-card text-card-foreground p-6 shadow-sm transition-all duration-300",
        hoverable && "card-hover",
        glowing && "animate-glow",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
