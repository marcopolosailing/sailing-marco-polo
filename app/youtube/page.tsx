import Image from "next/image";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata = {
  title: "YouTube — Sailing Marco Polo",
  description:
    "Watch the journey unfold. A four-year circumnavigation on film. Channel launching June 2026.",
};

const videoPlaceholders = [
  {
    title: "Trailer — Sailing Marco Polo",
    description: "A glimpse of what's coming. The boat, the dog, the ocean.",
    duration: "2:34",
  },
  {
    title: "Why I'm Doing This",
    description:
      "Sitting at anchor off the Cornish coast, trying to explain something I barely understand myself.",
    duration: "12:04",
  },
  {
    title: "Meet Polo",
    description:
      "An introduction to the ship's dog. His opinions. His routines. His deeply held views on seabirds.",
    duration: "8:47",
  },
  {
    title: "The Boat Tour",
    description:
      "A full walkthrough of our home. Every corner, every system, every compromise we made.",
    duration: "18:22",
  },
  {
    title: "Preparing for Biscay",
    description: "The Bay of Biscay is the first real test. How we're getting ready.",
    duration: "14:15",
  },
  {
    title: "Departure Day — Sailing Marco Polo",
    description: "June 2026. We leave. Whatever that looks like.",
    duration: "Coming soon",
  },
];

export default function YouTubePage() {
  return (
    <main className="bg-[#0A0F1A]">
      <Nav />

      {/* Hero */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        {/* PHOTO: Replace src with real image when available */}
        <Image
          src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80"
          alt="Ocean cinematic"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <span className="font-[family-name:var(--font-inter)] text-[#C8A96E] text-xs tracking-[0.3em] uppercase mb-6 block">
            YouTube
          </span>
          <h1
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Watch the Journey Unfold
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/60 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Channel launching June 2026. Subscribe now to be notified the moment we release
            our first episode.
          </p>
          {/* YouTube subscribe placeholder */}
          <a
            href="#"
            aria-label="Subscribe on YouTube"
            className="inline-flex items-center gap-3 bg-[#E8634A] text-white px-8 py-4 font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase hover:bg-[#d45438] transition-colors"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="currentColor">
              <path d="M19.582 2.186A2.506 2.506 0 0 0 17.828.42C16.254 0 10 0 10 0S3.746 0 2.172.42A2.506 2.506 0 0 0 .418 2.186 26.37 26.37 0 0 0 0 7a26.37 26.37 0 0 0 .418 4.814A2.506 2.506 0 0 0 2.172 13.58C3.746 14 10 14 10 14s6.254 0 7.828-.42a2.506 2.506 0 0 0 1.754-1.766A26.37 26.37 0 0 0 20 7a26.37 26.37 0 0 0-.418-4.814zM8 10V4l5.196 3L8 10z" />
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </section>

      {/* Channel info */}
      <section className="py-16 px-6 md:px-12 border-b border-[#2A3347]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-[#2A3347] px-6 py-3 mb-6">
            <p className="font-[family-name:var(--font-inter)] text-[#C8A96E] text-xs tracking-widest uppercase">
              Channel launching June 2026 — subscribe to be notified first
            </p>
          </div>
          <p className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/60 text-sm leading-relaxed max-w-2xl mx-auto">
            One four-year circumnavigation, documented honestly. No highlight-reel sailing.
            Real passages, real weather, real mistakes, real moments. Weekly episodes when
            we&apos;re underway. Longer films from the major passages.
          </p>
        </div>
      </section>

      {/* Video grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight mb-12"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Coming to the Channel
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2A3347]">
            {videoPlaceholders.map((video, i) => (
              <div
                key={i}
                className="bg-[#0A0F1A] group hover:bg-[#0D1525] transition-colors cursor-pointer"
              >
                {/* Thumbnail placeholder */}
                {/* PHOTO: Replace src with real image when available */}
                <div className="aspect-video bg-[#2A3347] relative flex items-center justify-center">
                  {/* Play button */}
                  <div className="w-14 h-14 rounded-full bg-[#E8634A]/90 flex items-center justify-center group-hover:bg-[#E8634A] transition-colors group-hover:scale-110 transform duration-200">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="white"
                      className="ml-1"
                    >
                      <path d="M4 3.5L16 10L4 16.5V3.5Z" />
                    </svg>
                  </div>
                  {/* Duration badge */}
                  <span className="absolute bottom-3 right-3 bg-black/70 text-white font-[family-name:var(--font-inter)] text-xs px-2 py-1">
                    {video.duration}
                  </span>
                </div>
                {/* Info */}
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] text-xl font-light mb-2 group-hover:text-[#C8A96E] transition-colors">
                    {video.title}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/50 text-xs leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section
        className="py-20 px-6 md:px-12"
        style={{ backgroundColor: "#0D1525" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Don&apos;t miss the first episode.
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/60 text-sm leading-relaxed mb-8">
            Subscribe on YouTube. Or join the email list — we&apos;ll send you a note the day
            we launch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-[#E8634A] text-white px-7 py-3.5 font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase hover:bg-[#d45438] transition-colors"
            >
              Subscribe on YouTube
            </a>
            <Link
              href="/#subscribe"
              className="font-[family-name:var(--font-inter)] text-[#C8A96E] text-sm tracking-widest uppercase border-b border-[#C8A96E]/40 pb-1 hover:border-[#C8A96E] transition-colors"
            >
              Join the email list →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
