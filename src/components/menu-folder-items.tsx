import type { NavItem } from "@/data/nav";

export function MenuFolderItems({ items }: { items: NavItem[] }) {
  return (
    <div className="flex flex-col gap-menu pb-10">
      {items.map((item) => (
        <a key={item.label} href={item.href} className="menu-item">
          {item.label}
        </a>
      ))}
    </div>
  );
}
