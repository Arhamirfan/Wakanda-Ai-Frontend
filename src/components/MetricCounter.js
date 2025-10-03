import React, { useEffect, useState } from 'react'

export default function MetricCounter({ value = 100, suffix = '', duration = 1200 }) {
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    let raf
    const start = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration)
      setDisplay(Math.floor(value * (0.1 + 0.9 * p)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [value, duration])
  return <span>{display.toLocaleString()}<span className="opacity-60">{suffix}</span></span>
}
