import { useEffect, useState } from "react";
import { NAV, CONTACT_HREF, type NavEntry } from "@/data/nav";

export function MobileMenu() {
  const [submenu, setSubmenu] = useState<NavEntry | null>(null);
  const [visible, setVisible] = useState(false);

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
          <nav
            aria-hidden={!visible}
            className={`absolute inset-0 flex flex-col items-start px-menu-x pt-header pb-8 overflow-y-auto menu-slide ${visible ? "translate-x-0" : "translate-x-full"}`}
          >
            <button
              onClick={() => setVisible(false)}
              className="flex items-center gap-2 my-10 opacity-50 menu-item"
            >
              <span className="text-ink text-chevron">‹</span> Back
            </button>
            <div className="flex flex-col gap-menu pb-10">
              {submenu.folder.map((item) => (
                <a key={item.label} href={item.href} className="menu-item">
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
