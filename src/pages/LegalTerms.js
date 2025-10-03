import React from 'react'

export default function LegalTerms() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
        <h1 className="text-2xl font-semibold">Terms of Service</h1>
        <p className="text-sm text-[color:var(--text)]/70 mt-1">Sample terms content for demonstration.</p>
      </section>
      <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card text-sm opacity-80 space-y-2">
        <p>Use at your own discretion; do not upload sensitive data without agreement.</p>
        <p>Service is provided as‑is with uptime best efforts.</p>
      </section>
    </div>
  )
}
