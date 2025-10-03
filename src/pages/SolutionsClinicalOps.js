import React from 'react'
import SectionReveal from '../components/SectionReveal'

export default function SolutionsClinicalOps() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
        <h1 className="text-2xl font-semibold">Clinical Ops</h1>
        <p className="text-sm text-[color:var(--text)]/70 mt-1">SOPs, protocols, audits — with citations.</p>
      </section>
      <SectionReveal>
        <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
          <h2 className="text-lg font-semibold mb-3">Use Cases</h2>
          <ul className="list-disc pl-5 opacity-80 text-sm space-y-1">
            <li>Protocol lookups with page references</li>
            <li>Deviation analysis with quoted excerpts</li>
            <li>Audit readiness with exportable citations</li>
          </ul>
        </section>
      </SectionReveal>
    </div>
  )
}
