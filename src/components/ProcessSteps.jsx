'use client'
import { motion } from 'framer-motion'

const STEPS = [
  { title: 'Consult', blurb: 'We learn your goals, budget, timeline, and resident profile.' },
  { title: 'Design', blurb: 'Material & furniture selection tailored for safety and style.' },
  { title: 'Install', blurb: 'Purchase, storage coordination, delivery and staging.' },
  { title: 'Support', blurb: 'Minor updates and refreshes as needs evolve.' },
]

export default function ProcessSteps() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8  font-libre-baskerville uppercase">Our Process</h2>
      <div className="grid gap-6 md:grid-cols-4">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="card bg-base-100 border"
          >
            <div className="card-body">
              <div className="badge badge-primary mb-2">{i + 1}</div>
              <h3 className="card-title  font-libre-baskerville">{s.title}</h3>
              <p className="opacity-80">{s.blurb}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
