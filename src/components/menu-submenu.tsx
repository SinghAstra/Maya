import { forwardRef } from "react";
import { MenuFolderItems } from "@/components/menu-folder-items";
import type { NavItem } from "@/data/nav";

type Props = { items: NavItem[]; visible: boolean; onBack: () => void };

export const MenuSubmenu = forwardRef<HTMLElement, Props>(function MenuSubmenu(
  { items, visible, onBack },
  ref
) {
  const offset = visible ? "translate-x-0" : "translate-x-full";

  return (
    <nav
      ref={ref}
      aria-hidden={!visible}
      className={`absolute inset-0 flex flex-col items-start px-menu-x pt-header pb-8 overflow-y-auto menu-slide ${offset}`}
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 my-10 opacity-50 menu-item"
      >
        <span className="text-ink text-chevron">‹</span> Back
      </button>
      <MenuFolderItems items={items} />
    </nav>
  );
});
