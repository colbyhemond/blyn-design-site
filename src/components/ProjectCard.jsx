'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  if (!project) return null

  const {
    title,
    slug,
    projectType,
    coverImage,
    summary,
    completedAt,
  } = project

  const getProjecTypeText = (type) => {
    switch (type) {
      case 'STR':
        return 'Short-Term Rental'
      default:
        return type
    }
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="card bg-base-100 shadow-md hover:shadow-xl transition overflow-hidden"
    >
      {coverImage?.asset?.url && (
        <figure className="relative h-48 w-full">
          <Image
            src={coverImage.asset.url}
            alt={title}
            fill
            className="object-cover"
          />
        </figure>
      )}
      <div className="card-body">
        <div className="flex flex-col  items-start justify-between">
          <h3 className="card-title text-lg  font-libre-baskerville">{title}</h3>
          {projectType && (
            <div className="badge badge-secondary">{getProjecTypeText(projectType)}</div>
          )}
        </div>
        {summary && <p className="text-sm opacity-80">{summary}</p>}
        {completedAt && (
          <p className="text-xs opacity-60 mt-2">
            Completed {new Date(completedAt).toLocaleDateString()}
          </p>
        )}
        <div className="card-actions justify-end mt-4">
          <Link href={`/projects/${slug?.current}`} className="btn btn-ghost">
          View Project →
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
