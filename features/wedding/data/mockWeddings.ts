import type { Wedding } from "@/features/wedding/types";

export const mockWeddings: Wedding[] = [
  {
    slug: "ryan-and-kirei",
    couple: { firstName: "Ryan", secondName: "Kirei" },
    date: "2026-11-14",
    time: "17:00",
    timezone: "WITA · GMT+8",
    startsAt: "2026-11-14T17:00:00+08:00",
    venue: "The Garden Pavilion",
    description: "Join us for an evening of warm light, good stories, and the beginning of our forever.",
    guestCount: 64,
  },
  {
    slug: "andi-and-sarah",
    couple: { firstName: "Andi", secondName: "Sarah" },
    date: "2026-12-05",
    time: "16:30",
    timezone: "WIB · GMT+7",
    startsAt: "2026-12-05T16:30:00+07:00",
    venue: "The Sunset Conservatory",
    description: "We would love to have you with us as we gather our favorite people for a joyful new chapter.",
    guestCount: 42,
  },
  {
    slug: "budi-and-sinta",
    couple: { firstName: "Budi", secondName: "Sinta" },
    date: "2027-01-23",
    time: "18:00",
    timezone: "WIB · GMT+7",
    startsAt: "2027-01-23T18:00:00+07:00",
    venue: "The Lantern Courtyard",
    description: "Come celebrate the little moments, the big promise, and everyone who helped us get here.",
    guestCount: 88,
  },
];
