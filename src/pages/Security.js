import React from 'react'
import SectionReveal from '../components/SectionReveal'

export default function Security() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
        <h1 className="text-2xl font-semibold">Security</h1>
        <p className="text-sm text-[color:var(--text)]/70 mt-1">Encryption, access controls, logging, incident response.</p>
      </section>

      <SectionReveal>
        <section className="grid md:grid-cols-2 gap-4">
          {[
            { t: 'Data Flow', d: 'Browser → React → n8n → Supabase' },
            { t: 'Encryption', d: 'TLS in transit; encrypted storage at rest' },
            { t: 'Access Control', d: 'Role-based access (Owner/Editor/Viewer)' },
            { t: 'Logging', d: 'Audit log of queries and exports' },
          ].map((b,i)=> (
            <div key={i} className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
              <div className="text-lg font-semibold">{b.t}</div>
              <div className="text-sm opacity-80 mt-1">{b.d}</div>
            </div>
          ))}
        </section>
      </SectionReveal>
    </div>
  )
}
