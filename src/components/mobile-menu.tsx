import { useEffect, useRef, useState } from "react";
import { MenuSubmenu } from "@/components/menu-submenu";
import { NAV, CONTACT_HREF, type NavEntry } from "@/data/nav";

export function MobileMenu() {
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
    <div className="fixed inset-0 bg-cream z-40 lg:hidden overflow-hidden flex flex-col">
      <div className="relative flex-1 overflow-hidden">
        <nav
          aria-hidden={visible}
          className={`absolute inset-0 flex flex-col items-start justify-center px-menu-x pt-header overflow-y-auto menu-slide ${visible ? "-translate-x-full" : "translate-x-0"}`}
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
