"use client";

import { useState } from "react";
import Link from "next/link";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileMenu } from "@/components/mobile-menu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 h-header w-full">
      <div className="relative z-50 h-full flex items-center justify-between bg-cream px-header-x">
        <Link href="/" aria-label="Dr. Maya Reynolds home" className="shrink-0">
          <span className="wordmark">Dr. Maya Reynolds</span>
          <span className="wordmark-sub">PsyD &middot; Clinical Psychology</span>
        </Link>

        <DesktopNav />

        <button
          className="lg:hidden flex flex-col items-center justify-center gap-1.5 size-burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <span className="text-close leading-none text-ink">×</span>
          ) : (
            <>
              <span className="block w-full h-0.5 bg-ink" />
              <span className="block w-full h-0.5 bg-ink" />
              <span className="block w-full h-0.5 bg-ink" />
            </>
          )}
        </button>
      </div>

      {menuOpen && <MobileMenu />}
    </header>
  );
}
