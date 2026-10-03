import { ArrowUpRight, Heart, Pin, Users } from "@/components/Icons";

const concepts = [
  {
    number: "01",
    title: "Enter the Venue",
    description: "Step into a beautiful, shared space made for your story — not another static invitation.",
    icon: <Pin size={22} />,
    visual: <div className="visual-door"><div className="visual-person" /></div>,
  },
  {
    number: "02",
    title: "Celebrate Together",
    description: "See the people you love, send reactions, and feel the energy of the room in real time.",
    icon: <Users size={22} />,
    visual: <><div className="visual-orbit" /><div className="visual-chat">So happy for you ✦</div></>,
  },
  {
    number: "03",
    title: "Make Memories",
    description: "Turn the little moments between the big ones into stories your guests will remember.",
    icon: <Heart size={22} />,
    visual: <div className="visual-game-card"><span>Tonight&apos;s little game</span><strong>Find the ring</strong><i className="game-token" /></div>,
  },
];

export function ExperienceSection() {
  return (
    <section className="border-y border-[#3b312a18] bg-[#f2ede5] py-20 md:py-28" id="experience">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[0.72fr_1.28fr] md:gap-20">
          <div>
            <div className="eyebrow mb-5">The Vowventure experience</div>
            <h2 className="display-heading max-w-[9ch] text-[3rem] leading-[0.98] sm:text-[3.7rem]">More than an invitation.</h2>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-[#77716b]">A wedding should feel like an event that people can attend, not just a page they can read. Vowventure turns your invitation into a place where everyone can show up.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {concepts.map((concept) => (
                <article className="experience-card p-3" key={concept.number}>
                  <div className="experience-visual">{concept.visual}</div>
                  <div className="px-2 pb-2 pt-5">
                    <div className="mb-5 flex items-center justify-between text-[0.65rem] font-bold uppercase tracking-[0.13em] text-[#ad9c90]">
                      <span>{concept.number}</span>
                      <span className="text-[#c98679]">{concept.icon}</span>
                    </div>
                    <h3 className="display-heading text-[1.5rem] leading-tight">{concept.title}</h3>
                    <p className="mt-3 text-[0.78rem] leading-5 text-[#857a72]">{concept.description}</p>
                    <a aria-label={`Learn more about ${concept.title}`} className="mt-5 inline-flex items-center gap-2 text-[0.69rem] font-bold text-[#c98679] transition-colors hover:text-[#8e5d55]" href="#features">
                      Explore <ArrowUpRight size={13} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
