import { notFound, permanentRedirect } from "next/navigation";
import { getPayloadPostBySlug, getPayloadCategorySlug, getAllPayloadSlugs } from "@/lib/api/payload";

interface Props {
  params: Promise<{ slug: string }>;
}

// Legacy flat /academy/{slug}/ URLs — kept alive purely as a 301 redirect
// shim to /academy/{category}/{slug}/ (the WordPress-matching nested
// structure) so every link shared or indexed before this migration keeps
// working instead of 404ing.
export const revalidate = 60;

export async function generateStaticParams() {
  const pairs = await getAllPayloadSlugs("academy");
  return pairs.map(({ slug }) => ({ slug }));
}

export default async function LegacyAcademyRedirect({ params }: Props) {
  const { slug } = await params;
  const post = await getPayloadPostBySlug("academy", slug);
  if (!post) notFound();
  const category = getPayloadCategorySlug(post);
  permanentRedirect(`/academy/${category}/${slug}/`);
}
