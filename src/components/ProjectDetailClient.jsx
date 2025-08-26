// Client half for lightbox interactivity
// (inline to keep single file; feel free to split)
'use client'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'react-feather'
import { CTABand } from './CTABand'

export default function ProjectDetailClient({ project }) {
  const dlgRef = useRef(null)
  const [idx, setIdx] = useState(0)
  const images = (project.gallery && project.gallery.length ? project.gallery : []).map(g => ({
    url: g?.asset?.url,
    alt: g?.alt || project.title,
  })).filter(g => !!g.url)
console.log('beforePhotos', project)
  const beforePhotos = (project.beforePhotos && project.beforePhotos.length ? project.beforePhotos : []).map(g => ({
    url: g?.asset?.url,
    alt: g?.alt || project.title,
  })).filter(g => !!g.url)

  const open = (i) => {
    setIdx(i)
    dlgRef.current?.showModal?.()
    document.body.style.overflow = 'hidden'
  }
  const close = () => {
    dlgRef.current?.close?.()
    document.body.style.overflow = ''
  }
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length)
  const next = () => setIdx((i) => (i + 1) % images.length)

  return (<>
    <section className="container mx-auto px-4 py-12 md:pt-32">
      <header className="max-w-3xl mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-2">
          <h1 className="text-4xl font-bold  font-libre-baskerville">{project.title}</h1>
          {project.projectType && <span className="badge badge-accent">{project.projectType}</span>}
        </div>
        {project.summary && <p className="opacity-80">{project.summary}</p>}
        {(project.location || project.completedAt) && (
          <p className="text-sm opacity-60 mt-2">
            {project.location ? `${project.location}` : ''}
            {project.location && project.completedAt ? ' • ' : ''}
            {project.completedAt
              ? `Completed ${new Date(project.completedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}`
              : ''}
          </p>
        )}
      </header>

      {/* Cover */}
      {project.coverImage?.asset?.url && (
        <figure className="relative aspect-[16/9] w-full mb-8">
          <Image
            src={project.coverImage.asset.url}
            alt={project.coverImage?.alt || project.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </figure>
      )}

      {/* Gallery grid */}
      {images.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-4  font-libre-baskerville">Gallery</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            {images.map((img, i) => (
              <button
                key={img.url + i}
                className="relative aspect-[4/3] rounded-lg overflow-hidden group"
                onClick={() => open(i)}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>

            {/* Before images grid */}
            {beforePhotos.length > 0 && (<>
                <h2 className="text-2xl font-semibold mb-4  font-libre-baskerville">Before</h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {beforePhotos.map((img, i) => (
                    <button
                      key={img.url + i}
                      className="relative aspect-[4/3] rounded-lg overflow-hidden group"
                      onClick={() => open(i)}
                    >
                      <Image
                        src={img.url}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </button>
                  ))}
                </div>
            </>)}

          {/* Lightbox modal */}
          <dialog ref={dlgRef} className="modal">
            <div className="modal-box p-2 max-w-5xl">
              <div className="relative">
                {images[idx] && (
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src={images[idx].url}
                      alt={images[idx].alt}
                      fill
                      className="object-contain bg-base-200 rounded"
                    />
                  </div>
                )}

                {/* Controls */}
                {images.length > 1 && (
                  <>
                    <button className="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2" onClick={prev}>
                      <ChevronLeft />
                    </button>
                    <button className="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2" onClick={next}>
                      <ChevronRight />
                    </button>
                  </>
                )}
                <button className="btn btn-ghost btn-sm absolute right-2 top-2" onClick={close} aria-label="Close">
                  <X />
                </button>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button aria-label="Close" onClick={close}>close</button>
            </form>
          </dialog>
        </>
      )}
    </section>
    <CTABand
      heading="Interested in working together?"
      subheading="Let's create something amazing for your space."
      buttonText="Get in Touch"
      buttonLink="/contact"
    />
    </>
  )
}
