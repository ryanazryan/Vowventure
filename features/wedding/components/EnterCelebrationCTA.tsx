import Link from "next/link";
import { ArrowUpRight, Sparkle } from "@/components/Icons";
import type { Wedding } from "@/features/wedding/types";

type EnterCelebrationCTAProps = {
  wedding: Wedding;
};

export function EnterCelebrationCTA({ wedding }: EnterCelebrationCTAProps) {
  return (
    <section className="wedding-section pb-20 pt-4 md:pb-28">
      <div className="wedding-shell">
        <div className="wedding-enter-card">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <div className="eyebrow mb-5 flex items-center justify-center gap-2"><Sparkle size={15} /> The door is open</div>
            <h2 className="display-heading text-[3rem] leading-[0.96] sm:text-[4.3rem]">Ready to join the celebration?</h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-[#715f58]">Step into {wedding.venue} and find your place among the people who matter most.</p>
            <Link className="button-primary mt-8" href={`/wedding/${wedding.slug}/celebration`}>
              Enter the Celebration <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
