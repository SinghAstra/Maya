import type { CSSProperties, ReactNode } from "react";

export type GridArea = `${number}/${number}/${number}/${number}`;

export function Block({
  desktop,
  mobile,
  className = "",
  children,
}: {
  desktop: GridArea;
  mobile: GridArea;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`fe-block ${className}`}
      style={{ "--ad": desktop, "--am": mobile } as CSSProperties}
    >
      {children}
    </div>
  );
}
