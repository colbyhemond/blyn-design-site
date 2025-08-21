'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'

export function BeforeAfter({ beforeUrl, afterUrl, alt = '' }) {
  const ref = useRef(null)
  const [x, setX] = useState(50) // percent
  return (
    <div
      ref={ref}
      className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-base-200"
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect()
        setX(Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100)))
      }}
    >
      <Image src={afterUrl} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0" style={{ width: `${x}%` }}>
        <Image src={beforeUrl} alt={alt} fill className="object-cover" />
      </div>
      <div className="absolute top-0 bottom-0" style={{ left: `${x}%` }}>
        <div className="w-0.5 h-full bg-white/70"></div>
      </div>
    </div>
  )
}
