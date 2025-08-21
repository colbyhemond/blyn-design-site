// components/HeroClient.jsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroClient({ hero }) {

    return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-screen isolate pt-24">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero.imageUrl.toString()}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-base-100/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-base-100/70 via-base-100/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto md:ml-auto md:mr-24 px-4 h-full flex items-center bg-white bg-opacity-50 w-fit px-12 py-8 rounded-lg shadow-lg md:backdrop-blur-md">
        <div className="max-w-2xl">
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight font-libre-baskerville"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            className="mt-4 text-base md:text-lg opacity-90"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >

            <Link href={hero.ctaHref} className="btn btn-lg btn-primary">
            {hero.ctaLabel} →
            </Link>
          </motion.div>

          {/* Secondary CTA row (optional) */}
          {/* <div className="mt-4">
            <Link href="/services" className="btn btn-ghost">Explore Services</Link>
          </div> */}
        </div>
      </div>
    </section>
  )
}
