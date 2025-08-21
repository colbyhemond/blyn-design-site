
import { motion } from 'framer-motion'
import Link from 'next/link'
import { client } from '@/sanity/client'
import ServiceCard from './ServiceCard'

const servicesQuery = `*[_type == "service"] | order(order asc, title asc){
  title,
  "slug": slug{current},
  shortDescription
}`

export default async function ServicesGrid() {
  const services = await client.fetch(servicesQuery, {}, { next: { revalidate: 60 } })
  if (!services?.length) return null
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 font-libre-baskerville uppercase">Services</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <ServiceCard key={s.slug?.current || s.title} service={s} index={i} />
        ))}
      </div>
    </section>
  )
}
