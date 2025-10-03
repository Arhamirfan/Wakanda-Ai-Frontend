import React from 'react'
import SectionReveal from '../components/SectionReveal'

export default function Resources() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
        <h1 className="text-2xl font-semibold">Resources</h1>
        <p className="text-sm text-[color:var(--text)]/70 mt-1">Quickstart, API/webhooks, and security posture.</p>
      </section>

      <SectionReveal>
        <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
          <h2 className="text-lg font-semibold mb-3">Quickstart</h2>
          <ol className="list-decimal pl-5 text-sm opacity-80 space-y-1">
            <li>Drag &amp; drop PDFs into the uploader</li>
            <li>We call your n8n ingestion webhook</li>
            <li>Vectors stored in Supabase pgvector</li>
            <li>Ask questions in the chat, get citations</li>
          </ol>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
          <h2 className="text-lg font-semibold mb-3">API</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-[#1F2937] bg-[#0B1220] p-4">
              <div className="font-medium mb-2">Ingest Webhook</div>
              <pre className="whitespace-pre-wrap opacity-80">{`POST https://n8n.example.com/webhook/ingest\nBody: { files: [ { name, size, type } ] }`}</pre>
            </div>
            <div className="rounded-xl border border-[#1F2937] bg-[#0B1220] p-4">
              <div className="font-medium mb-2">Query Endpoint</div>
              <pre className="whitespace-pre-wrap opacity-80">{`POST /api/query\n{ question: "What is retention?", scope: "all" }`}</pre>
            </div>
          </div>
        </section>
      </SectionReveal>

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
