import type { CSSProperties, ReactNode } from "react";

export function Block({
  desktop,
  mobile,
  className = "",
  children,
}: {
  desktop: string;
  mobile: string;
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
