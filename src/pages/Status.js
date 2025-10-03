import React from 'react'
import SectionReveal from '../components/SectionReveal'

export default function Status() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
        <h1 className="text-2xl font-semibold">Status</h1>
        <p className="text-sm text-[color:var(--text)]/70 mt-1">All systems operational.</p>
      </section>
      <SectionReveal>
        <section className="grid md:grid-cols-3 gap-4 text-sm">
          {['Web App','n8n Pipeline','Supabase'].map((s,i)=>(
            <div key={i} className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
              <div className="font-medium">{s}</div>
              <div className="opacity-70 mt-1">Uptime: 99.98%</div>
            </div>
          ))}
        </section>
      </SectionReveal>
      <SectionReveal>
        <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card text-sm">
          <div className="font-medium mb-2">Recent Incidents</div>
          <div className="opacity-70">None reported.</div>
        </section>
      </SectionReveal>
    </div>
  )
}
