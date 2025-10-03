import React from 'react'

export default function LegalPrivacy() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
        <h1 className="text-2xl font-semibold">Privacy Policy</h1>
        <p className="text-sm text-[color:var(--text)]/70 mt-1">Your privacy matters. This is sample content.</p>
      </section>
      <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card text-sm opacity-80 space-y-2">
        <p>We collect minimal analytics and never sell your data.</p>
        <p>Uploaded files are processed for embeddings and can be deleted.</p>
      </section>
    </div>
  )
}
