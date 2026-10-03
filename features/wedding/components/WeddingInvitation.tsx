import type { Wedding } from "@/features/wedding/types";
import { Countdown } from "@/features/wedding/components/Countdown";
import { EnterCelebrationCTA } from "@/features/wedding/components/EnterCelebrationCTA";
import { GuestPreview } from "@/features/wedding/components/GuestPreview";
import { WeddingDetails } from "@/features/wedding/components/WeddingDetails";
import { WeddingHero } from "@/features/wedding/components/WeddingHero";
import { WeddingTopNav } from "@/features/wedding/components/WeddingTopNav";

type WeddingInvitationProps = {
  wedding: Wedding;
};

export function WeddingInvitation({ wedding }: WeddingInvitationProps) {
  return (
    <main className="wedding-page">
      <WeddingTopNav />
      <WeddingHero wedding={wedding} />
      <div className="wedding-shell wedding-status-wrap">
        <Countdown wedding={wedding} />
      </div>
      <WeddingDetails wedding={wedding} />
      <GuestPreview wedding={wedding} />
      <EnterCelebrationCTA wedding={wedding} />
    </main>
  );
}
