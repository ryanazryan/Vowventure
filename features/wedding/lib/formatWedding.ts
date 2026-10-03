import type { Wedding } from "@/features/wedding/types";

export function getCoupleName(wedding: Wedding): string {
  return `${wedding.couple.firstName} & ${wedding.couple.secondName}`;
}

export function formatWeddingDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export function formatWeddingTime(time: string): string {
  const [hours, minutes] = time.split(":").map(Number);
  const date = new Date(2000, 0, 1, hours, minutes);

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}
