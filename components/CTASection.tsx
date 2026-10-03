import { ArrowUpRight, Sparkle } from "@/components/Icons";

export function CTASection() {
  return (
    <section className="py-20 md:py-28" id="create">
      <div className="section-shell">
        <div className="cta-panel px-6 py-16 text-center sm:px-12 md:py-24">
          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="eyebrow mb-5 flex items-center justify-center gap-2 text-[#a66d64]">
              <Sparkle size={15} />
              Your people are invited
            </div>
            <h2 className="display-heading text-[3rem] leading-[0.96] sm:text-[4.5rem]">Your wedding deserves to be experienced.</h2>
            <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-[#715f58]">Make a space for every person who couldn&apos;t be in the room — and every person who should be.</p>
            <a className="button-primary mt-9" href="#top">
              Create a Wedding <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
