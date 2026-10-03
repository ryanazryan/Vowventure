"use client";

import { useEffect, useState } from "react";
import { Sparkle } from "@/components/Icons";
import type { Wedding } from "@/features/wedding/types";

type CountdownProps = {
  wedding: Wedding;
};

type EventState = "loading" | "upcoming" | "live" | "ended";

function getEventState(startsAt: string, now: number): { state: EventState; remaining: number } {
  const remaining = new Date(startsAt).getTime() - now;

  if (remaining > 0) return { state: "upcoming", remaining };
  if (remaining > -4 * 60 * 60 * 1000) return { state: "live", remaining };
  return { state: "ended", remaining };
}

function formatRemaining(milliseconds: number): string {
  const totalMinutes = Math.max(0, Math.floor(milliseconds / 60000));
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;

  return `${days}d ${hours.toString().padStart(2, "0")}h ${minutes.toString().padStart(2, "0")}m`;
}

export function Countdown({ wedding }: CountdownProps) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const updateNow = () => setNow(Date.now());
    updateNow();
    const timer = window.setInterval(updateNow, 60000);

    return () => window.clearInterval(timer);
  }, []);

  const event = now === null ? { state: "loading" as const, remaining: 0 } : getEventState(wedding.startsAt, now);

  return (
    <section aria-live="polite" className="wedding-status-card">
      <div className="wedding-status-icon"><Sparkle size={19} /></div>
      <div>
        <p className="eyebrow">{event.state === "upcoming" || event.state === "loading" ? "The celebration begins in" : "Event status"}</p>
        <p className="display-heading mt-2 text-[2rem] leading-none sm:text-[2.3rem]">
          {event.state === "loading" ? "Preparing the moment" : null}
          {event.state === "upcoming" ? formatRemaining(event.remaining) : null}
          {event.state === "live" ? "The celebration is live" : null}
          {event.state === "ended" ? "A beautiful moment remembered" : null}
        </p>
      </div>
      <span className={`wedding-status-dot wedding-status-dot-${event.state}`} />
    </section>
  );
}
