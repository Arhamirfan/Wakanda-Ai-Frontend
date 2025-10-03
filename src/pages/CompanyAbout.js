import React from 'react'
import SectionReveal from '../components/SectionReveal'

export default function CompanyAbout() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
        <h1 className="text-2xl font-semibold">About</h1>
        <p className="text-sm text-[color:var(--text)]/70 mt-1">We build AI with receipts — answers you can trust.</p>
      </section>
      <SectionReveal>
        <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
          <h2 className="text-lg font-semibold mb-3">Timeline</h2>
          <ul className="text-sm opacity-80 space-y-2">
            <li>2024 — Prototype RAG with citations</li>
            <li>2025 — Production embedding pipeline with n8n → pgvector</li>
          </ul>
        </section>
      </SectionReveal>
    </div>
  )
}
