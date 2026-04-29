import Image from "next/image";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Blog — Sailing Marco Polo",
  description: "Dispatches from the water. Stories, updates, and essays from the voyage.",
};

const posts = [
  {
    slug: "the-beginning",
    title: "The Beginning",
    excerpt:
      "Before the first sail, before the boat, before any of this made any sense at all — there was a Tuesday afternoon in February. This is how it started.",
    date: "January 2026",
    readTime: "8 min read",
    tag: "Origin",
  },
  {
    slug: "why-we-are-going",
    title: "Why We're Going",
    excerpt:
      "People ask us why. They mean it kindly, mostly. Sometimes there&apos;s a note of concern. Sometimes it's envy. The honest answer is harder to give than it sounds.",
    date: "February 2026",
    readTime: "6 min read",
    tag: "Essays",
  },
  {
    slug: "polos-guide-to-ocean-living",
    title: "Polo's Guide to Ocean Living",
    excerpt:
      "He has opinions. Strong ones. About sleeping arrangements, about anchor chains, about the appropriate response to seabirds. A dog's-eye view of life aboard.",
    date: "March 2026",
    readTime: "5 min read",
    tag: "Polo",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-[#0A0F1A]">
      <Nav />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-end overflow-hidden">
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
            Dispatches
          </span>
          <h1
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            The Log
          </h1>
        </div>
      </section>

      {/* Blog posts */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-px bg-[#2A3347]">
            {posts.map((post) => (
              <article key={post.slug} className="bg-[#0A0F1A] p-10 md:p-12 group">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-[family-name:var(--font-inter)] text-[#C8A96E] text-xs tracking-widest uppercase">
                    {post.tag}
                  </span>
                  <div className="flex items-center gap-4 text-[#F5EDD8]/30 font-[family-name:var(--font-inter)] text-xs">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h2
                  className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight mb-4 group-hover:text-[#C8A96E] transition-colors"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
                >
                  {post.title}
                </h2>
                <p className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/60 text-sm leading-relaxed mb-8 max-w-2xl">
                  {post.excerpt.replace(/&apos;/g, "'")}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block font-[family-name:var(--font-inter)] text-[#C8A96E] text-xs tracking-widest uppercase border-b border-[#C8A96E]/40 pb-1 hover:border-[#C8A96E] transition-colors"
                >
                  Read →
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-16 font-[family-name:var(--font-inter)] text-[#F5EDD8]/30 text-sm text-center">
            More dispatches coming as departure nears. Subscribe to be notified.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
