import React from 'react'
import SectionReveal from '../components/SectionReveal'

export default function Solutions() {
  const sections = [
    {
      title: 'HR',
      lead: 'Policies, handbooks, benefits — answered with receipts.',
      bullets: ['Benefit eligibility with page quotes', 'Policy change summaries', 'Onboarding handbook Q&A'],
    },
    {
      title: 'Legal',
      lead: 'Contracts, memos, standards — always cited.',
      bullets: ['Clause comparisons with sources', 'Policy lookups across playbooks', 'Export memos with citations'],
    },
    {
      title: 'Clinical Ops',
      lead: 'SOPs, protocols, audits — audit-ready answers.',
      bullets: ['Protocol lookup with page refs', 'Deviation analysis with quotes', 'Audit export packets'],
    },
  ]
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
        <h1 className="text-2xl font-semibold">Solutions</h1>
        <p className="text-sm text-[color:var(--text)]/70 mt-1">Tailored outcomes by industry with mini‑presets.</p>
      </section>
      {sections.map((s,i)=> (
        <SectionReveal key={i}>
          <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
            <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
              <div>
                <div className="text-lg font-semibold">{s.title}</div>
                <div className="opacity-70 text-sm mt-1">{s.lead}</div>
                <ul className="list-disc pl-5 opacity-80 text-sm mt-3 space-y-1">
                  {s.bullets.map((b,idx)=> <li key={idx}>{b}</li>)}
                </ul>
              </div>
              <div className="rounded-xl border border-[#1F2937] bg-[#0B1220] p-4 min-w-[280px]">
                <div className="text-sm opacity-70 mb-2">Mini Preset</div>
                <div className="text-sm">Loads sample docs and suggested prompts for {s.title}.</div>
              </div>
            </div>
          </section>
        </SectionReveal>
      ))}
    </div>
  )
}
