import React from 'react'
import SectionReveal from '../components/SectionReveal'

export default function Pricing() {
  const plans = [
    { name: 'Starter', price: '$0', tagline: 'Launch an AI agent for your docs', features: [
      '1 workspace', '200 pages embedded', 'Chat with citations', 'Markdown export'
    ]},
    { name: 'Pro', price: '$49', tagline: 'Add AI to your website & team', features: [
      '5 workspaces', '10k pages embedded', 'Website embed widget', 'PDF + Markdown export', 'Basic analytics'
    ]},
    { name: 'Enterprise', price: 'Contact', tagline: 'AI across your org, securely', features: [
      'SSO/SAML/SCIM', 'VPC/VNet options', 'Admin controls & audit log', 'Custom retention & residency', 'Priority support'
    ]},
  ]
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
        <h1 className="text-2xl font-semibold">Pricing</h1>
        <p className="text-sm text-[color:var(--text)]/70 mt-1">Plans built around your AI agent and website needs.</p>
      </section>

      <SectionReveal>
        <section className="grid md:grid-cols-3 gap-4">
          {plans.map((t,i)=> (
            <div key={i} className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
              <div className="text-lg font-semibold">{t.name}</div>
              <div className="opacity-70 text-sm">{t.tagline}</div>
              <div className="text-3xl mt-2">{t.price}<span className="text-sm opacity-60">/mo</span></div>
              <ul className="mt-3 text-sm opacity-80 space-y-1 list-disc pl-5">
                {t.features.map((f,idx)=> <li key={idx}>{f}</li>)}
              </ul>
              <button className="mt-4 px-4 py-2 rounded-xl text-sm bg-gradient-to-b from-primary to-[#4F46E5] shadow">Get started</button>
            </div>
          ))}
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="rounded-2xl border border-[#1F2937] bg-[#0F172A] p-6 shadow-card">
          <h2 className="text-lg font-semibold mb-3">What’s included</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl border border-[#1F2937] bg-[#0B1220] p-4"><div className="font-medium">Agent</div><div className="opacity-70 mt-1">Chat with citations, answer modes, scope filters</div></div>
            <div className="rounded-xl border border-[#1F2937] bg-[#0B1220] p-4"><div className="font-medium">Website</div><div className="opacity-70 mt-1">Embed widget, brand theming, consent banner ready</div></div>
            <div className="rounded-xl border border-[#1F2937] bg-[#0B1220] p-4"><div className="font-medium">Analytics</div><div className="opacity-70 mt-1">Top queries, unanswered, coverage, export</div></div>
          </div>
        </section>
      </SectionReveal>
    </div>
  )
}
