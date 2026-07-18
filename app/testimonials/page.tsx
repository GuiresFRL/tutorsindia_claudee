import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials — Real Client Experiences",
  description: "Read real testimonials from 2,00,000+ scholars who trusted Tutors India with their academic success. Dissertations, assignments, statistical analysis and more.",
  alternates: { canonical: "https://www.tutorsindia.com/testimonials" },
};

const featuredTestimonials = [
  { quote: "Noora Al Zaabi, UAE", text: "This service saved me during one of the most stressful phases of my academic journey. Reliable, professional, and genuinely supportive throughout the process.", author: "Noora Al Zaabi", location: "UAE", avatar: "/images/testimonials/layla-al-mansoori-lg.webp" },
  { quote: "", text: "I was amazed at how naturally the content matched my writing style and university standards. It felt authentic, polished, and academically strong.", author: "Emily Carter", location: "", avatar: "/images/testimonials/charlotte-reed-lg.webp" },
  { quote: "", text: "What impressed me most was how personalized the support felt. They didn't just complete the work — they understood my goals and helped me present them better.", author: "Khalid Al Nuaimi", location: "", avatar: "/images/testimonials/emily-carter.webp" },
  { quote: "", text: "The final work looked so refined and well-structured that even my mentor appreciated the improvement immediately. Highly recommended for serious academic support.", author: "George Whitmore", location: "UK", avatar: "/images/testimonials/george-whitmore-lg.webp" },
  { quote: "", text: "The team handled everything professionally from start to finish. Timely updates, quick responses, and excellent academic quality — exactly what students need during stressful deadlines.", author: "Zain Al Hashmi", location: "UAE", avatar: "/images/testimonials/noora-al-zaabi-lg.webp" },
  { quote: "", text: "I submitted my work with complete confidence for the first time ever. The quality, formatting, and clarity were all beyond what I hoped for.", author: "Charlotte Reed", location: "UK", avatar: "/images/testimonials/hassan-al-falasi-lg.webp" },
  { quote: "", text: "My research finally started making sense after working with this team. Their guidance simplified complex ideas and gave my project the structure it was missing.", author: "Hassan Al Falasi", location: "UAE", subject: "Essay Writing and Assignment Writing", avatar: "/images/testimonials/khalid-al-nuaimi-lg.webp" },
  { quote: "", text: "The attention to detail was incredible. It didn't feel like I was working with a service provider — it felt like I had an expert academic partner guiding me throughout.", author: "Layla Al Mansoori", location: "", subject: "Essay Writing and Assignment Writing", avatar: "/images/testimonials/amelia-brooks-lg.webp" },
  { quote: "", text: "I was stuck, frustrated, and running out of time. Tutors India stepped in at the perfect moment and turned everything around faster than I imagined. Worth every bit.", author: "Oliver Bennett", location: "UK", subject: "Big Data Analytics", avatar: "/images/testimonials/oliver-bennett-lg.webp" },
  { quote: "", text: "Honestly, I didn't expect this level of quality. The team understood exactly what I needed and delivered work that felt genuinely professional. My confidence went from stressed to unstoppable.", author: "Amelia Brooks", location: "UK", subject: "Big Data Analytics", avatar: "/images/testimonials/zain-al-hashmi.webp" },
];

const moreTestimonials = [
  { text: "I used to use another service, but I usually received poorly written papers and overpaid for it. I made my decision after discovering your service and receiving a superb dissertation from you. Thank you very much.", author: "C S", location: "Sheffield, UK", avatar: "/images/testimonials/user-profile.png" },
  { text: "My friend recommended that I use your service just when I was about to give up on my dissertation. I'm now a PhD holder, and I'm overjoyed about it. Thank you for your help.", author: "Ishani", location: "", avatar: "/images/testimonials/Sahana.jpg" },
  { text: "I knew dissertation writing was way more difficult in the higher studies. But when it came to my research paper that was to be handed in in 72 hours, I had no variants. I made the right choice when I ordered my paper from Tutors India.", author: "Olivia", location: "UK", avatar: "/images/testimonials/t08.jpg" },
  { text: "Great service for non-native English writing authors! Tutors India's dissertation writing service helps me to formulate my ideas in more clear and straightforward way and to eliminate common grammatical errors.", author: "Ryan", location: "", avatar: "/images/testimonials/t21.jpg" },
  { text: "The dissertation presented by you for the project is truly commendable. I really appreciate your efforts and professionalism by which you have completed the project well on time. I'll definitely refer to my friends who struggle in writing the dissertation.", author: "Aryaman", location: "", avatar: "/images/testimonials/t13.jpg" },
  { text: "Tutors India helped me gain clarity on the direction my research proposal needed to go and provided me with more clarity in my work. I wholeheartedly endorse Tutors India as a best and professional service.", author: "Glenn McLaughlin", location: "", avatar: "/images/testimonials/user-profile.png" },
  { text: "I was really struggling with my final semester master's degree, that's when I heard about Tutors India. The level of detail which went into creating the research proposal is astonishing. Would definitely recommend.", author: "David Morrison", location: "", avatar: "/images/testimonials/user-profile.png" },
  { text: "I can't express how pleased I am with how the resume turned out. I used to worry that no one would hire me when I looked at my résumé, but now that I've changed it, I'm much more confident.", author: "Dr. Mikael Sundström, PhD", location: "", avatar: "/images/testimonials/user-profile.png" },
  { text: "Unbelievable! I would say the writer followed all of my specifications and produced a fantastic dissertation. What I particularly enjoy is that no one thinks that my dissertation was not authored by me.", author: "Dr. Olivia W. Carter, MD, PhD", location: "", avatar: "/images/testimonials/user-profile.png" },
  { text: "Whether you believe it or not, I am completely delighted with the essay you wrote for me. I received a wonderful grade, and I am now certain that your promises are true.", author: "Dr. Declan O'Connell, MD, PhD", location: "", avatar: "/images/testimonials/user-profile.png" },
  { text: "Tutors India is highly recommended! I was able to complete my doctoral studies because of their statistical analysis ability. Throughout the process, they were meticulous, prompt, and enthusiastic.", author: "Divit", location: "", avatar: "/images/testimonials/Divit.jpg" },
  { text: "I'm a PCC undergraduate who had to do a scientific poster presentation. Your templates were beautiful and easy to use. I had no issue creating, altering, or changing the entire thing. It arrived on schedule and looked fantastic!", author: "Hamsika", location: "", avatar: "/images/testimonials/Pavati.jpg" },
  { text: "Tutors India gathered enormous data for my research work on complexity in consumer problem. It helped me complete my research work faster. I am overwhelmed by their quality and speed of service.", author: "Divij", location: "UK", avatar: "/images/testimonials/t18.jpg" },
  { text: "Topic selection was extraordinary, my professor approved on the first go. Good. I will sure recommend the service to all my class mates.", author: "C S", location: "Sheffield, UK", avatar: "/images/testimonials/t14.jpg" },
  { text: "4 times my research topic is rejected so I contact tutors India, recommended by one of my friend. Thank you so much tutors India — such an impressive topic selection. I revert back for my further chapter writing support.", author: "B A", location: "London, UK", avatar: "/images/testimonials/t20.jpg" },
  { text: "I must confess I was not quite convinced when I received the topics from their professionals. I thought they were too specific. But then my guide appreciated me for being that specific! Great team, great work, fair prices!", author: "Divij", location: "UK", avatar: "/images/testimonials/t20.jpg" },
  { text: "After evaluating a few outsourcers I decided to work with Tutors India because of their professional approach and ability to make changes about what I really needed in my language editing. Very satisfied.", author: "Zoe", location: "", avatar: "/images/testimonials/t05.jpg" },
  { text: "Just when I was about to give up on my poster presentation, my friend advised me to use your Tutors India. It was timely advice because I was stuck and didn't know what to do. Now I could finally present the poster.", author: "Zoe", location: "Japan", avatar: "/images/testimonials/t04.jpg" },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
            <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<span style={{ color: "#fff" }}>Testimonials</span>
          </div>
          <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.7rem,3.5vw,2.4rem)", marginBottom: "16px" }}>Real Client Experiences</h1>
          <p style={{ color: "#c5d5f0", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "24px" }}>
            From challenging deadlines to outstanding results, our clients share how we made a difference in their academic journey. Read the stories behind the achievements and the trust we&apos;ve built over the years.
          </p>
          <div style={{ display: "flex", gap: "28px", justifyContent: "center", flexWrap: "wrap" }}>
            {[{ n: "2,00,000+", l: "Scholars Served" }, { n: "22+", l: "Years" }, { n: "4,500+", l: "PhDs Guided" }, { n: "80+", l: "Countries" }].map(s => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#f9c74f" }}>{s.n}</div>
                <div style={{ fontSize: "0.75rem", color: "#a0b8e0", textTransform: "uppercase" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "56px auto", padding: "0 20px" }}>

        {/* Featured Testimonials with Photos */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.5rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "6px", textAlign: "center" }}>
          Hear from Our Clients
        </h2>
        <p style={{ color: "#666", fontSize: "0.96rem", marginBottom: "32px", textAlign: "center" }}>
          Real students, real results — trusted by scholars across the globe
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "20px", marginBottom: "56px" }} className="two-col-grid">
          {featuredTestimonials.map((t, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "12px", padding: "24px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <img src={t.avatar} alt={t.author} style={{ width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: "3px solid #dde2ef" }} loading="lazy" />
              <div>
                <div style={{ color: "#e87722", fontSize: "1.8rem", lineHeight: 1, marginBottom: "6px", fontFamily: "serif" }}>&ldquo;</div>
                <p style={{ color: "#555", fontSize: "0.94rem", lineHeight: 1.75, fontStyle: "italic", marginBottom: "12px" }}>{t.text}</p>
                <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.94rem" }}>{t.author}</div>
                {t.location && <div style={{ fontSize: "0.75rem", color: "#888" }}>{t.location}</div>}
                {t.subject && <div style={{ fontSize: "0.72rem", color: "#e87722", marginTop: "2px" }}>{t.subject}</div>}
              </div>
            </div>
          ))}
        </div>

        {/* More Testimonials Grid */}
        <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "28px", textAlign: "center" }}>
          More Client Voices
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginBottom: "56px" }} className="three-col-grid">
          {moreTestimonials.map((t, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #dde2ef", borderRadius: "10px", padding: "20px" }}>
              <div style={{ color: "#e87722", fontSize: "1.8rem", lineHeight: 1, marginBottom: "6px", fontFamily: "serif" }}>&ldquo;</div>
              <p style={{ color: "#555", fontSize: "0.84rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "14px" }}>{t.text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={t.avatar} alt={t.author} style={{ width: "38px", height: "38px", borderRadius: "50%", objectFit: "cover", border: "2px solid #dde2ef" }} loading="lazy" />
                <div>
                  <div style={{ fontWeight: 700, color: "#1a2a6c", fontSize: "0.84rem" }}>{t.author}</div>
                  {t.location && <div style={{ fontSize: "0.72rem", color: "#888" }}>{t.location}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "40px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>Join 2,00,000+ Satisfied Scholars</h2>
          <p style={{ color: "#c5d5f0", fontSize: "0.95rem", marginBottom: "22px" }}>Start your academic success story with Tutors India — trusted since 2001</p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order-now/" style={{ padding: "12px 32px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
            <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:768px){.two-col-grid{grid-template-columns:1fr!important;}.three-col-grid{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
