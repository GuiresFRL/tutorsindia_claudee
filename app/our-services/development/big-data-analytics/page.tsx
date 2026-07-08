import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";
export const metadata: Metadata = { title: "Big Data Analytics Services | Hadoop, Spark, ML", description: "Expert Big Data Analytics Services. Predictive Analytics, Time Series, Machine Learning, Hadoop, Hive, Spark. Tutors India." };
const models = ["Predictive Analytics","Time Series (Moving Average, ARIMA)","Linear & Non-linear Regression","Logistic Regression","Classification Models","Clustering (K-means, DBSCAN)","Neural Networks & Deep Learning","Random Forest & Ensemble Methods","Support Vector Machines","Natural Language Processing","Recommendation Systems","Anomaly Detection"];
const tools = ["Apache Hadoop","Apache Hive","Apache Spark","Python (Pandas, NumPy, Scikit-learn)","R & R Studio","TensorFlow / PyTorch","Tableau / Power BI","SQL / NoSQL Databases","Kafka","Airflow","Databricks","AWS EMR"];
const faqs = [
  { q: "What big data analytics models do you apply?", a: "At Tutors India, we apply various models including Predictive Analytics — Time series methods (e.g. moving average, exponential smoothing, autoregressive models), Linear, non-linear and Logistic regression, Classification, Clustering, Neural Networks, Deep Learning, NLP, and many more. We also support migration to new analytical systems and produce innovative big data solutions based on Apache Hadoop, Apache Hive, and Apache Spark frameworks." },
  { q: "Can you help with Hadoop and Spark projects?", a: "Yes. We provide development support for Apache Hadoop, Hive, and Spark — including HDFS setup, MapReduce programming, Hive queries, Spark data processing pipelines, and distributed machine learning. We handle both academic research projects and practical big data implementation assignments." },
  { q: "Do you help with data visualisation?", a: "Yes. We provide comprehensive data visualisation using Tableau, Power BI, Python (Matplotlib, Seaborn, Plotly) and R (ggplot2). All visualisations are formatted for academic publication or commercial presentation standards." },
  { q: "Can you analyse large datasets for dissertation research?", a: "Yes. We can handle large datasets from various sources — structured, unstructured, and semi-structured data. We manage data cleaning, preprocessing, feature engineering, model training, evaluation, and result interpretation, presenting findings in a format suitable for your dissertation chapter." },
  { q: "What industries do you cover for big data analytics?", a: "We serve healthcare, financial services, retail, manufacturing, education, telecommunications, logistics, and many other industries. Our analytical team brings in-depth knowledge and domain expertise across a broad spectrum of industries, ensuring context-appropriate analysis and interpretation." },
];
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  }))
};
const testimonials = [
  { quote: "I would like to express my satisfaction on the co-operation regarding the data collection of big data analysis of my project. The experts and the technical team did a very professional job. Well done and I hope we can continue to grow together.", author: "Faiyaz", avatar: "/images/testimonials/t18.jpg" },
  { quote: "Tutors India was not only easy to work with, but her communication was also excellent. I was badly struggling to complete my project in big data analytics since I am new to the statistics field. They met every deadline.", author: "Isabella", avatar: "/images/testimonials/t09.jpg" },
  { quote: "Faced a lot of difficulties whilst drafting my scientific research report on big data analytics. Tutors India helped me a lot and coordinated to write the best report for my research. Received exactly what I needed.", author: "Nitya", avatar: "/images/testimonials/t09.jpg" },
];
export default function BigDataAnalyticsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section style={{ background: "linear-gradient(135deg,#1a2a6c 0%,#2563b0 100%)", color: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="hero-inner">
          <div>
            <div style={{ fontSize: "0.82rem", color: "#a0b8e0", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "#a0b8e0" }}>Home</Link>{" / "}<Link href="/our-services/" style={{ color: "#a0b8e0" }}>Services</Link>{" / "}<Link href="/our-services/development/" style={{ color: "#a0b8e0" }}>Development</Link>{" / "}<span style={{ color: "#fff" }}>Big Data Analytics</span>
            </div>
            <h1 style={{ fontFamily: "Merriweather,serif", fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.3, marginBottom: "16px" }}>Big Data Analytics Services</h1>
            <p style={{ color: "#c5d5f0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "10px" }}>At Tutors India, we apply various models including Predictive Analytics, Time Series methods, Linear/non-linear and Logistic regression, Machine Learning, and Deep Learning. We support innovative big data solutions based on Apache Hadoop, Apache Hive and Apache Spark frameworks.</p>
            <p style={{ color: "#f9c74f", fontSize: "0.92rem", fontWeight: 600, marginBottom: "20px" }}>Hadoop · Hive · Spark · Python · R · TensorFlow · Tableau</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/order-now/" style={{ padding: "12px 28px", background: "#e87722", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Place an Order</Link>
              <Link href="/contact-us/" style={{ padding: "12px 28px", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", borderRadius: "5px", fontWeight: 600 }}>Contact Us</Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "24px", textAlign: "center", minWidth: "170px" }} className="hero-badge">
            <img src="/images/services/primary-secondary-research.webp" alt="Research and development planning" style={{ width: "220px", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
            <div style={{ fontSize: "0.75rem", color: "#c5d5f0", lineHeight: 1.6 }}>Hadoop · Hive · Spark<br />ML · Deep Learning<br />All Industries</div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-inner{grid-template-columns:1fr!important;}.hero-badge{display:none!important;}}`}</style>
      </section>
      <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", marginBottom: "28px" }} className="two-col-grid">
          <div style={{ background: "#1a2a6c", color: "#fff", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "14px" }}>Analytics Models We Apply</h3>
            {models.map(m => (<div key={m} style={{ display: "flex", gap: "8px", padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.82rem", color: "#c5d5f0" }}><span style={{ color: "#f9c74f", fontWeight: 700 }}>→</span> {m}</div>))}
          </div>
          <div style={{ background: "#f5f6fa", borderRadius: "12px", padding: "24px", border: "1px solid #dde2ef" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "14px" }}>Tools &amp; Frameworks</h3>
            {tools.map(t => (<div key={t} style={{ display: "flex", gap: "8px", padding: "5px 0", borderBottom: "1px solid #dde2ef", fontSize: "0.82rem", color: "#555" }}><span style={{ color: "#e87722", fontWeight: 700 }}>→</span> {t}</div>))}
          </div>
        </div>
        <TestimonialSlider testimonials={testimonials} />
        <div style={{ marginBottom: "28px" }}><h2 style={{ fontFamily: "Merriweather,serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>Frequently Asked Questions</h2><FaqAccordion faqs={faqs} /></div>
      </section>
      <section style={{ background: "#e87722", color: "#fff", padding: "52px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: "10px" }}>Get Expert Big Data Analytics Support</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", marginBottom: "22px" }}>Hadoop · Spark · ML · Python · R · All Industries · Response in 30 min</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/order-now/" style={{ padding: "12px 32px", background: "#fff", color: "#e87722", borderRadius: "5px", fontWeight: 700 }}>Order Now</Link>
          <Link href="/contact-us/" style={{ padding: "12px 32px", border: "2px solid #fff", color: "#fff", borderRadius: "5px", fontWeight: 700 }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
