"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5">
      {/* Gradient fade behind nav */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

      {/* Logo */}
      <Link
        href="/"
        className="relative z-10 text-[#C8A96E] font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.25em] uppercase hover:text-[#F5EDD8] transition-colors"
      >
        Sailing Marco Polo
      </Link>

      {/* Desktop nav links */}
      <div className="relative z-10 hidden md:flex items-center gap-8">
        {[
          { label: "Story", href: "/story" },
          { label: "The Voyage", href: "/voyage" },
          { label: "Blog", href: "/blog" },
          { label: "YouTube", href: "/youtube" },
          { label: "Partners", href: "/partners" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[#F5EDD8] font-[family-name:var(--font-inter)] text-sm tracking-wide hover:text-[#C8A96E] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile menu button */}
      <button
        className="relative z-10 md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-px bg-[#F5EDD8] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}
        />
        <span
          className={`block w-6 h-px bg-[#F5EDD8] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-px bg-[#F5EDD8] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 right-0 bg-[#0A0F1A]/95 backdrop-blur-sm pt-20 pb-8 px-6 flex flex-col gap-6 md:hidden z-0">
          {[
            { label: "Story", href: "/story" },
            { label: "The Voyage", href: "/voyage" },
            { label: "Blog", href: "/blog" },
            { label: "YouTube", href: "/youtube" },
            { label: "Partners", href: "/partners" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#F5EDD8] font-[family-name:var(--font-inter)] text-lg tracking-wide hover:text-[#C8A96E] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
