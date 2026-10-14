import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV, CONTACT_HREF } from "@/data/nav";

export function MobileMenu({ onClose }: { onClose: () => void }) {
  const [openFolder, setOpenFolder] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const folder = NAV.find((n) => n.label === openFolder && n.folder);

  return (
    <div className="fixed inset-0 bg-cream z-50 lg:hidden overflow-y-auto flex flex-col">
      <div className="flex items-center justify-between h-15 py-4 px-6">
        <Image src="/images/logo.png" alt="Conejo Valley Counseling" width={160} height={60}
          className="h-15 w-auto" />
        <button aria-label="Close menu" onClick={onClose} className="text-[24px] leading-none text-ink">
          ×
        </button>
      </div>

      {folder ? (
        <nav className="flex flex-col px-10 py-8">
          <button
            onClick={() => setOpenFolder(null)}
            className="self-start uppercase text-sm tracking-widest text-neutral-500 mb-6"
          >
            ‹ Back
          </button>
          <div className="uppercase text-sm tracking-widest text-neutral-400 mb-2">{folder.label}</div>
          {folder.folder!.map((f) => (
            <a key={f.label} href={f.href} className="text-sm uppercase tracking-widest py-2.5 px-3.5 text-ink">
              {f.label}
            </a>
          ))}
        </nav>
      ) : (
        <>
          <nav className="flex flex-col gap-8 px-10 py-10 flex-1 justify-center">
            {NAV.map((item) =>
              item.folder ? (
                <button
                  key={item.label}
                  onClick={() => setOpenFolder(item.label)}
                  className="flex items-center gap-3 uppercase text-[28px] tracking-wider text-left text-ink"
                >
                  {item.label}
                  <span className="text-neutral-400 text-[20px]">›</span>
                </button>
              ) : (
                <a key={item.label} href={item.href} className="uppercase text-[28px] tracking-wider text-ink">
                  {item.label}
                </a>
              )
            )}
          </nav>
          <div className="pb-12 flex justify-center">
            <a
              href={CONTACT_HREF}
              className="rounded-full border border-neutral-400 px-12 py-3.5 uppercase tracking-widest text-xs text-neutral-500"
            >
              Contact
            </a>
          </div>
        </>
      )}
    </div>
  );
}
