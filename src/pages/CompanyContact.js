import React from 'react'
import SectionReveal from '../components/SectionReveal'

export default function CompanyContact() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <p className="text-sm text-[color:var(--text)]/70 mt-1">Tell us about your use case — we’ll get back quickly.</p>
      </section>
      <SectionReveal>
        <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
          <form className="grid gap-3 text-sm">
            <input className="question-input" placeholder="Name" />
            <input className="question-input" placeholder="Company" />
            <select className="question-input"><option>Reason for inquiry</option><option>Evaluation</option><option>Partnership</option></select>
            <textarea className="question-input" rows="4" placeholder="Describe your docs and desired outcomes" />
            <button className="px-4 py-2 rounded-xl text-sm bg-gradient-to-b from-primary to-[#4F46E5] shadow w-fit">Submit</button>
          </form>
        </section>
      </SectionReveal>
    </div>
  )
}
