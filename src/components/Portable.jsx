// components/Portable.jsx
'use client'

import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from '@/sanity/client'

const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      const alt = value?.alt || ''
      const url = urlForImage(value).width(1600).fit('max').auto('format').url()
      return (
        <figure className="my-6">
          <Image src={url} alt={alt} width={1600} height={900} className="rounded-lg" />
          {value?.caption ? (
            <figcaption className="text-sm opacity-70 mt-2">{value.caption}</figcaption>
          ) : null}
        </figure>
      )
    },
    // If your Portable Text includes custom object type "imageWithAlt"
    imageWithAlt: ({ value }) => {
      console.log(value)
      if (!value?.asset) return null
      const alt = value?.alt || ''
      const url = urlForImage(value).width(1600).fit('max').auto('format').url()
      return (
        <figure className="my-6">
          <Image src={url} alt={alt} width={1600} height={900} className="rounded-lg" />
          {value?.caption ? (
            <figcaption className="text-sm opacity-70 mt-2">{value.caption}</figcaption>
          ) : null}
        </figure>
      )
    },
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href || '#'
      const isExternal = /^https?:\/\//i.test(href) && !href.startsWith('/')
      return isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="link link-primary">
          {children}
        </a>
      ) : (
        <Link href={href} className="link link-primary">
          {children}
        </Link>
      )
    },
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded bg-base-200 text-sm">{children}</code>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-semibold mt-4 mb-2">{children}</h4>,
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 italic opacity-80 my-4">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 space-y-2 my-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 space-y-2 my-4">{children}</ol>,
  },
}

export default function Portable({ value, className = '' }) {
  if (!value) return null
  return (
    <div className={`prose max-w-none ${className}`}>
      <PortableText value={value} components={components} />
    </div>
  )
}
