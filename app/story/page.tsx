import Image from "next/image";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata = {
  title: "The Story — Sailing Marco Polo",
  description:
    "The full story of Mark and Polo — how a failed startup led to a four-year circumnavigation.",
};

export default function StoryPage() {
  return (
    <main className="bg-[#0A0F1A]">
      <Nav />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        {/* PHOTO: Replace src with real image when available */}
        <Image
          src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80"
          alt="Ocean horizon"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-black/50 to-black/20" />
        <div className="relative z-10 px-6 md:px-12 pb-16 max-w-4xl">
          <span className="font-[family-name:var(--font-inter)] text-[#C8A96E] text-xs tracking-[0.3em] uppercase mb-4 block">
            The Story
          </span>
          <h1
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            The Story
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-px bg-[#C8A96E] mb-10" />
          <p
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-relaxed"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}
          >
            This isn&apos;t a story about sailing. It&apos;s a story about what happens when everything
            you thought you wanted turns out to be exactly the wrong thing.
          </p>
        </div>
      </section>

      {/* Chapter 1 */}
      <section className="py-16 px-6 md:px-12 border-t border-[#2A3347]">
        <div className="max-w-3xl mx-auto">
          <span className="font-[family-name:var(--font-inter)] text-[#C8A96E] text-xs tracking-[0.3em] uppercase mb-6 block">
            Chapter I
          </span>
          <h2
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight mb-8"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            The Grind
          </h2>
          <div className="space-y-5 font-[family-name:var(--font-inter)] text-[#F5EDD8]/70 text-base leading-relaxed">
            <p>
              Mark spent his twenties in a particular kind of fog — the kind that looks from the
              outside like ambition. Pitch decks, angel rounds, incubators, accelerators. The whole
              vocabulary of a generation that confused motion with direction.
            </p>
            <p>
              He built things. Good things, some of them. A logistics startup in 2018 that got to
              Series A before the lead investor pulled out two days before close. A SaaS tool that
              found product-market fit and then watched the market shift. The usual war stories.
              The kind that sound impressive at conferences and feel hollow at 3am.
            </p>
            <p>
              By thirty-two, he&apos;d achieved everything he&apos;d set out to achieve, and none of it
              was what he wanted.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <blockquote
            className="font-[family-name:var(--font-cormorant)] italic text-[#C8A96E] text-center leading-relaxed"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
          >
            &ldquo;It wasn&apos;t burnout. It was something quieter than that. A slow realisation that
            I&apos;d been running toward a finish line that didn&apos;t exist.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Image placeholder */}
      <section className="py-8 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* PHOTO: Replace src with real image when available */}
          <div className="aspect-[16/7] bg-[#2A3347] flex items-center justify-center">
            <span className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/30 text-sm tracking-widest uppercase">
              PHOTO — Mark at the helm, coming soon
            </span>
          </div>
          <p className="mt-3 font-[family-name:var(--font-inter)] text-[#F5EDD8]/30 text-xs italic">
            Somewhere in the Atlantic. The beginning.
          </p>
        </div>
      </section>

      {/* Chapter 2 */}
      <section className="py-16 px-6 md:px-12 border-t border-[#2A3347]">
        <div className="max-w-3xl mx-auto">
          <span className="font-[family-name:var(--font-inter)] text-[#C8A96E] text-xs tracking-[0.3em] uppercase mb-6 block">
            Chapter II
          </span>
          <h2
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight mb-8"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            The Pivot Nobody Writes Case Studies About
          </h2>
          <div className="space-y-5 font-[family-name:var(--font-inter)] text-[#F5EDD8]/70 text-base leading-relaxed">
            <p>
              He bought a boat on a Tuesday. Not because he knew how to sail — he didn&apos;t, not
              really. Not because he had a plan. He didn&apos;t have one of those either. He bought a
              boat because standing in a marina in Falmouth on a grey February afternoon, watching a
              singlehander come in off a three-week Atlantic crossing, he felt something he hadn&apos;t
              felt in years.
            </p>
            <p>
              Alive. Interested. Present.
            </p>
            <p>
              He spent fourteen months learning. RYA courses. Weekend passages. A terrifying night
              off the Brittany coast that taught him more about himself than three years of therapy.
              He fixed things. He broke things. He fixed them again. The boat became a project, and
              then a home, and then a destination.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote 2 */}
      <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#0D1525" }}>
        <div className="max-w-4xl mx-auto">
          <blockquote
            className="font-[family-name:var(--font-cormorant)] italic text-[#F5EDD8]/80 text-center leading-relaxed"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
          >
            &ldquo;The ocean doesn&apos;t care about your series funding. It doesn&apos;t care about your
            runway or your burn rate. It cares whether you know what you&apos;re doing, and it will
            tell you immediately if you don&apos;t.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Chapter 3 — Polo */}
      <section className="py-16 px-6 md:px-12 border-t border-[#2A3347]">
        <div className="max-w-3xl mx-auto">
          <span className="font-[family-name:var(--font-inter)] text-[#C8A96E] text-xs tracking-[0.3em] uppercase mb-6 block">
            Chapter III
          </span>
          <h2
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight mb-8"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Enter Polo
          </h2>
          <div className="space-y-5 font-[family-name:var(--font-inter)] text-[#F5EDD8]/70 text-base leading-relaxed">
            <p>
              Polo arrived without ceremony, the way the best things usually do. A rescue from a
              shelter outside Bristol. Three years old, opinions already formed, zero interest in
              compromise. He sized Mark up in about four seconds and decided he was acceptable. That
              was eighteen months ago.
            </p>
            <p>
              Polo&apos;s first sail was a force seven squall in the Irish Sea. He was unimpressed.
              He has been unimpressed by most things since — except breakfast, and the occasional
              seabird, which he monitors with a professionalism that borders on obsession.
            </p>
            <p>
              He is, by any measure, the ideal sailing companion. He doesn&apos;t second-guess the
              weather routing. He doesn&apos;t have opinions about anchorages. He doesn&apos;t need Wi-Fi.
              He watches the horizon with a patience that Mark is still learning.
            </p>
          </div>
        </div>
      </section>

      {/* Image placeholder 2 */}
      <section className="py-8 px-6 md:px-12">
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4">
          {/* PHOTO: Replace src with real image when available */}
          <div className="aspect-square bg-[#2A3347] flex items-center justify-center">
            <span className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/30 text-xs tracking-widest uppercase text-center px-4">
              POLO ON DECK — photo coming soon
            </span>
          </div>
          {/* PHOTO: Replace src with real image when available */}
          <div className="aspect-square bg-[#2A3347] flex items-center justify-center">
            <span className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/30 text-xs tracking-widest uppercase text-center px-4">
              MARK + POLO — photo coming soon
            </span>
          </div>
        </div>
      </section>

      {/* What comes next */}
      <section className="py-16 px-6 md:px-12 border-t border-[#2A3347]">
        <div className="max-w-3xl mx-auto">
          <span className="font-[family-name:var(--font-inter)] text-[#C8A96E] text-xs tracking-[0.3em] uppercase mb-6 block">
            What Comes Next
          </span>
          <h2
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight mb-8"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            June 2026. The departure.
          </h2>
          <div className="space-y-5 font-[family-name:var(--font-inter)] text-[#F5EDD8]/70 text-base leading-relaxed">
            <p>
              The plan — if you can call it that — is to leave in June 2026. South through Biscay.
              Around the Cape of Good Hope. Across the Indian Ocean. Into the Pacific. Four years.
              50+ countries. One boat. One man. One dog who has been told about this and remains
              characteristically unbothered.
            </p>
            <p>
              There is no fixed itinerary. There is no media company behind this. There is no
              corporate sponsor driving the narrative. Just a camera, a good boat, and the genuine
              belief that the world is still full of places worth going to and things worth saying
              about them.
            </p>
            <p>
              If you want to follow along, there&apos;s a list. We&apos;ll write when there&apos;s something
              worth writing. We&apos;ll film when there&apos;s something worth filming. We don&apos;t know
              exactly what that&apos;ll look like yet.
            </p>
            <p>
              That&apos;s the point.
            </p>
          </div>
          <div className="mt-10">
            <Link
              href="/#subscribe"
              className="inline-block font-[family-name:var(--font-inter)] text-[#C8A96E] text-sm tracking-widest uppercase border-b border-[#C8A96E]/40 pb-1 hover:border-[#C8A96E] transition-colors"
            >
              Follow the journey →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
