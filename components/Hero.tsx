import Link from "next/link";
import { ArrowRight, ArrowUpRight, Play, Sparkle } from "@/components/Icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-10 md:pb-32 md:pt-20" id="top">
      <div aria-hidden="true" className="hero-glow" />
      <div className="section-shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="max-w-xl">
            <div className="eyebrow mb-6 flex items-center gap-2">
              <Sparkle size={15} />
              Virtual weddings, reimagined
            </div>
            <h1 className="display-heading max-w-[11ch] text-[3.6rem] leading-[0.96] sm:text-[4.6rem] lg:text-[5.4rem]">
              A wedding you can actually attend.
            </h1>
            <p className="mt-7 max-w-120 text-base leading-7 text-[#77716b] sm:text-[1.05rem] sm:leading-8">
              Create a beautiful virtual wedding where your guests can meet, celebrate, play, and make memories together in real time.
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a className="button-primary" href="#create">
                Create Your Wedding <ArrowUpRight size={15} />
              </a>
              <Link className="button-secondary min-h-0 border-0 px-1 py-2" href="/wedding/ryan-and-kirei">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3b312a22] bg-[#fffdfa]">
                  <Play size={12} />
                </span>
                Attend a Wedding
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-3 text-xs text-[#8c8279]">
              <div className="flex -space-x-2" aria-hidden="true">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#f8f6f1] bg-[#d6a398] text-[0.55rem] font-bold text-[#6a4840]">A</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#f8f6f1] bg-[#d6c092] text-[0.55rem] font-bold text-[#6a5840]">M</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#f8f6f1] bg-[#aeb8ad] text-[0.55rem] font-bold text-[#485448]">J</span>
              </div>
              <span>Made for the moments that matter.</span>
            </div>
          </div>

          <WeddingScene />
        </div>
      </div>
    </section>
  );
}

function WeddingScene() {
  return (
    <div className="relative mx-auto w-full max-w-156 lg:mr-0">
      <div aria-hidden="true" className="absolute -left-6 top-12 hidden text-[#c9a86a] sm:block">
        <Sparkle size={23} />
      </div>
      <div className="hero-scene">
        <div className="scene-topbar">
          <span>Your celebration</span>
          <span className="scene-live">Live venue</span>
        </div>
        <div className="scene-stage">
          <div className="scene-moon" />
          <div className="scene-arch">
            <div className="scene-arch-inner" />
          </div>
          <span aria-hidden="true" className="scene-flower scene-flower-one">✦</span>
          <span aria-hidden="true" className="scene-flower scene-flower-two">✽</span>
          <div className="couple" aria-label="A couple standing at the ceremony arch">
            <div className="person person-groom">
              <span className="person-head" />
              <span className="person-body" />
            </div>
            <div className="person person-bride">
              <span className="person-head" />
              <span className="person-body" />
            </div>
          </div>
          <div className="scene-table" />
          <div className="scene-ground" />
        </div>
        <div className="guest-pill guest-pill-top">
          <span className="guest-avatar">✦</span>
          <span className="guest-name">guests gathering<span className="guest-detail">making memories together</span></span>
        </div>
        <div className="guest-pill guest-pill-bottom">
          <span className="guest-avatar">♡</span>
          <span className="guest-name">the happy couple<span className="guest-detail">the celebration is live</span></span>
          <ArrowRight size={14} />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between px-1 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#9b8d82]">
        <span>Enter the celebration</span>
        <span>01 / 04</span>
      </div>
    </div>
  );
}
