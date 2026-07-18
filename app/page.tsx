import Link from "next/link";
import type { Metadata } from "next";
import ServiceTabs from "@/components/home/ServiceTabs";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import { getRecentPosts, getFeaturedImage, getCategories, stripHtml } from "@/lib/api/wordpress";
import { siteInfo } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Masters & MBA Dissertation Writing Services",
  description: "Tutors India provides expert Masters, MBA and PhD dissertation writing, editing, statistics and coding services. Trusted by 200,000+ scholars since 2001.",
  alternates: { canonical: "https://www.tutorsindia.com" },
};

const guarantees = [
  { icon: "⏱", title: "On-time Delivery", desc: "We always deliver work before the deadline. 95–98% on-time delivery rate achieved consistently.", href: "/our-process/" },
  { icon: "✅", title: "100% Originality", desc: "All our writing is screened through Turnitin and guaranteed 0–5% plagiarism free.", href: "/our-process/" },
  { icon: "🔁", title: "Unlimited Revisions", desc: "We offer unlimited revisions to committed work without any extra charge, even after completion.", href: "/our-process/" },
  { icon: "🎓", title: "Domain Expertise", desc: "2000+ subject-specific experts assigned per project. Quality assured by our QC team.", href: "/our-services/" },
];

const processSteps = [
  { n: "01", title: "Submit Requirements", desc: "Fill our enquiry form with topic, word count, deadline, and university guidelines." },
  { n: "02", title: "Get a Quote", desc: "Receive a detailed quote and reference number within 30 minutes of your enquiry." },
  { n: "03", title: "Writer Assigned", desc: "A qualified subject matter expert with relevant research experience is assigned to your project." },
  { n: "04", title: "Quality Check", desc: "Completed work is reviewed for grammar, content focus, plagiarism, and client requirements." },
  { n: "05", title: "Delivery & Revisions", desc: "Download your completed work and request unlimited free revisions until satisfied." },
];

const sampleCards = [
  {
    head: "Dissertation Samples",
    image: "/images/samples/dissertation-samples.webp",
    items: ["Topic Selection", "Research Proposal", "Literature Review", "Research Methodology", "Data Analysis", "Full Dissertation"],
    href: "/our-sample-works/dissertation-samples/",
  },
  {
    head: "Assignment Writing Samples",
    image: "/images/samples/assignment-writing.jpg",
    items: ["Essay Writing", "Assignment Help", "Annotated Bibliography", "Reflective Report", "Case Studies"],
    href: "/our-sample-works/essay-writing-samples/",
  },
  {
    head: "Publication & Research Support",
    image: "/images/samples/publication-research.jpg",
    items: ["Manuscript Development", "Medical Writing", "Engineering Research", "Conference Papers", "Biostatistics"],
    href: "/our-sample-works/",
  },
];

const stats = [
  { value: siteInfo.stats.scholars, label: "Scholars Served" },
  { value: siteInfo.stats.phdCandidates, label: "PhD Candidates" },
  { value: siteInfo.stats.mastersStudents, label: "Masters Students" },
  { value: siteInfo.stats.yearsInBusiness, label: "Years in Business" },
  { value: siteInfo.stats.writers, label: "Expert Writers" },
  { value: siteInfo.stats.countries, label: "Countries Served" },
];

export default async function Home() {
  const recentPosts = await getRecentPosts(3);

  return (
    <>
      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, var(--navy) 0%, #2563b0 100%)", color: "#fff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p style={{ fontSize: "0.85rem", color: "#a0b8e0", marginBottom: "8px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Trusted Since 2001 · UK · US · Australia
            </p>
            <h1 style={{ fontFamily: "Merriweather, serif", fontSize: "clamp(1.7rem,3.5vw,2.5rem)", lineHeight: 1.25, marginBottom: "16px" }}>
              Masters &amp; MBA Dissertation<br />Writing and Editing Services
            </h1>
            <p style={{ fontSize: "1.05rem", color: "#c5d5f0", marginBottom: "8px" }}>Trusted Academic Writing &amp; Editing Services</p>
            <p style={{ fontSize: "0.95rem", color: "#a0b8e0", marginBottom: "28px" }}>Guaranteed by the best in the Industry — 2,00,000+ scholars served worldwide</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "var(--orange)", color: "#fff", borderRadius: "5px", fontSize: "15px", fontWeight: 700 }}>
                Order Now
              </Link>
              <Link href="/our-process/" style={{ padding: "12px 28px", background: "rgba(255,255,255,0.15)", color: "#fff", borderRadius: "5px", fontSize: "15px", fontWeight: 600, border: "2px solid rgba(255,255,255,0.4)" }}>
                View Our Process
              </Link>
            </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: "var(--navy-dark)", padding: "28px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: "20px", textAlign: "center" }} className="stats-grid">
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: "1.6rem", fontWeight: 700, color: "#f9c74f", fontFamily: "Merriweather,serif" }}>{s.value}</div>
              <div style={{ fontSize: "0.75rem", color: "#a0b8e0", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:900px){.stats-grid{grid-template-columns:repeat(3,1fr)!important; padding-right:64px;}} @media(max-width:500px){.stats-grid{grid-template-columns:repeat(2,1fr)!important; padding-right:56px;}}`}</style>
      </section>

      {/* WHY + GET RESEARCH */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }} className="two-col">
        <div>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--navy)", marginBottom: "6px" }}>Why Tutors India?</h2>
          <p style={{ color: "var(--text-mid)", marginBottom: "20px", fontSize: "0.95rem" }}>A Genuine Company with presence across the World including the US, UK</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "Our team of writers & Statisticians are guided by high quality QC team from Harvard & Alabama",
              "Highest quality work in the industry — every piece reviewed by subject matter experts",
              "Registered Company based in Sheffield (U.K), Dallas (U.S) and Chennai (India)",
              "We guarantee your work and care deeply about your academic success",
              "2000+ PhD and Masters-qualified researchers across 80+ countries",
              "22+ years of experience serving students at UK, US, and Australian universities",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px", fontSize: "0.93rem", color: "var(--text-mid)" }}>
                <span style={{ color: "var(--orange)", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
          <br />
          <Link href="/about-us/" style={{ padding: "10px 22px", background: "var(--orange)", color: "#fff", borderRadius: "5px", fontSize: "14px", fontWeight: 600, display: "inline-block" }}>
            About Tutors India
          </Link>
        </div>

        <div style={{ background: "var(--navy)", color: "#fff", borderRadius: "12px", padding: "36px 32px" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "14px", lineHeight: 1.3, fontFamily: "Merriweather,serif" }}>
            Get Your Master's or DBA Research from your Academic Tutor with Unlimited Support!
          </h2>
          <p style={{ fontSize: "0.93rem", color: "#c5d5f0", marginBottom: "20px", lineHeight: 1.7 }}>
            At Tutors India, we offer high quality writing and data analysis services that have extremely benefited research scholars, students, professionals &amp; entrepreneurs across the globe. Our services span dissertation writing, statistical analysis, editing, and publication support.
          </p>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "24px" }}>
            {["Free 30-minute consultation", "Response within 30 minutes", "Chapter-by-chapter delivery", "Dedicated project coordinator"].map((item) => (
              <li key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", fontSize: "0.94rem", color: "#c5d5f0" }}>
                <span style={{ color: "#f9c74f" }}>→</span> {item}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: "10px" }}>
            <Link href="/contact-us/" style={{ flex: 1, textAlign: "center", padding: "10px 20px", background: "#fff", color: "var(--navy)", borderRadius: "5px", fontSize: "14px", fontWeight: 700 }}>
              Contact Us
            </Link>
            <Link href="/order-now/" style={{ flex: 1, textAlign: "center", padding: "10px 20px", background: "var(--orange)", color: "#fff", borderRadius: "5px", fontSize: "14px", fontWeight: 700 }}>
              Order Now
            </Link>
          </div>
        </div>

        <style>{`@media(max-width:768px){.two-col{grid-template-columns:1fr!important;}}`}</style>
      </div>

      {/* SERVICE TABS */}
      <ServiceTabs />

      {/* OUR PROCESS */}
      <section style={{ background: "var(--gray)", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>How We Work</h2>
            <p style={{ color: "var(--text-mid)", fontSize: "0.95rem" }}>Simple 5-step process from enquiry to delivery</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "16px" }} className="process-grid">
            {processSteps.map((step, idx) => (
              <div key={step.n} style={{ background: "#fff", borderRadius: "10px", padding: "22px 16px", textAlign: "center", border: "1px solid var(--border)", position: "relative" }}>
                {idx < processSteps.length - 1 && (
                  <div style={{ position: "absolute", right: "-24px", top: "50%", transform: "translateY(-50%)", color: "var(--border)", fontSize: "1.2rem", zIndex: 1 }} className="process-arrow">→</div>
                )}
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--navy)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.96rem", margin: "0 auto 12px" }}>
                  {step.n}
                </div>
                <h4 style={{ fontSize: "0.94rem", fontWeight: 700, color: "var(--navy)", marginBottom: "6px" }}>{step.title}</h4>
                <p style={{ fontSize: "0.78rem", color: "var(--text-mid)", lineHeight: 1.5 }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "28px" }}>
            <Link href="/our-process/" style={{ padding: "10px 28px", border: "2px solid var(--navy)", color: "var(--navy)", borderRadius: "5px", fontWeight: 600, fontSize: "0.96rem" }}>
              View Full Process →
            </Link>
          </div>
        </div>
        <style>{`@media(max-width:900px){.process-grid{grid-template-columns:repeat(3,1fr)!important;}.process-arrow{display:none!important;}} @media(max-width:600px){.process-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
      </section>

      {/* TRUST SECTION */}
      <section style={{ background: "var(--navy)", color: "#fff", padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 700, marginBottom: "8px" }}>Academic Research Company — Trusted by 2,00,000+</h2>
        <p style={{ fontSize: "1rem", color: "#c5d5f0", marginBottom: "40px" }}>Scholars, Students &amp; Entrepreneurs across the world Since 2001</p>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }} className="trust-grid">
          {[
            { icon: "🏆", title: "Leading provider of Academic Support", desc: "Our UK/US Experts can help you succeed in your Education Career. Tutors India is a pioneer in providing complete academic guidance for the past 22 years with more than 4,500 PhD Candidates and 10,500 Masters Students across the globe." },
            { icon: "⭐", title: "We are driven by Trust, Quality & Perfection", desc: "We value our client's time and undertake every instance with dedication. Our specialised scholars review each requirement immediately. Tutors India writers are retained as 'Researchers' who handle each unique and challenging topic with high-class perfectionism." },
            { icon: "🌍", title: "Global Reach & Expert Network", desc: "2000+ qualified writers from the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia, and Ukraine — covering 80+ countries and every major academic discipline at Masters and PhD level." },
          ].map((card) => (
            <div key={card.title} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "10px", padding: "28px 22px" }}>
              <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{card.icon}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "10px" }}>{card.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "#b0c4e0", lineHeight: 1.65 }}>{card.desc}</p>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.trust-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ABOUT + GUARANTEES */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }} className="about-grid">
        <div>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--navy)", marginBottom: "10px" }}>Find more About Tutors India</h2>
          <p style={{ color: "var(--text-mid)", marginBottom: "6px", fontSize: "0.95rem" }}>Who are we? Where are we? Why we do it?</p>
          <p style={{ color: "var(--text-mid)", marginBottom: "18px", fontSize: "0.92rem", lineHeight: 1.7 }}>
            Tutors India is a registered academic services company based in Sheffield (UK) and Dallas (US), operating since 2001. We provide dissertation writing, statistical analysis, editing, and publication support exclusively for students at UK, US, and Australian universities.
          </p>
          <div style={{ display: "flex", gap: "10px", marginBottom: "28px" }}>
            <Link href="/about-us/" style={{ padding: "9px 20px", background: "var(--orange)", color: "#fff", borderRadius: "5px", fontSize: "14px", fontWeight: 600 }}>
              About Tutors India
            </Link>
            <Link href="/our-process/" style={{ padding: "9px 20px", border: "2px solid var(--navy)", color: "var(--navy)", borderRadius: "5px", fontSize: "14px", fontWeight: 600 }}>
              Our Guarantees
            </Link>
          </div>
          <blockquote style={{ borderLeft: "4px solid var(--orange)", padding: "14px 18px", background: "var(--gray)", borderRadius: "0 8px 8px 0", fontStyle: "italic", color: "var(--text-mid)", fontSize: "0.96rem" }}>
            &quot;Tutors India helped me gain clarity on the direction my research proposal needed to go and provided me with more clarity in my work. The experts understood my difficulties in writing the research proposal and guided me accordingly.&quot;
            <cite style={{ display: "block", marginTop: "10px", fontSize: "0.82rem", fontStyle: "normal", fontWeight: 600, color: "var(--navy)" }}>— Niamh McLaughlin</cite>
          </blockquote>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {guarantees.map((g) => (
            <div key={g.title} style={{ background: "var(--gray)", borderRadius: "10px", padding: "22px", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{g.icon}</div>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--navy)", marginBottom: "6px" }}>{g.title}</h4>
              <p style={{ fontSize: "0.82rem", color: "var(--text-mid)", marginBottom: "12px", lineHeight: 1.55 }}>{g.desc}</p>
              <Link href={g.href} style={{ padding: "6px 14px", border: "1.5px solid var(--blue)", color: "var(--blue)", borderRadius: "5px", fontSize: "0.82rem", fontWeight: 600 }}>
                Read More
              </Link>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: "var(--gray)", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>What Our Clients Say</h2>
            <p style={{ color: "var(--text-mid)" }}>Trusted by scholars and professionals across the globe</p>
          </div>
          <TestimonialsSlider />
          <div style={{ textAlign: "center", marginTop: "28px" }}>
            <Link href="/testimonials/" style={{ padding: "10px 28px", border: "2px solid var(--navy)", color: "var(--navy)", borderRadius: "5px", fontWeight: 600 }}>
              View All Testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* SAMPLE WORK */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 36px" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>Sample Work</h2>
            <p style={{ color: "var(--text-mid)" }}>View our service samples to understand the quality we deliver</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="sample-grid">
            {sampleCards.map((card) => (
              <div key={card.head} style={{ background: "#fff", borderRadius: "10px", border: "1px solid var(--border)", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", height: "160px", overflow: "hidden", background: "#dde8f5", flexShrink: 0 }}>
                  <img
                    src={card.image}
                    alt={card.head}
                    width={400}
                    height={160}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,42,108,0.75) 0%, transparent 55%)" }} />
                  <div style={{ position: "absolute", bottom: "12px", left: "14px", right: "14px", color: "#fff", fontSize: "0.92rem", fontWeight: 700, lineHeight: 1.3 }}>{card.head}</div>
                </div>
                <ul style={{ padding: "12px 18px", listStyle: "none" }}>
                  {card.items.map((item) => (
                    <li key={item} style={{ padding: "7px 0", borderBottom: "1px solid var(--border)", fontSize: "0.87rem", color: "var(--text-mid)", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: "var(--orange)", fontSize: "0.8rem" }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={card.href} style={{ display: "block", textAlign: "center", padding: "11px", fontSize: "0.85rem", fontWeight: 600, color: "var(--blue)", borderTop: "1px solid var(--border)", marginTop: "auto" }}>
                  View Samples →
                </Link>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:768px){.sample-grid{grid-template-columns:1fr 1fr!important;}} @media(max-width:500px){.sample-grid{grid-template-columns:1fr!important;}}`}</style>
        </div>
      </section>

      {/* RECENT BLOG */}
      <section style={{ background: "var(--gray)", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 36px" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>Latest from Our Blog</h2>
            <p style={{ color: "var(--text-mid)" }}>Expert guides on dissertation writing, research methodology &amp; academic success</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }} className="blog-grid">
            {recentPosts.map((post) => {
              const image = getFeaturedImage(post);
              const cats = getCategories(post);
              const excerpt = stripHtml(post.excerpt.rendered, 100);
              return (
                <article key={post.id} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "10px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <Link href={`/blog/${post.slug}/`} style={{ display: "block", position: "relative", height: "180px", overflow: "hidden", background: "#dde8f5" }}>
                    {image ? (
                      <img
                        src={image}
                        alt={post.title.rendered}
                        width={400}
                        height={180}
                        loading="lazy"
                        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s" }}
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#1a2a6c,#2563b0)", color: "#fff", fontSize: "2.5rem" }}>📖</div>
                    )}
                    {cats[0] && (
                      <div style={{ position: "absolute", top: "10px", left: "10px", background: "var(--orange)", color: "#fff", fontSize: "0.7rem", fontWeight: 700, padding: "3px 8px", borderRadius: "3px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                        {cats[0]}
                      </div>
                    )}
                  </Link>
                  <div style={{ padding: "18px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <div style={{ fontSize: "0.76rem", color: "var(--text-light)", marginBottom: "7px" }}>
                      {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </div>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--navy)", marginBottom: "8px", lineHeight: 1.4 }}>
                      <Link href={`/blog/${post.slug}/`} style={{ color: "var(--navy)" }} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    </h3>
                    <p style={{ fontSize: "0.84rem", color: "var(--text-mid)", marginBottom: "14px", lineHeight: 1.6 }}>{excerpt}…</p>
                    <Link href={`/blog/${post.slug}/`} style={{ color: "var(--blue)", fontWeight: 600, fontSize: "0.84rem", marginTop: "auto" }}>Read More →</Link>
                  </div>
                </article>
              );
            })}
          </div>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/blog/" style={{ display: "inline-block", padding: "11px 30px", border: "2px solid var(--navy)", color: "var(--navy)", borderRadius: "5px", fontWeight: 600, fontSize: "0.96rem" }}>
              View All Posts →
            </Link>
          </div>
          <style>{`@media(max-width:768px){.blog-grid{grid-template-columns:1fr 1fr!important;}} @media(max-width:500px){.blog-grid{grid-template-columns:1fr!important;}}`}</style>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: "linear-gradient(135deg, var(--navy) 0%, #2563b0 100%)", color: "#fff", padding: "56px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, marginBottom: "12px" }}>Ready to Get Started?</h2>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.88)", marginBottom: "10px" }}>
          Join 2,00,000+ scholars who have trusted Tutors India with their academic success since 2001.
        </p>
        <p style={{ fontSize: "0.96rem", color: "rgba(255,255,255,0.7)", marginBottom: "28px" }}>Response within 30 minutes · Unlimited Revisions · Plagiarism Free</p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "13px 36px", background: "var(--orange)", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "1rem" }}>
            Order Now
          </Link>
          <Link href="/contact-us/" style={{ padding: "13px 36px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700, fontSize: "1rem" }}>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
