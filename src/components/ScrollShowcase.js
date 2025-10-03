import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40])
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  return (
    <section ref={ref} className="relative overflow-hidden rounded-2xl border border-[#1F2937] bg-[#0F172A] p-8 shadow-card">
      <motion.h2 className="text-lg font-semibold mb-6" style={{ opacity }}>Showcase</motion.h2>
      <div className="grid md:grid-cols-3 gap-4 mt-5">
        <motion.div className="rounded-xl border border-[#1F2937] bg-[#0B1220] p-4" style={{  opacity }}>
          <div className="font-medium">Upload</div>
          <div className="opacity-70 text-sm mt-1">Drag & drop files with animated ingest states.</div>
        </motion.div>
        <motion.div className="rounded-xl border border-[#1F2937] bg-[#0B1220] p-4" style={{  opacity }}>
          <div className="font-medium">Embed</div>
          <div className="opacity-70 text-sm mt-1">n8n → pgvector with visual status pulses.</div>
        </motion.div>
        <motion.div className="rounded-xl border border-[#1F2937] bg-[#0B1220] p-4" style={{  opacity }}>
          <div className="font-medium">Ask</div>
          <div className="opacity-70 text-sm mt-1">Chat answers with citation chips and side‑by‑side sources.</div>
        </motion.div>
      </div>
    </section>
  )
}
