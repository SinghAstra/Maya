import { NAV } from "@/data/nav";

export function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center gap-[2vw]">
      {NAV.map((item) =>
        item.folder ? (
          <div key={item.label} className="relative group">
            <span className="nav-link cursor-pointer">{item.label}</span>
            <ul className="absolute left-0 top-full pt-3 hidden group-hover:block bg-white shadow-md border border-neutral-100 z-50">
              {item.folder.map((f) => (
                <li key={f.label}>
                  <a href={f.href}
                    className="block whitespace-nowrap py-[0.75em] px-[1em] text-3.5">
                    {f.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <a key={item.label} href={item.href} className="nav-link">
            {item.label}
          </a>
        )
      )}
    </nav>
  );
}
