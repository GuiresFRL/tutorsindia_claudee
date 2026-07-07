import type { Metadata } from "next";
import { fetchProxiedPage } from "@/lib/api/proxyPage";
import { cleanElementorHtml } from "@/lib/cleanElementor";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Master's Dissertation Topic Selection Services in UK & UAE",
  description: "Get expert master's Dissertation Topic Selection Services in the UK & UAE to choose unique, high-scoring, and university-approved research topics fast.",
  keywords: [
    "master's dissertation topic selection services in UK",
    "master's dissertation topic selection help in UAE",
    "master's dissertation topic help",
    "master's thesis topics service",
    "master's thesis topics help",
    "custom dissertation topic writing services",
    "master's dissertation topic writing services UK",
    "master's dissertation topic writing help UAE",
  ],
  alternates: { canonical: "https://tutorsindia.com/our-services/masters-dissertation-writing-services/dissertation-topic/" },
};

export default async function DissertationTopicPage() {
  const page = await fetchProxiedPage("/our-services/masters-dissertation-writing-services/dissertation-topic/");
  const content = page?.content ? cleanElementorHtml(page.content) : "";

  return (
    <>
      <div
        className="wp-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
}
