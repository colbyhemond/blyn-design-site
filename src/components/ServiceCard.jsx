'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CTABand } from './CTABand'

export default function ServiceCard({ service }) {
  if (!service) return null
  const { title, slug, shortDescription, thumbUrl } = service

  return (<>
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="card bg-base-100 shadow-md hover:shadow-lg transition overflow-hidden"
    >
      {thumbUrl ? (
        <figure className="relative h-40 w-full">
          <Image src={thumbUrl} alt={title} fill className="object-cover" />
        </figure>
      ) : null}

      <div className="card-body">
        <h3 className="card-title  font-libre-baskerville">{title}</h3>
        {shortDescription && <p className="opacity-90 text-sm">{shortDescription}</p>}
        <div className="card-actions justify-end">
          <Link href={`/services/${slug?.current}`} className="btn btn-ghost">
            Learn more →
          </Link>
        </div>
      </div>
    </motion.article>
    </>
  )
}
