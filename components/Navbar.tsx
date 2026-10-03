"use client";

import { useState } from "react";
import { ArrowUpRight } from "@/components/Icons";

const links = [
  { label: "Discover", href: "#experience" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="section-shell">
        <nav aria-label="Primary navigation" className="flex items-center justify-between py-5 md:py-7">
          <a className="display-heading text-[1.65rem] tracking-[-0.06em]" href="#top">
            Vowventure<span className="text-[#c98679]">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a className="nav-link text-[0.72rem] font-semibold text-[#77716b] transition-colors hover:text-[#292724]" href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-5 md:flex">
            <a className="nav-link text-[0.72rem] font-semibold text-[#77716b] transition-colors hover:text-[#292724]" href="#attend">
              Attend a Wedding
            </a>
            <a className="button-primary min-h-0 px-4 py-2.5 text-[0.7rem]" href="#create">
              Create a Wedding <ArrowUpRight size={14} />
            </a>
          </div>

          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="menu-button flex h-10 w-10 items-center justify-center rounded-full border border-[#3b312a22] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden="true" className="flex w-4 flex-col gap-1.5">
              <span className={`h-px w-full bg-[#292724] transition-transform ${menuOpen ? "translate-y-1 rotate-45" : ""}`} />
              <span className={`h-px w-full bg-[#292724] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-px w-full bg-[#292724] transition-transform ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`} />
            </span>
          </button>
        </nav>

        {menuOpen ? (
          <div className="border-t border-[#3b312a22] pb-5 pt-4 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a className="mobile-nav-link rounded-lg px-3 py-3 text-sm font-semibold text-[#77716b] hover:bg-[#fffdfa] hover:text-[#292724]" href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a className="mobile-nav-link rounded-lg px-3 py-3 text-sm font-semibold text-[#77716b] hover:bg-[#fffdfa] hover:text-[#292724]" href="#attend" onClick={() => setMenuOpen(false)}>
                Attend a Wedding
              </a>
              <a className="button-primary mt-3" href="#create" onClick={() => setMenuOpen(false)}>
                Create a Wedding <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
