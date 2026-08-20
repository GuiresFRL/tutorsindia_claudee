import { notFound, permanentRedirect } from "next/navigation";
import { getPayloadPostBySlug, getPayloadCategorySlug, getAllPayloadSlugs } from "@/lib/api/payload";

interface Props {
  // Folder is named [category] (not [slug]) purely so Next.js's router
  // doesn't reject this route as conflicting with the sibling
  // /academy/[category]/[slug]/ route below it — a single dynamic segment
  // at a given depth must use the same param name as any other dynamic
  // segment at that same depth. The value itself is still the legacy flat
  // slug, not an actual category.
  params: Promise<{ category: string }>;
}

// Legacy flat /academy/{slug}/ URLs — kept alive purely as a 301 redirect
// shim to /academy/{category}/{slug}/ (the WordPress-matching nested
// structure) so every link shared or indexed before this migration keeps
// working instead of 404ing.
export const revalidate = 60;

export async function generateStaticParams() {
  const pairs = await getAllPayloadSlugs("academy");
  return pairs.map(({ slug }) => ({ category: slug }));
}

export default async function LegacyAcademyRedirect({ params }: Props) {
  const { category: legacySlug } = await params;
  const post = await getPayloadPostBySlug("academy", legacySlug);
  if (!post) notFound();
  const category = getPayloadCategorySlug(post);
  permanentRedirect(`/academy/${category}/${legacySlug}/`);
}
