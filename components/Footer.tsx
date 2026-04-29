import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1A] border-t border-[#2A3347] py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div>
          <Link
            href="/"
            className="text-[#C8A96E] font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.25em] uppercase hover:text-[#F5EDD8] transition-colors"
          >
            Sailing Marco Polo
          </Link>
          <p className="mt-1 text-[#F5EDD8]/40 font-[family-name:var(--font-inter)] text-xs tracking-wide">
            sailingmarcopolo.com
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <Link
            href="https://www.youtube.com/@SailingMarcoPolo"
            aria-label="YouTube"
            className="text-[#F5EDD8]/50 hover:text-[#C8A96E] transition-colors font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase"
          >
            YouTube
          </Link>
          <Link
            href="https://www.tiktok.com/@sailing.marco.pol"
            aria-label="TikTok"
            className="text-[#F5EDD8]/50 hover:text-[#C8A96E] transition-colors font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase"
          >
            TikTok
          </Link>
          <Link
            href="https://www.instagram.com/markbabraham"
            aria-label="Instagram"
            className="text-[#F5EDD8]/50 hover:text-[#C8A96E] transition-colors font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase"
          >
            Instagram
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-[#F5EDD8]/30 font-[family-name:var(--font-inter)] text-xs">
          © {new Date().getFullYear()} Sailing Marco Polo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
