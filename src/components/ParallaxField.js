import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function ParallaxField({ children }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const x = useSpring(mouseX, { stiffness: 60, damping: 12 })
  const y = useSpring(mouseY, { stiffness: 60, damping: 12 })
  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window
      mouseX.set(((e.clientX / innerWidth) - 0.5) * 20)
      mouseY.set(((e.clientY / innerHeight) - 0.5) * 20)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  return (
    <div className="relative">
      <motion.div className="absolute inset-0 -z-10" style={{ transform: useTransform([x,y], ([dx,dy]) => `translate3d(${dx}px, ${dy}px, 0)`) }}>
        <Blob className="top-[-40px] left-[-40px] h-56 w-56 bg-[#60A5FA]/20" />
        <Blob className="bottom-[-60px] right-[-60px] h-72 w-72 bg-[#8B5CF6]/20" />
        <Stars />
      </motion.div>
      {children}
    </div>
  )
}

function Blob({ className }) {
  return <div className={`absolute rounded-full blur-3xl ${className || ''}`} />
}

function Stars() {
  const [points] = useState(() => Array.from({ length: 40 }, () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: 2 + Math.random() * 2,
    opacity: 0.3 + Math.random() * 0.5,
  })))
  return (
    <div className="absolute inset-0">
      {points.map((p, i) => (
        <div key={i} className="absolute rounded-full bg-white" style={{ top: `${p.top}%`, left: `${p.left}%`, width: p.size, height: p.size, opacity: p.opacity }} />
      ))}
    </div>
  )
}
