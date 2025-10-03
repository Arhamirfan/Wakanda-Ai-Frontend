import React from 'react'
import SectionReveal from '../components/SectionReveal'
import LogoMarquee from '../components/LogoMarquee'
import MetricCounter from '../components/MetricCounter'

export default function Company() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-2xl border border-[#1F2937] bg-[#0F172A] p-8 shadow-card">
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-[#9fb4ff] text-transparent bg-clip-text">
          Making Tech Human‑Savvy
        </h1>
        <p className="mt-3 text-sm text-[color:var(--text)]/70">We automate, integrate, and simplify with AI agents, system integration, and adoption services.</p>
      </section>

      <LogoMarquee />

      <SectionReveal>
        <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
          <h2 className="text-lg font-semibold mb-3">Services</h2>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            {[
              { t: 'AI Agents', d: 'Automate complex tasks with agents that think ahead.' },
              { t: 'System Integration', d: 'Connect your stack and streamline data flows.' },
              { t: 'Automation', d: 'Eliminate repetitive work with synchronized pipelines.' },
              { t: 'User Adoption', d: 'Guide teams through change with minimal disruption.' },
            ].map((s,i)=> (
              <div key={i} className="rounded-xl border border-[#1F2937] bg-[#0B1220] p-4">
                <div className="font-medium">{s.t}</div>
                <div className="opacity-70 mt-1">{s.d}</div>
              </div>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
          <h2 className="text-lg font-semibold mb-3">Industries</h2>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            {['Healthcare','Finance','Education','Entertainment'].map((i,idx)=> (
              <div key={idx} className="rounded-xl border border-[#1F2937] bg-[#0B1220] p-4">{i}</div>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="grid md:grid-cols-3 gap-4 text-center">
          <div className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card"><div className="text-3xl font-semibold"><MetricCounter value={80} suffix="M" /></div><div className="opacity-70 text-sm">Saved in optimization</div></div>
          <div className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card"><div className="text-3xl font-semibold"><MetricCounter value={100} suffix="+" /></div><div className="opacity-70 text-sm">Businesses transformed</div></div>
          <div className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card"><div className="text-3xl font-semibold"><MetricCounter value={800} suffix="k+" /></div><div className="opacity-70 text-sm">Engineering hours saved</div></div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
          <h2 className="text-lg font-semibold mb-3">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-[#1F2937] bg-[#0B1220] p-4">“Their agents and integrations streamlined operations so we could innovate faster.” — CEO, HealthTech</div>
            <div className="rounded-xl border border-[#1F2937] bg-[#0B1220] p-4">“Automation and adoption support made real impact across teams.” — COO, FinTech</div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card text-center">
          <h2 className="text-lg font-semibold mb-2">Let’s build your future together</h2>
          <div className="opacity-70 text-sm">hello@yourcompany.com • Chicago, IL</div>
        </section>
      </SectionReveal>
    </div>
  )
}
