import Image from "next/image";
import Link from "next/link";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${title} — Sailing Marco Polo`,
  };
}

export function generateStaticParams() {
  return [
    { slug: "the-beginning" },
    { slug: "why-we-are-going" },
    { slug: "polos-guide-to-ocean-living" },
  ];
}

const postContent: Record<
  string,
  { title: string; date: string; tag: string; readTime: string; body: string[] }
> = {
  "the-beginning": {
    title: "The Beginning",
    date: "January 2026",
    tag: "Origin",
    readTime: "8 min read",
    body: [
      "Before the first sail, before the boat, before any of this made any sense at all — there was a Tuesday afternoon in February. A marina in Falmouth. A grey sky doing nothing dramatic. And a singlehander coming in off a three-week Atlantic crossing.",
      "He was maybe fifty-five. Weathered in the way that only comes from actual weather. Not the gym-tan kind, not the holidays-in-Tenerife kind. The real thing. He tied up with the quiet efficiency of someone who had done this ten thousand times and still cared about doing it properly.",
      "I watched him for about ten minutes. He didn't know I was watching. He checked his lines, he stowed a few things, he made a cup of tea in the cockpit and sat there looking at nothing in particular. Completely, utterly at peace.",
      "I drove home and booked an RYA Coastal Skipper course for the following month.",
      "That was the beginning.",
    ],
  },
  "why-we-are-going": {
    title: "Why We're Going",
    date: "February 2026",
    tag: "Essays",
    readTime: "6 min read",
    body: [
      "People ask why. They mean it kindly, mostly. Sometimes there's a note of concern. Sometimes it's barely concealed envy. Occasionally it's genuine bafflement — the kind that comes from someone who has found what they want and genuinely can't imagine wanting something else.",
      "The honest answer is harder to give than it sounds.",
      "It's not because I need to find myself. I'm not lost, not in any interesting way. It's not because I'm running away. I'm not particularly running toward anything either. It's something quieter than that.",
      "I think it's this: I want to spend four years doing something that is genuinely, unmistakably real. Real in the way that only things with consequence are real. The ocean doesn't pretend. A badly made decision at sea has outcomes. You learn quickly what matters and what doesn't.",
      "That's the whole thing, really. I want four years of things that matter.",
    ],
  },
  "polos-guide-to-ocean-living": {
    title: "Polo's Guide to Ocean Living",
    date: "March 2026",
    tag: "Polo",
    readTime: "5 min read",
    body: [
      "Polo has been aboard for fourteen months now, and in that time he has developed opinions. Not suggestions. Opinions. Strongly held, consistently expressed, non-negotiable.",
      "On sleeping: the forecabin berth is his. This was decided unilaterally on his third night aboard. Any attempt to renegotiate is met with the specific look he reserves for situations he considers beneath his dignity to argue.",
      "On seabirds: they require monitoring. All of them. At all times. This is clearly his department and he takes it seriously. A gannet passing at three hundred metres is tracked from bow to stern with the focus of an air traffic controller.",
      "On passages: fine. Long ones, short ones, rough ones. He found his sea legs in about forty minutes on the first sail and has never referred to the matter again. His attitude to a force six is the same as his attitude to a flat calm: watchful, unbothered, ready.",
      "He's the best possible crew. He complains less than any human I've ever sailed with, eats whatever he's given, and maintains a cheerful disposition even at 3am in driving rain. He's also genuinely good company at anchor over a sundowner. I cannot recommend sailing with a dog enough.",
    ],
  },
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = postContent[slug] ?? {
    title: "Coming Soon",
    date: "2026",
    tag: "Dispatch",
    readTime: "—",
    body: ["This post is coming soon. Subscribe to be notified when it publishes."],
  };

  return (
    <main className="bg-[#0A0F1A]">
      <Nav />

      {/* Hero */}
      <section className="relative h-[55vh] flex items-end overflow-hidden">
        {/* PHOTO: Replace src with real image when available */}
        <Image
          src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80"
          alt="Ocean"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-black/60 to-black/20" />
        <div className="relative z-10 px-6 md:px-12 pb-16 max-w-3xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-[family-name:var(--font-inter)] text-[#C8A96E] text-xs tracking-widest uppercase">
              {post.tag}
            </span>
            <span className="text-[#F5EDD8]/30 font-[family-name:var(--font-inter)] text-xs">
              {post.date} · {post.readTime}
            </span>
          </div>
          <h1
            className="font-[family-name:var(--font-cormorant)] text-[#F5EDD8] font-light leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            {post.title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            {post.body.map((paragraph, i) => (
              <p
                key={i}
                className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/75 text-base leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Image placeholder */}
          <div className="my-12">
            {/* PHOTO: Replace src with real image when available */}
            <div className="aspect-[16/9] bg-[#2A3347] flex items-center justify-center">
              <span className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/30 text-xs tracking-widest uppercase text-center px-4">
                POST IMAGE — coming soon
              </span>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-[#2A3347] flex items-center justify-between">
            <Link
              href="/blog"
              className="font-[family-name:var(--font-inter)] text-[#F5EDD8]/40 text-xs tracking-widest uppercase hover:text-[#C8A96E] transition-colors"
            >
              ← All posts
            </Link>
            <Link
              href="/#subscribe"
              className="font-[family-name:var(--font-inter)] text-[#C8A96E] text-xs tracking-widest uppercase border-b border-[#C8A96E]/40 pb-1 hover:border-[#C8A96E] transition-colors"
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
