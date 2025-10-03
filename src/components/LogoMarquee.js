import React from 'react'
import { motion } from 'framer-motion'

const base = ['Supabase','Postgres','n8n','Vercel','OpenAI','Cloudflare']

export default function LogoMarquee() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#1F2937] bg-[#0F172A]">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#0F172A] via-transparent to-[#0F172A]" />
      <Layer items={[...base, ...base]} speed={18} scale={1} opacity={0.9} /> 
    </div>
  )
}

function Layer({ items, speed, scale, opacity, offset = 0 }) {
  return (
    <motion.div
      className="flex gap-10 whitespace-nowrap py-6 px-6"
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      style={{ opacity, transform: `translateX(${offset}px) scale(${scale})` }}
    >
      {items.map((name, i) => (
        <motion.div key={`${name}-${i}`} className="text-[color:var(--text)]/60 text-sm flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#60A5FA]" />
          {name}
        </motion.div>
      ))}
    </motion.div>
  )
}
