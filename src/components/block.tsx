import type { CSSProperties, ReactNode } from "react";

export function Block({
  d,
  m,
  className = "",
  style,
  children,
}: {
  d: string;
  m: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <div
      className={`fe-block ${className}`}
      style={{ ["--ad" as string]: d, ["--am" as string]: m, ...style } as CSSProperties}
    >
      {children}
    </div>
  );
}
