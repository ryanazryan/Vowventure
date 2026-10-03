import { Camera, Gamepad, Heart, MessageCircle, Pin, Sparkle, Users } from "@/components/Icons";

const features = [
  { title: "Virtual Venue", description: "A beautiful place for every guest to arrive, wander, and feel present.", icon: Pin },
  { title: "Real-time Guests", description: "See the people you love show up and share the same space together.", icon: Users },
  { title: "Reactions & Chat", description: "Send a little love, a big cheer, or the perfect in-the-moment reaction.", icon: MessageCircle },
  { title: "Wedding Activities", description: "Give guests meaningful ways to participate between the big moments.", icon: Heart },
  { title: "Mini Games", description: "Keep the celebration light, playful, and full of unexpected joy.", icon: Gamepad },
  { title: "Wedding Memories", description: "Collect the notes, laughs, and snapshots that make the day yours.", icon: Camera },
];

export function Features() {
  return (
    <section className="bg-[#f2ede5] py-20 md:py-32" id="features">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <div className="eyebrow mb-5">Everything in one place</div>
            <h2 className="display-heading max-w-[11ch] text-[3rem] leading-[0.98] sm:text-[3.7rem]">A celebration with room to feel.</h2>
          </div>
          <p className="max-w-sm text-[0.95rem] leading-7 text-[#77716b]">Thoughtful details for the moments you planned — and the ones you didn&apos;t.</p>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article className="feature-card p-6" key={feature.title}>
                <div className="feature-icon"><Icon size={21} /></div>
                <h3 className="display-heading mt-6 text-[1.5rem]">{feature.title}</h3>
                <p className="mt-3 max-w-[18rem] text-[0.8rem] leading-5 text-[#857a72]">{feature.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-[#857a72]">
          <Sparkle className="text-[#c9a86a]" size={15} />
          <span>Bring everyone a little closer.</span>
        </div>
      </div>
    </section>
  );
}
