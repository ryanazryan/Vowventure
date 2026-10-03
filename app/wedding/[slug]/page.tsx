import { notFound } from "next/navigation";
import { WeddingInvitation } from "@/features/wedding/components/WeddingInvitation";
import { getMockWeddingSlugs, getWeddingBySlug } from "@/features/wedding/lib/getWeddingBySlug";

type WeddingPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getMockWeddingSlugs().map((slug) => ({ slug }));
}

export default async function WeddingPage({ params }: WeddingPageProps) {
  const { slug } = await params;
  const wedding = getWeddingBySlug(slug);

  if (!wedding) {
    notFound();
  }

  return <WeddingInvitation wedding={wedding} />;
}
