import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Sparkle } from "@/components/Icons";
import { getMockWeddingSlugs, getWeddingBySlug } from "@/features/wedding/lib/getWeddingBySlug";
import { getCoupleName } from "@/features/wedding/lib/formatWedding";

type CelebrationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getMockWeddingSlugs().map((slug) => ({ slug }));
}

export default async function CelebrationPage({ params }: CelebrationPageProps) {
  const { slug } = await params;
  const wedding = getWeddingBySlug(slug);

  if (!wedding) {
    notFound();
  }

  return (
    <main className="wedding-page celebration-page">
      <header className="wedding-nav">
        <div className="wedding-shell flex items-center justify-between">
          <Link className="display-heading text-[1.55rem] tracking-[-0.06em]" href="/">
            Vowventure<span className="text-[#c98679]">.</span>
          </Link>
          <Link className="wedding-back-link" href={`/wedding/${wedding.slug}`}>
            Back to invitation <ArrowUpRight size={14} />
          </Link>
        </div>
      </header>

      <section className="celebration-placeholder">
        <div aria-hidden="true" className="celebration-orbit celebration-orbit-one" />
        <div aria-hidden="true" className="celebration-orbit celebration-orbit-two" />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <div className="eyebrow mb-6 flex items-center justify-center gap-2"><Sparkle size={15} /> {getCoupleName(wedding)} &middot; celebration world</div>
          <h1 className="display-heading text-[4rem] leading-[0.92] sm:text-[5.8rem]">The celebration awaits.</h1>
          <p className="mx-auto mt-7 max-w-lg text-base leading-8 text-[#77716b]">Your interactive wedding world is coming in the next phase. Soon, this is where everyone will meet, explore, and make memories together.</p>
          <Link className="button-secondary mt-9" href={`/wedding/${wedding.slug}`}>
            Return to invitation <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
