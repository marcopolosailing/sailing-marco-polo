import Image from "next/image";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata = {
  title: "The Voyage — Sailing Marco Polo",
  description:
    "The route, the timeline, and the boat. Four years. Cape of Good Hope. No rush.",
};

export default function VoyagePage() {
  return (
    <main className="bg-[#0A0F1A]">
      <Nav />

      {/* Hero */}
      <section className="relative h-[65vh] flex items-end overflow-hidden">
        {/* PHOTO: Replace src with real image when available */}
        <Image
          src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80"
          alt="Open ocean"
          fill
          priority
          className="object-cover object-bottom"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-black/50 to-black/20" />
        <div className="relative z-10 px-6 md:px-12 pb-16">
          <span className="font-[family-name:var(--font-inter)] text-[#C8A96E] text-xs tracking-[0.3em] uppercase mb-4 block">
            The Voyage
          </span>
          <h1
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            The Voyage
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 px-5 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-px bg-[#C8A96E] mb-10" />
          <p
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-relaxed mb-6"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}
          >
            There is no fixed itinerary. That&apos;s the point.
          </p>
          <p className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/60 text-sm leading-relaxed">
            What follows is the broad shape of the journey — the seasons, the oceans, the general
            direction. The details will be decided by weather, curiosity, and whatever port feels
            right at the time.
          </p>
        </div>
      </section>

      {/* Route Map placeholder */}
      <section className="py-6 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* PHOTO: Replace with route map image when available */}
          <div className="aspect-[21/9] bg-[#2A3347] flex flex-col items-center justify-center gap-4 rounded-sm">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="1" className="opacity-40">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/30 text-sm tracking-widest uppercase text-center px-4">
              ROUTE MAP — coming soon
            </span>
          </div>
        </div>
      </section>

      {/* Phase 1 */}
      <section className="py-16 md:py-20 px-5 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-baseline gap-6 mb-8">
            <span className="font-[family-name:var(--font-cormorant)] text-[#C8A96E] text-5xl font-light leading-none">01</span>
            <div>
              <h2
                className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
              >
                Learning the Boat
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[#C8A96E] text-xs tracking-[0.2em] uppercase mt-1">
                Mediterranean — June to November 2026
              </p>
            </div>
          </div>
          <div className="space-y-4 font-[family-name:var(--font-inter)] text-[#F5EDD8]/65 text-sm leading-relaxed border-t border-[#2A3347] pt-8">
            <p>
              Marco Polo departs Vigo in May 2026, sailing south past Cape Finisterre, down the
              Portuguese coast, through the Strait of Gibraltar, and into the Mediterranean. The
              first solo passage is already a deadline — a friend&apos;s wedding in Rome in June.
              Marbella to Civitavecchia, solo, with a dog, and a suit in a dry bag.
            </p>
            <p>
              The Mediterranean months are about learning. Learning the boat, the systems, the
              rhythm of life offshore. The South of France, the Italian coast, the islands. Six
              months of sailing that feels like living.
            </p>
            <p>
              By November, Marco Polo is hauled out. Two months of winter work — rigging, systems,
              preparation. Everything that needs to be right before crossing an ocean.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 2 */}
      <section className="py-16 md:py-20 px-5 md:px-12" style={{ backgroundColor: "#0D1525" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-baseline gap-6 mb-8">
            <span className="font-[family-name:var(--font-cormorant)] text-[#C8A96E] text-5xl font-light leading-none">02</span>
            <div>
              <h2
                className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
              >
                The Atlantic
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[#C8A96E] text-xs tracking-[0.2em] uppercase mt-1">
                Canary Islands to the Caribbean — January 2027
              </p>
            </div>
          </div>
          <div className="space-y-4 font-[family-name:var(--font-inter)] text-[#F5EDD8]/65 text-sm leading-relaxed border-t border-[#2A3347] pt-8">
            <p>
              In January, the boat is back in the water and heading south. The Canary Islands —
              where sailors have been stopping to provision and wait for the trade winds since the
              age of discovery.
            </p>
            <p>
              Then the crossing. 2,700 nautical miles of open ocean. Trade winds. Flying fish.
              Night watches. The particular silence of being three weeks from the nearest land.
            </p>
            <p className="font-[family-name:var(--font-cormorant)] italic text-[#F5EDD8]/80 text-lg">
              Landfall in the Caribbean or the Bahamas — not yet decided. That&apos;s the beauty of it.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 3 */}
      <section className="py-16 md:py-20 px-5 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-baseline gap-6 mb-8">
            <span className="font-[family-name:var(--font-cormorant)] text-[#C8A96E] text-5xl font-light leading-none">03</span>
            <div>
              <h2
                className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
              >
                The World
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[#C8A96E] text-xs tracking-[0.2em] uppercase mt-1">
                2027 and beyond
              </p>
            </div>
          </div>
          <div className="space-y-4 font-[family-name:var(--font-inter)] text-[#F5EDD8]/65 text-sm leading-relaxed border-t border-[#2A3347] pt-8">
            <p>
              After the Caribbean, the route opens up completely. Panama and the Pacific. French
              Polynesia. Perhaps south through South America first. Perhaps not.
            </p>
            <p className="font-[family-name:var(--font-cormorant)] italic text-[#F5EDD8]/80 text-lg">
              The world is the plan. The only firm commitment is to keep going.
            </p>
          </div>
        </div>
      </section>

      {/* The Boat */}
      <section className="py-16 md:py-24 px-5 md:px-12" style={{ backgroundColor: "#0D1525" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <span className="font-[family-name:var(--font-inter)] text-[#C8A96E] text-xs tracking-[0.3em] uppercase">
              The Vessel
            </span>
          </div>
          <h2
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight mb-10 md:mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Marco Polo
          </h2>

          {/* Photo grid — exterior + interior side by side */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 mb-10 md:mb-16">
            {/* Exterior */}
            <div className="aspect-[4/3] relative rounded-sm overflow-hidden">
              <Image
                src="/boat-exterior.jpg"
                alt="Marco Polo — Hans Christian 38T, docked in marina"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 50vw, 600px"
              />
            </div>
            {/* Interior */}
            <div className="aspect-[4/3] relative rounded-sm overflow-hidden">
              <Image
                src="/boat-interior.jpg"
                alt="Marco Polo — solid teak interior, saloon and galley"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 50vw, 600px"
              />
            </div>
          </div>

          {/* Copy + specs */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Long-form copy */}
            <div className="space-y-5 font-[family-name:var(--font-inter)] text-[#F5EDD8]/65 text-sm leading-relaxed">
              <p>
                She was built in 1981, when boats were still made by hand, for people who intended
                to use them. A Hans Christian 38T cutter — heavy displacement, full keel, solid
                fibreglass from stem to stern. The kind of boat that serious sailors whisper about.
              </p>
              <p>
                The Hans Christian 38T has a reputation that precedes her. Designed by Robert Perry
                during an era when offshore bluewater cruising was a way of life rather than a
                lifestyle choice, she belongs to a lineage of boats that have crossed every ocean on
                earth and come back asking for more. She is slow by modern standards. She does not
                care.
              </p>
              <p>
                At 38 feet on deck, with a bowsprit that pushes her silhouette to 41 feet overall,
                she carries herself differently from other boats. The deep red antifouling below the
                waterline. The teak trim that catches the last of the evening light. The cutter rig
                — mainsail, genoa, and staysail — built for whatever the ocean decides to throw.
              </p>
              <p>
                Below deck, everything is solid teak. Dark, warm, purposeful. The kind of interior
                that makes a marina feel like home and an anchorage feel like arriving. Oval brass
                portholes either side of the saloon. A table wide enough for charts and long
                conversations at sea.
              </p>
              <p className="font-[family-name:var(--font-cormorant)] italic text-[#F5EDD8]/80 text-lg leading-relaxed">
                She is not a new boat. She was never meant to be.
              </p>
            </div>

            {/* Specs + closing line */}
            <div>
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { label: "Name", value: "Marco Polo" },
                  { label: "Designer", value: "Robert Perry" },
                  { label: "Builder", value: "Hans Christian" },
                  { label: "Type", value: "38T Cutter" },
                  { label: "LOA", value: "41ft (with bowsprit)" },
                  { label: "LWL", value: "38ft on deck" },
                  { label: "Year Built", value: "1981" },
                  { label: "Rig", value: "Cutter — main, genoa, staysail" },
                  { label: "Displacement", value: "Heavy — full keel" },
                  { label: "Hull", value: "Solid fibreglass" },
                  { label: "Interior", value: "Solid teak throughout" },
                  { label: "Portholes", value: "Oval brass" },
                ].map((spec) => (
                  <div key={spec.label} className="border-t border-[#2A3347] pt-4">
                    <span className="block font-[family-name:var(--font-inter)] text-[#C8A96E] text-xs tracking-widest uppercase mb-1">
                      {spec.label}
                    </span>
                    <span className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/70 text-sm">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Closing line */}
              <div className="border-t border-[#2A3347] pt-8">
                <p className="font-[family-name:var(--font-cormorant)] italic text-[#F5EDD8]/60 leading-relaxed"
                  style={{ fontSize: "clamp(1rem, 1.8vw, 1.3rem)" }}>
                  She is Marco Polo — named for the man who left everything familiar behind and kept
                  going anyway. A 1981 Hans Christian 38T cutter, a dog named Polo on the bow, and
                  a journey that&apos;s only just beginning. 🌊
                </p>
              </div>
            </div>
          </div>

          {/* Full-width hero boat shot */}
          <div className="mt-10 md:mt-16 aspect-[21/9] relative rounded-sm overflow-hidden">
            <Image
              src="/boat-exterior.jpg"
              alt="Marco Polo — Hans Christian 38T at anchor"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-5 md:px-12 border-t border-[#2A3347]">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="font-[family-name:var(--font-cormorant)] italic text-[#F5EDD8]/50 mb-8"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)" }}
          >
            We&apos;re not racing. We&apos;re not rushing. We&apos;re just going.
          </p>
          <Link
            href="/#subscribe"
            className="inline-block font-[family-name:var(--font-inter)] text-[#C8A96E] text-sm tracking-widest uppercase border-b border-[#C8A96E]/40 pb-1 hover:border-[#C8A96E] transition-colors"
          >
            Follow the journey →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
