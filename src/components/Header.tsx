"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileMenu } from "@/components/mobile-menu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50" style={{ height: 99, padding: "0 1.4vw" }}>
      <div className="h-full flex items-center justify-between">
        <Link href="/" aria-label="Conejo Valley Family Counseling home" className="shrink-0">
          <Image src="/images/logo.png" alt="Conejo Valley Counseling" width={200} height={75} priority
            style={{ height: 75, width: "auto" }} />
        </Link>

        <DesktopNav />

        <button
          className="lg:hidden flex flex-col justify-center gap-1.5"
          style={{ width: 34, height: 34 }}
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <span className="block w-full h-0.5 bg-ink" />
          <span className="block w-full h-0.5 bg-ink" />
          <span className="block w-full h-0.5 bg-ink" />
        </button>
      </div>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </header>
  );
}
