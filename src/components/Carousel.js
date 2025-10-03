import React, { useEffect, useState } from 'react'

export default function Carousel({ items = [], interval = 3000 }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI(prev => (prev + 1) % items.length), interval)
    return () => clearInterval(id)
  }, [items.length, interval])
  if (!items.length) return null
  return (
    <div className="relative rounded-2xl border border-[#1F2937] bg-[#0F172A] p-4 overflow-hidden mt-5">
      {items.map((el, idx) => (
        <div key={idx} className={`transition-opacity duration-700 ${idx === i ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
          {el}
        </div>
      ))}
    </div>
  )
}
