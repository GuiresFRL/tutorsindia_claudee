import type { Metadata } from "next";

// Metadata lives here because page.tsx is a client component (form state),
// and client components cannot export metadata.
export const metadata: Metadata = {
  title: "Ask Your Academic Question",
  description:
    "Ask an academic question and get a free answer from Tutors India's subject matter experts. Dissertation, assignment, statistics and research methodology guidance since 2001.",
  alternates: { canonical: "https://www.tutorsindia.com/ask-an-expert/ask-a-question" },
};

export default function AskAQuestionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
