'use client'
import { motion } from 'framer-motion'

const items = [
  { label: 'Certified', detail: 'E‑design, Staging/Redesign, Styling' },
  { label: 'Insured', detail: 'Professional & General Liability' },
  { label: 'Experience', detail: 'Senior Living Communities' },
]

export default function CredentialsStrip() {
  return (
    <div className="grid gap-3">
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          className="card bg-base-100 border"
        >
          <div className="card-body py-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="badge badge-accent">{it.label}</div>
                <div className="font-medium">{it.detail}</div>
              </div>
              {/* <div className="badge badge-primary">{i + 1}</div> */}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
