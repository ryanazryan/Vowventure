import { mockWeddings } from "@/features/wedding/data/mockWeddings";
import type { Wedding } from "@/features/wedding/types";

/**
 * Repository boundary for wedding retrieval.
 * Replace the mock collection with a database query when persistence is ready.
 */
export function getWeddingBySlug(slug: string): Wedding | undefined {
  return mockWeddings.find((wedding) => wedding.slug === slug);
}

export function getMockWeddingSlugs(): string[] {
  return mockWeddings.map((wedding) => wedding.slug);
}
