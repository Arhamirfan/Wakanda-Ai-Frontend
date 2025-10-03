import React from 'react';
import SectionReveal from '../components/SectionReveal';
import RAGDemo from '../components/RAGDemo';

export default function Product() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
        <h1 className="text-2xl font-semibold">Product</h1>
        <p className="text-sm text-[color:var(--text)]/70 mt-1">Multi‑doc RAG with citations, ready for teams.</p>
      </section>

      <SectionReveal>
        <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-4 shadow-card">
          <RAGDemo />
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
          <h2 className="text-lg font-semibold mb-3 text-[color:var(--text)]">Features</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { t: 'Citations First', d: 'Every answer includes sources with page‑level quotes.' },
              { t: 'Answer Modes', d: 'Summary, Extract, Bullets, or Quote‑Only on demand.' },
              { t: 'Source Scopes', d: 'All Docs / Current / Selected collections.' },
              { t: 'Exports', d: 'Markdown/PDF exports with footnoted citations.' },
              { t: 'Insights', d: 'Auto summary, entities, dates, and keyword cloud.' },
              { t: 'Admin', d: 'Retention, PII redaction, roles, audit log.' },
            ].map((f,i) => (
              <div key={i} className="rounded-xl border border-[#1F2937] bg-[#0B1220] p-4">
                <div className="font-medium">{f.t}</div>
                <div className="text-sm opacity-70 mt-1">{f.d}</div>
              </div>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
          <h2 className="text-lg font-semibold mb-3 text-[color:var(--text)]">Answer Modes</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {['Summary','Extract','Bullets','Quote‑Only'].map((m,i)=> (
              <div key={i} className="rounded-xl border border-[#1F2937] bg-[#0B1220] p-4 text-center">{m}</div>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
          <h2 className="text-lg font-semibold mb-3 text-[color:var(--text)]">Screenshots</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[1,2,3].map((i)=> (
              <div key={i} className="aspect-video rounded-xl border border-[#1F2937] bg-[#0B1220]" />
            ))}
          </div>
        </section>
      </SectionReveal>
    </div>
  );
}
