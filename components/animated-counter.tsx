"use client"

import { useEffect, useState, useRef } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

export default function AnimatedCounter({ end, duration = 2000, prefix = "", suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const step = Math.ceil(end / (duration / 16))
    const updateCount = () => {
      countRef.current = Math.min(countRef.current + step, end)
      setCount(countRef.current)

      if (countRef.current < end) {
        timerRef.current = setTimeout(updateCount, 16)
      }
    }

    updateCount()

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [end, duration])

  return (
    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
