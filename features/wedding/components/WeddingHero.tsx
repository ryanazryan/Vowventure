import { ArrowUpRight, Sparkle } from "@/components/Icons";
import { formatWeddingDate, formatWeddingTime, getCoupleName } from "@/features/wedding/lib/formatWedding";
import type { Wedding } from "@/features/wedding/types";

type WeddingHeroProps = {
  wedding: Wedding;
};

export function WeddingHero({ wedding }: WeddingHeroProps) {
  return (
    <section className="wedding-hero">
      <div aria-hidden="true" className="wedding-hero-orb wedding-hero-orb-left" />
      <div aria-hidden="true" className="wedding-hero-orb wedding-hero-orb-right" />
      <div className="wedding-shell relative grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
        <div className="relative z-10">
          <div className="eyebrow mb-7 flex items-center gap-2">
            <Sparkle size={15} />
            You&apos;re invited
          </div>
          <p className="text-sm font-semibold tracking-[0.08em] text-[#8d8178]">A virtual wedding celebration for</p>
          <h1 className="display-heading mt-4 text-[4.2rem] leading-[0.9] sm:text-[5.6rem] lg:text-[6.5rem]">{getCoupleName(wedding)}</h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#77716b] sm:text-[1.05rem]">{wedding.description}</p>

          <div className="mt-9 flex flex-wrap gap-3 text-[0.72rem] font-semibold text-[#655b54]">
            <span className="wedding-detail-pill">{formatWeddingDate(wedding.date)}</span>
            <span className="wedding-detail-pill">{formatWeddingTime(wedding.time)} · {wedding.timezone}</span>
          </div>

          <a className="button-secondary mt-9" href="#details">
            View invitation details <ArrowUpRight size={14} />
          </a>
        </div>

        <WeddingHeroArt wedding={wedding} />
      </div>
    </section>
  );
}

function WeddingHeroArt({ wedding }: WeddingHeroProps) {
  return (
    <div aria-label={`Decorative illustration for ${wedding.venue}`} className="wedding-hero-art" role="img">
      <div className="wedding-art-sun" />
      <div className="wedding-art-arch"><div /></div>
      <div className="wedding-art-branch wedding-art-branch-left">✽</div>
      <div className="wedding-art-branch wedding-art-branch-right">✦</div>
      <div className="wedding-art-couple" aria-hidden="true">
        <div className="wedding-art-person wedding-art-person-one"><i /><b /></div>
        <div className="wedding-art-person wedding-art-person-two"><i /><b /></div>
      </div>
      <div className="wedding-art-caption">
        <span>Meet us at</span>
        <strong>{wedding.venue}</strong>
      </div>
    </div>
  );
}
