import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MenuSubmenu } from "@/components/menu-submenu";
import { NAV, CONTACT_HREF, type NavEntry } from "@/data/nav";

export function MobileMenu({ onClose }: { onClose: () => void }) {
  const [submenu, setSubmenu] = useState<NavEntry | null>(null);
  const [visible, setVisible] = useState(false);
  const submenuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const open = (entry: NavEntry) => {
    setSubmenu(entry);
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  };

  const close = () => {
    setVisible(false);
    submenuRef.current?.addEventListener(
      "transitionend",
      () => setSubmenu(null),
      { once: true }
    );
  };

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
          aria-hidden={visible}
          className={`absolute inset-0 flex flex-col items-start justify-center px-menu-x overflow-y-auto menu-slide ${visible ? "-translate-x-full" : "translate-x-0"}`}
        >
          <div className="flex flex-col gap-menu py-10">
            {NAV.map((item) =>
              item.folder ? (
                <button
                  key={item.label}
                  onClick={() => open(item)}
                  className="flex items-center gap-4 text-left menu-item"
                >
                  {item.label}
                  <span className="text-neutral-400 text-chevron">›</span>
                </button>
              ) : (
                <a key={item.label} href={item.href} className="menu-item">
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

        {submenu?.folder && (
          <MenuSubmenu ref={submenuRef} items={submenu.folder} visible={visible} onBack={close} />
        )}
      </div>
    </div>
  );
}
