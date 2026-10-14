import Image from "next/image";
import { NAV } from "@/data/nav";

export function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-cream z-50 lg:hidden overflow-y-auto">
      <div className="flex justify-between items-center h-24.75 py-[1.4vw] px-[6vw]">
        <Image src="/images/logo.png" alt="logo" width={160} height={60} className="h-15 w-auto" />
        <button aria-label="Close menu" onClick={onClose} className="text-8 leading-none">
          ×
        </button>
      </div>
      <nav className="flex flex-col px-[6vw] pb-[6vw]">
        {NAV.map((item) =>
          item.folder ? (
            <div key={item.label} className="py-3.5 border-b border-[#ddd]">
              <div className="text-4 tracking-[0.1em] uppercase mb-2">
                {item.label}
              </div>
              {item.folder.map((f) => (
                <a key={f.label} href={f.href} className="block py-1.5 pl-3 text-3.75">
                  {f.label}
                </a>
              ))}
            </div>
          ) : (
            <a key={item.label} href={item.href}
              className="py-3.5 border-b border-[#ddd] text-4 tracking-[0.1em] uppercase">
              {item.label}
            </a>
          )
        )}
      </nav>
    </div>
  );
}
