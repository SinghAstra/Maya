import type { ReactNode } from "react";

export function UnderlineButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="btn-primary">
      {children}
    </a>
  );
}
