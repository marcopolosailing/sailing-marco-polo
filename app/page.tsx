import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0A0F1A]">
      <Nav />

      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* PHOTO: Replace src with real image when available */}
        <Image
          src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80"
          alt="Dramatic ocean at dusk"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] leading-none font-light"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          >
            No fixed address.
            <br />
            Always home.
          </h1>
          <p className="mt-6 font-[family-name:var(--font-inter)] text-[#F5EDD8]/70 text-base md:text-lg tracking-widest uppercase font-light">
            A four-year circumnavigation. One man. One dog. The world is the plan.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/40 text-xs tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="animate-bounce-gentle text-[#C8A96E]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* ─── ABOUT MARK ────────────────────────────────────────────── */}
      <section className="bg-[#0A0F1A] py-16 md:py-36 px-5 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Portrait placeholder */}
          <div className="order-2 md:order-1">
            {/* PHOTO: Replace src with real image when available */}
            <div className="aspect-[3/4] max-h-[480px] md:max-h-none bg-[#2A3347] flex items-center justify-center rounded-sm">
              <span className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/30 text-sm tracking-widest uppercase text-center px-4">
                MARK — portrait photo coming soon
              </span>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 md:order-2">
            {/* Brass accent line */}
            <div className="w-12 h-px bg-[#C8A96E] mb-8" />
            <h2
              className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Built a startup.
              <br />
              Lost it all.
              <br />
              Sailed away.
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/70 text-base leading-relaxed">
              Mark spent his twenties chasing the wrong things — pitch decks, funding
              rounds, the startup grind. Then it fell apart. What came next wasn&apos;t a
              plan. It was a boat, a dog, and a horizon with no deadline. Sailing Marco
              Polo is what happens when you stop running toward something and start
              sailing toward everything.
            </p>
            <div className="mt-10">
              <Link
                href="/story"
                className="inline-block font-[family-name:var(--font-inter)] text-[#C8A96E] text-sm tracking-widest uppercase border-b border-[#C8A96E]/40 pb-1 hover:border-[#C8A96E] transition-colors"
              >
                Read the full story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT POLO ────────────────────────────────────────────── */}
      <section className="py-16 md:py-36 px-5 md:px-12" style={{ backgroundColor: "#0D1525" }}>
        <div className="max-w-3xl mx-auto text-center">
          {/* PHOTO: Replace src with real image when available */}
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden mb-12 relative">
            <Image
              src="/polo.jpg"
              alt="Polo — Ship's dog, wearing his orange life jacket on deck"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 192px, 256px"
            />
          </div>
          <h2
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight mb-6"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Every great explorer needs a first mate.
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/70 text-base leading-relaxed max-w-xl mx-auto mb-6">
            Polo doesn&apos;t know what a passport is. He doesn&apos;t know what an ocean is either.
            But he knows Mark, and that&apos;s enough. Wherever this boat goes, Polo goes. Full stop.
          </p>
          <p className="font-[family-name:var(--font-cormorant)] italic text-[#C8A96E] text-lg">
            Polo. Ship&apos;s dog. Age 9 months. Opinions: strong.
          </p>
        </div>
      </section>

      {/* ─── THE VOYAGE ────────────────────────────────────────────── */}
      <section className="bg-[#0A0F1A] py-16 md:py-36 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <span className="font-[family-name:var(--font-inter)] text-[#C8A96E] text-xs tracking-[0.3em] uppercase">
              The Plan
            </span>
          </div>
          <h2
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight mb-10 md:mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            The Mission
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#2A3347]">
            {/* The Route */}
            <div className="bg-[#0A0F1A] py-8 md:py-0 px-0 md:px-12 first:pl-0 last:pr-0">
              <div className="w-8 h-px bg-[#C8A96E] mb-6 md:mb-8" />
              <h3 className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] text-2xl font-light mb-4">
                The Route
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/60 text-sm leading-relaxed">
                Cape of Good Hope, not the Red Sea. Atlantic, Indian Ocean, Pacific. The long way.
                The hard way. The only way.
              </p>
            </div>

            {/* The Timeline */}
            <div className="bg-[#0A0F1A] py-8 md:py-0 px-0 md:px-12">
              <div className="w-8 h-px bg-[#C8A96E] mb-6 md:mb-8" />
              <h3 className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] text-2xl font-light mb-4">
                The Timeline
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/60 text-sm leading-relaxed">
                Launching June 2026. Four years. 50+ countries. No firm schedule, no hard deadlines.
                Just tide and wind.
              </p>
            </div>

            {/* The Boat */}
            <div className="bg-[#0A0F1A] py-8 md:py-0 px-0 md:px-12">
              <div className="w-8 h-px bg-[#C8A96E] mb-6 md:mb-8" />
              <h3 className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] text-2xl font-light mb-4">
                The Boat
              </h3>
              <div className="aspect-video relative mb-3 rounded-sm overflow-hidden">
                <Image
                  src="/boat-exterior.jpg"
                  alt="Marco Polo — Hans Christian 38T"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <p className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/40 text-xs italic">
                1981 Hans Christian 38T — Marco Polo
              </p>
            </div>
          </div>

          {/* Divider + one-liner */}
          <div className="mt-16 pt-10 border-t border-[#2A3347]/60">
            <p
              className="font-[family-name:var(--font-cormorant)] italic text-[#F5EDD8]/50 text-center"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)" }}
            >
              We&apos;re not racing. We&apos;re not rushing. We&apos;re just going.
            </p>
          </div>
        </div>
      </section>

      {/* ─── EMAIL SIGNUP ──────────────────────────────────────────── */}
      <section className="bg-[#E8634A] py-16 md:py-36 px-5 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="font-[family-name:var(--font-cormorant)] text-[#0A0F1A] font-semibold leading-tight mb-4"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            Be there from the beginning.
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#0A0F1A]/70 text-base leading-relaxed mb-10 max-w-lg mx-auto">
            We&apos;ll send you one email when we leave. Then one every time something worth sharing
            happens. No noise.
          </p>

          <form
            action="/api/subscribe"
            method="POST"
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              className="flex-1 min-w-0 bg-[#0A0F1A]/20 border border-[#0A0F1A]/30 text-[#0A0F1A] placeholder-[#0A0F1A]/50 px-5 py-3.5 font-[family-name:var(--font-inter)] text-sm focus:outline-none focus:border-[#0A0F1A] transition-colors rounded-sm"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#0A0F1A] text-[#F5EDD8] px-7 py-3.5 font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase hover:bg-[#2A3347] transition-colors whitespace-nowrap rounded-sm"
            >
              Follow the Journey
            </button>
          </form>

          <p className="mt-5 font-[family-name:var(--font-inter)] text-[#0A0F1A]/50 text-xs tracking-wide">
            No spam. Unsubscribe anytime. We sail, not sell.
          </p>
        </div>
      </section>

      {/* ─── PARTNERS & PRESS ──────────────────────────────────────── */}
      <section className="bg-[#0A0F1A] py-16 md:py-36 px-5 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <span className="font-[family-name:var(--font-inter)] text-[#C8A96E] text-xs tracking-[0.3em] uppercase">
              Partners
            </span>
          </div>
          <h2
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Sail with us.
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/70 text-base leading-relaxed mb-12">
            Sailing Marco Polo is a four-year circumnavigation documentary launching in June 2026.
            We&apos;re looking for long-term partners who want to be part of the story from the beginning.
          </p>

          <form action="/api/contact" method="POST" className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-[family-name:var(--font-inter)] text-[#F5EDD8]/50 text-xs tracking-widest uppercase mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-[#2A3347] border border-[#2A3347] text-[#F5EDD8] placeholder-[#F5EDD8]/30 px-4 py-3 font-[family-name:var(--font-inter)] text-sm focus:outline-none focus:border-[#C8A96E] transition-colors"
                />
              </div>
              <div>
                <label className="block font-[family-name:var(--font-inter)] text-[#F5EDD8]/50 text-xs tracking-widest uppercase mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full bg-[#2A3347] border border-[#2A3347] text-[#F5EDD8] placeholder-[#F5EDD8]/30 px-4 py-3 font-[family-name:var(--font-inter)] text-sm focus:outline-none focus:border-[#C8A96E] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block font-[family-name:var(--font-inter)] text-[#F5EDD8]/50 text-xs tracking-widest uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-[#2A3347] border border-[#2A3347] text-[#F5EDD8] placeholder-[#F5EDD8]/30 px-4 py-3 font-[family-name:var(--font-inter)] text-sm focus:outline-none focus:border-[#C8A96E] transition-colors"
              />
            </div>
            <div>
              <label className="block font-[family-name:var(--font-inter)] text-[#F5EDD8]/50 text-xs tracking-widest uppercase mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full bg-[#2A3347] border border-[#2A3347] text-[#F5EDD8] placeholder-[#F5EDD8]/30 px-4 py-3 font-[family-name:var(--font-inter)] text-sm focus:outline-none focus:border-[#C8A96E] transition-colors resize-none"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#C8A96E] text-[#0A0F1A] px-8 py-3.5 font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase hover:bg-[#F5EDD8] transition-colors"
              >
                Send Enquiry
              </button>
            </div>
          </form>

          <p className="mt-10 font-[family-name:var(--font-inter)] text-[#F5EDD8]/40 text-sm">
            Press enquiries:{" "}
            <a
              href="mailto:press@sailingmarcopolo.com"
              className="text-[#C8A96E] hover:text-[#F5EDD8] transition-colors"
            >
              press@sailingmarcopolo.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
