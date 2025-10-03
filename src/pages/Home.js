import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';
import LogoMarquee from '../components/LogoMarquee';
import MetricCounter from '../components/MetricCounter';
import Carousel from '../components/Carousel';
import ParallaxField from '../components/ParallaxField'; 

export default function Home() {
  return (
    <div className="space-y-10">
      <ParallaxField>
        <section className="relative overflow-hidden rounded-2xl border border-[#1F2937] bg-[#0F172A] p-8 shadow-card">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-[#9fb4ff] text-transparent bg-clip-text">
              Ask your documents. Get answers with receipts.
            </h1>
            <p className="mt-4 text-[color:var(--text)]/70">
              Upload PDFs. We index them into pgvector via n8n. Ask questions and get verified answers with citations.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link to="/company/contact" className="px-4 py-2 rounded-xl text-sm bg-gradient-to-b from-primary to-[#4F46E5] shadow hover:-translate-y-0.5 transition">Launch Your Agent</Link>
              <a href="/product" className="px-4 py-2 rounded-xl text-sm border border-[#1F2937] bg-[#0B1220] hover:bg-[#0F172A] transition">How it works</a>
            </div>
          </motion.div>
        </section>
      </ParallaxField>

      <LogoMarquee /> 

      <SectionReveal>
        <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card" id="how">
          <h2 className="text-lg font-semibold mb-3 text-[color:var(--text)]">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-5">
            {[
              { title: 'Upload', desc: 'Drop PDFs. We extract and prepare chunks.' },
              { title: 'Embed', desc: 'n8n pipeline → pgvector in Supabase.' },
              { title: 'Ask', desc: 'Chat with citations and page-level quotes.' },
            ].map((s, i) => (
              <div key={i} className="rounded-xl border border-[#1F2937] bg-[#0B1220] p-4">
                <div className="text-sm opacity-70">Step {i + 1}</div>
                <div className="font-medium mt-1">{s.title}</div>
                <div className="text-sm opacity-70 mt-1">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
          <h2 className="text-lg font-semibold mb-3 text-[color:var(--text)]">Outcomes</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center mt-5">
            <div className="rounded-xl border border-[#1F2937] bg-[#0B1220] p-4"><div className="text-2xl font-semibold"><MetricCounter value={2} suffix="s" /></div><div className="opacity-60 text-sm">p50 latency</div></div>
            <div className="rounded-xl border border-[#1F2937] bg-[#0B1220] p-4"><div className="text-2xl font-semibold"><MetricCounter value={95} suffix="%" /></div><div className="opacity-60 text-sm">accuracy with citations</div></div>
            <div className="rounded-xl border border-[#1F2937] bg-[#0B1220] p-4"><div className="text-2xl font-semibold"><MetricCounter value={0} suffix=" PII" /></div><div className="opacity-60 text-sm">by default</div></div>
            <div className="rounded-xl border border-[#1F2937] bg-[#0B1220] p-4"><div className="text-2xl font-semibold"><MetricCounter value={100} suffix="%" /></div><div className="opacity-60 text-sm">admin visibility</div></div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
          <h2 className="text-lg font-semibold mb-3 text-[color:var(--text)]">Testimonials</h2>
          <Carousel
            items={[
              <Testimonial name="Engineering Lead" quote="We replaced our internal KB with Wakanda AI — answers with receipts changed trust." />,
              <Testimonial name="Legal Ops" quote="Citations and page quotes are mandatory. This nails it." />,
              <Testimonial name="Clinical QA" quote="Audit-ready answers, sub‑2s, and exportable citations — perfect." />,
            ]}
          />
        </section>
      </SectionReveal>
    </div>
  );
}

function Testimonial({ name, quote }) {
  return (
    <div className="grid md:grid-cols-[64px_1fr] gap-4 items-start">
      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-[#8B5CF6]" />
      <div>
        <div className="opacity-70 text-sm">{name}</div>
        <div className="mt-1">“{quote}”</div>
      </div>
    </div>
  )
}
