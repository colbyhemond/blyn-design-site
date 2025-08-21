'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutHero({ hero }) {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] isolate mt-8 pt-24">
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero.imageUrl}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-base-100/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 via-base-100/40 to-transparent" />
      </div>

      <div className="container mx-auto md:ml-auto md:mr-24 px-4 h-full flex items-end pb-12 bg-white bg-opacity-50 w-fit px-8 py-6 rounded-lg shadow-lg md:backdrop-blur-md">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl font-bold  font-libre-baskerville"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            {hero.headline}
          </motion.h1>
          <motion.p
            className="mt-3 text-base md:text-lg opacity-90"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            {hero.subhead}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
