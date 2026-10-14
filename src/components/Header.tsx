"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type NavItem = { label: string; href: string };
type NavEntry = { label: string; href?: string; folder?: NavItem[] };

const NAV: NavEntry[] = [
  {
    label: "About",
    folder: [
      { label: "About", href: "https://www.conejovalleycounseling.com/therapists-newbury-park" },
      { label: "Jennifer Anderson, LMFT", href: "https://www.conejovalleycounseling.com/jennifer-anderson" },
      { label: "Candace Bletscher, AMFT", href: "https://www.conejovalleycounseling.com/candace-bletscher" },
      { label: "Samantha Johnson, AMFT", href: "https://www.conejovalleycounseling.com/samantha-johnson" },
      { label: "Autumn Bodily, AMFT", href: "https://www.conejovalleycounseling.com/autumn-bodily" },
      { label: "Rosa Gomez, AMFT", href: "https://www.conejovalleycounseling.com/rosa-gomez" },
      { label: "Chad Flores, AMFT", href: "https://www.conejovalleycounseling.com/chad-flores" },
      { label: "Simran Sidhu, AMFT", href: "https://www.conejovalleycounseling.com/simran-sidhu" },
      { label: "Jessica Jauregui, MA, AMFT", href: "https://www.conejovalleycounseling.com/jessica-jauregui" },
    ],
  },
  {
    label: "Specialties",
    folder: [
      { label: "Dissociation", href: "https://www.conejovalleycounseling.com/dissociative-identity-disorder-therapist-newbury-park" },
      { label: "Trauma", href: "https://www.conejovalleycounseling.com/trauma-counseling-newbury-park" },
      { label: "Special Needs Parenting", href: "https://www.conejovalleycounseling.com/counseling-special-needs-parents-newbury-park" },
      { label: "Couples", href: "https://www.conejovalleycounseling.com/couples-therapy" },
      { label: "Children & Teens", href: "https://www.conejovalleycounseling.com/children-and-teens" },
      { label: "Anxiety & Depression", href: "#" },
      { label: "Adoption", href: "https://www.conejovalleycounseling.com/adoption-therapy-ventura-county-ca" },
    ],
  },
  {
    label: "Methods",
    folder: [
      { label: "EMDR", href: "https://www.conejovalleycounseling.com/emdr-therapy-newbury-park" },
      { label: "Brainspotting", href: "https://www.conejovalleycounseling.com/brainspotting" },
      { label: "Somatic Therapy", href: "https://www.conejovalleycounseling.com/somatic-therapy" },
      { label: "Parts Work Therapy", href: "https://www.conejovalleycounseling.com/parts-work-therapy" },
    ],
  },
  { label: "FAQs", href: "https://www.conejovalleycounseling.com/faqs" },
  { label: "Contact", href: "https://www.conejovalleycounseling.com/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50" style={{ height: 99, padding: "0 1.4vw" }}>
      <div className="h-full flex items-center justify-between">
        <Link href="/" aria-label="Conejo Valley Family Counseling home" className="shrink-0">
          <Image src="/images/logo.png" alt="Conejo Valley Counseling" width={200} height={75} priority
            style={{ height: 75, width: "auto" }} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center" style={{ gap: "2vw" }}>
          {NAV.map((item) =>
            item.folder ? (
              <div key={item.label} className="relative group">
                <span className="nav-link cursor-pointer">{item.label}</span>
                <ul className="absolute left-0 top-full pt-3 hidden group-hover:block bg-white shadow-md border border-neutral-100 z-50">
                  {item.folder.map((f) => (
                    <li key={f.label}>
                      <a href={f.href}
                        className="block whitespace-nowrap"
                        style={{ padding: "0.75em 1em", fontSize: 14 }}>
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

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center gap-[6px]"
          style={{ width: 34, height: 34 }}
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-full h-[2px] bg-ink" />
          <span className="block w-full h-[2px] bg-ink" />
          <span className="block w-full h-[2px] bg-ink" />
        </button>
      </div>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-cream z-50 lg:hidden overflow-y-auto">
          <div className="flex justify-between items-center" style={{ padding: "1.4vw 6vw", height: 99 }}>
            <Image src="/images/logo.png" alt="logo" width={160} height={60} style={{ height: 60, width: "auto" }} />
            <button aria-label="Close menu" onClick={() => setMenuOpen(false)} style={{ fontSize: 32, lineHeight: 1 }}>
              ×
            </button>
          </div>
          <nav className="flex flex-col" style={{ padding: "0 6vw 6vw" }}>
            {NAV.map((item) =>
              item.folder ? (
                <div key={item.label} style={{ padding: "14px 0", borderBottom: "1px solid #ddd" }}>
                  <div style={{ fontSize: 16, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                    {item.label}
                  </div>
                  {item.folder.map((f) => (
                    <a key={f.label} href={f.href} className="block" style={{ padding: "6px 0 6px 12px", fontSize: 15 }}>
                      {f.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a key={item.label} href={item.href}
                  style={{ padding: "14px 0", borderBottom: "1px solid #ddd", fontSize: 16, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {item.label}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
