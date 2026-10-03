import { notFound } from "next/navigation";
import { getMockWeddingSlugs, getWeddingBySlug } from "@/features/wedding/lib/getWeddingBySlug";
import { WeddingWorld } from "@/features/wedding-world/components/WeddingWorld";

type CelebrationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getMockWeddingSlugs().map((slug) => ({ slug }));
}

export default async function CelebrationPage({ params }: CelebrationPageProps) {
  const { slug } = await params;
  const wedding = getWeddingBySlug(slug);

  if (!wedding) {
    notFound();
  }

  return <WeddingWorld wedding={wedding} />;
}
