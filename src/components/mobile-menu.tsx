import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV, CONTACT_HREF } from "@/data/nav";

const SLIDE = "menu-slide";
const MENU_TEXT = "menu-item";

export function MobileMenu({ onClose }: { onClose: () => void }) {
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [submenuLabel, setSubmenuLabel] = useState<string | null>(null);
  const [submenuEntered, setSubmenuEntered] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (openFolder) {
      const raf = requestAnimationFrame(() => requestAnimationFrame(() => setSubmenuEntered(true)));
      return () => cancelAnimationFrame(raf);
    }
    setSubmenuEntered(false);
  }, [openFolder]);

  const folder = NAV.find((n) => n.label === submenuLabel && n.folder);
  const open = openFolder !== null;

  return (
    <div className="fixed inset-0 bg-cream z-50 lg:hidden overflow-hidden flex flex-col">
      <div className="flex items-center justify-between h-15 py-4 px-6 shrink-0">
        <Image src="/images/logo.png" alt="Conejo Valley Counseling" width={160} height={60}
          className="h-15 w-auto" />
        <button aria-label="Close menu" onClick={onClose} className="text-close leading-none text-ink">
          ×
        </button>
      </div>

      <div className="relative flex-1 overflow-hidden">
        <nav
          className={`absolute inset-0 flex flex-col items-start justify-center px-menu-x overflow-y-auto ${SLIDE} ${open ? "-translate-x-full" : "translate-x-0"}`}
        >
          <div className="flex flex-col gap-menu py-10">
            {NAV.map((item) =>
              item.folder ? (
                <button
                  key={item.label}
                  onClick={() => {
                    setSubmenuLabel(item.label);
                    setOpenFolder(item.label);
                  }}
                  className={`flex items-center gap-4 text-left ${MENU_TEXT}`}
                >
                  {item.label}
                  <span className="text-neutral-400 text-chevron">›</span>
                </button>
              ) : (
                <a key={item.label} href={item.href} className={MENU_TEXT}>
                  {item.label}
                </a>
              )
            )}
          </div>
          <div className="absolute bottom-8 inset-x-0 flex justify-center">
            <a href={CONTACT_HREF} className="contact-pill">
              Contact
            </a>
          </div>
        </nav>

        {folder && (
          <nav
            className={`absolute inset-0 flex flex-col items-start px-menu-x pt-2 pb-8 overflow-y-auto ${SLIDE} ${submenuEntered ? "translate-x-0" : "translate-x-full"}`}
          >
            <button
              onClick={() => setOpenFolder(null)}
              className={`flex items-center gap-2 my-10 opacity-50 ${MENU_TEXT}`}
            >
              <span className="text-ink text-chevron">‹</span> Back
            </button>
            <div className="flex flex-col gap-menu pb-10">
              {folder.folder!.map((f) => (
                <a key={f.label} href={f.href} className={MENU_TEXT}>
                  {f.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
