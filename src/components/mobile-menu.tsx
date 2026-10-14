import Image from "next/image";
import { NAV } from "@/data/nav";

export function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-cream z-50 lg:hidden overflow-y-auto">
      <div className="flex justify-between items-center" style={{ padding: "1.4vw 6vw", height: 99 }}>
        <Image src="/images/logo.png" alt="logo" width={160} height={60} style={{ height: 60, width: "auto" }} />
        <button aria-label="Close menu" onClick={onClose} style={{ fontSize: 32, lineHeight: 1 }}>
          ×
        </button>
      </div>
      <nav className="flex flex-col" style={{ padding: "0 6vw 6vw" }}>
        {NAV.map((item) =>
          item.folder ? (
            <div key={item.label} style={{ padding: "14px 0", borderBottom: "1px solid #ddd" }}>
              <div style={{ fontSize: 16, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                {item.label}
              </div>
              {item.folder.map((f) => (
                <a key={f.label} href={f.href} className="block" style={{ padding: "6px 0 6px 12px", fontSize: 15 }}>
                  {f.label}
                </a>
              ))}
            </div>
          ) : (
            <a key={item.label} href={item.href}
              style={{ padding: "14px 0", borderBottom: "1px solid #ddd", fontSize: 16, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {item.label}
            </a>
          )
        )}
      </nav>
    </div>
  );
}
