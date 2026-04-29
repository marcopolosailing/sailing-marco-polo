import Image from "next/image";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Partners — Sailing Marco Polo",
  description:
    "Partner with Sailing Marco Polo. A four-year circumnavigation documentary. Authentic stories, real reach.",
};

export default function PartnersPage() {
  return (
    <main className="bg-[#0A0F1A]">
      <Nav />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        {/* PHOTO: Replace src with real image when available */}
        <Image
          src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80"
          alt="Ocean"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-black/50 to-black/20" />
        <div className="relative z-10 px-6 md:px-12 pb-16">
          <span className="font-[family-name:var(--font-inter)] text-[#C8A96E] text-xs tracking-[0.3em] uppercase mb-4 block">
            Partners
          </span>
          <h1
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            Sail with us.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-px bg-[#C8A96E] mb-10" />
          <p
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-relaxed mb-8"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}
          >
            Sailing Marco Polo is a four-year circumnavigation documentary launching in
            June 2026. We&apos;re looking for long-term partners who want to be part of the story
            from the beginning.
          </p>
          <p className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/60 text-base leading-relaxed">
            This isn&apos;t banner ads and sponsored posts. We&apos;re not that project. What we&apos;re
            offering is something rarer: genuine involvement in a journey that will unfold
            over four years, in front of an audience that cares deeply about the ocean,
            adventure, and authenticity.
          </p>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-20 px-6 md:px-12" style={{ backgroundColor: "#0D1525" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-[#2A3347]">
            {[
              {
                title: "Reach",
                description:
                  "A growing audience of ocean enthusiasts, adventurers, and people who want to follow something real. YouTube, social, email — built from the ground up with integrity. Not bought, not gamed.",
                icon: "→",
              },
              {
                title: "Story",
                description:
                  "Four years of documentary footage, written dispatches, and genuine adventure. Your brand doesn't get a mention. It gets a story. Integration that feels like it belongs because it does.",
                icon: "→",
              },
              {
                title: "Authenticity",
                description:
                  "We turn down partners who aren't right for us. That's the deal. If we say yes to you, it's because we mean it — and our audience can tell the difference. That trust is the thing of value here.",
                icon: "→",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#0D1525] p-10 md:p-12">
                <div className="w-8 h-px bg-[#C8A96E] mb-8" />
                <h3 className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] text-2xl font-light mb-4">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The pitch */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight mb-12"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            The Opportunity
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 font-[family-name:var(--font-inter)] text-[#F5EDD8]/70 text-sm leading-relaxed">
              <p>
                Four years. Multiple oceans. 50+ countries. A growing documentary series and a
                loyal, engaged audience that will follow the journey from departure to return.
              </p>
              <p>
                We&apos;re looking for partners who are in this for the long term — brands and
                companies who understand that the best partnerships feel like part of the story,
                not interruptions to it.
              </p>
              <p>
                We have limited partnership slots and we&apos;re being selective. If you think
                there&apos;s a genuine alignment between what you do and what we represent, we want
                to hear from you.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] text-xl font-light">
                What we&apos;re looking for
              </h3>
              <ul className="space-y-4">
                {[
                  "Brands that actually make things sailors and adventurers use",
                  "Companies with a genuine ocean or sustainability story",
                  "Long-term partners, not campaign sponsors",
                  "People who understand that authenticity can't be bought, only earned",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#C8A96E] font-[family-name:var(--font-inter)] text-xs mt-0.5">
                      —
                    </span>
                    <span className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/60 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-20 px-6 md:px-12" style={{ backgroundColor: "#0D1525" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Get in Touch
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/50 text-sm mb-12">
            Tell us who you are and what you&apos;re thinking. We read everything.
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
                What are you thinking?
              </label>
              <textarea
                name="message"
                rows={6}
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

          <div className="mt-12 pt-8 border-t border-[#2A3347]">
            <p className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/40 text-sm">
              Press enquiries:{" "}
              <a
                href="mailto:press@sailingmarcopolo.com"
                className="text-[#C8A96E] hover:text-[#F5EDD8] transition-colors"
              >
                press@sailingmarcopolo.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
