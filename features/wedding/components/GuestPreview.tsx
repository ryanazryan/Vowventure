import { Heart, Users } from "@/components/Icons";
import type { Wedding } from "@/features/wedding/types";

type GuestPreviewProps = {
  wedding: Wedding;
};

const avatarStyles = ["bg-[#d6a398] text-[#6a4840]", "bg-[#d6c092] text-[#6a5840]", "bg-[#aeb8ad] text-[#485448]", "bg-[#c5b0c0] text-[#654f61]", "bg-[#cbbcae] text-[#675a4d]"];

export function GuestPreview({ wedding }: GuestPreviewProps) {
  return (
    <section className="wedding-section wedding-guests-section">
      <div className="wedding-shell">
        <div className="wedding-guests-card">
          <div className="relative z-10 max-w-xl">
            <div className="eyebrow mb-5 flex items-center gap-2"><Users size={15} /> A shared celebration</div>
            <h2 className="display-heading text-[2.9rem] leading-[0.98] sm:text-[3.8rem]">Your guests are gathering here.</h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-[#776b63]">The people you love can arrive, say hello, and share this part of the day with you.</p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2" aria-label={`${wedding.guestCount} guests are invited`}>
                {avatarStyles.map((style, index) => (
                  <span className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f2ded6] text-[0.62rem] font-bold ${style}`} key={style}>{["A", "M", "J", "S", "N"][index]}</span>
                ))}
              </div>
              <p className="text-xs font-semibold text-[#776b63]"><strong className="text-[#403a35]">{wedding.guestCount} guests</strong> have a place here <Heart className="ml-1 inline text-[#c98679]" size={13} /></p>
            </div>
          </div>
          <div aria-hidden="true" className="wedding-guests-art">
            <div className="wedding-guests-ring" />
            <span>♡</span><span>✦</span><span>·</span>
          </div>
        </div>
      </div>
    </section>
  );
}
