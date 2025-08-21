// app/projects/page.jsx
import { client } from '@/sanity/client'
import GalleryFilter from '@/components/GalleryFilter'
import ProjectCard from '@/components/ProjectCard'

const projectsQuery = `*[_type=="project"] | order(featured desc, completedAt desc, title asc){
  title,
  slug,
  projectType,
  summary,
  completedAt,
  "coverImage": coverImage{asset->{url}, alt}
}`

export const revalidate = 60

export default async function ProjectsPage({ searchParams }) {
  const type = searchParams?.type || 'All'
  const projects = await client.fetch(projectsQuery)
  const filtered = type === 'All' ? projects : projects.filter(p => p.projectType === type)

  return (
    <section className="container mx-auto px-4 py-12 mt-8">
      <header className="mb-6">
        <h1 className="text-4xl font-bold  font-libre-baskerville uppercase">Gallery</h1>
        <p className="opacity-80 mt-2">
          Selected senior living and short‑term rental projects.
        </p>
      </header>

      <GalleryFilter active={type} />

      {filtered?.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {filtered.map((p) => (
            <ProjectCard key={p.slug.current} project={p} />
          ))}
        </div>
      ) : (
        <p className="opacity-70 mt-6">No projects found for this filter.</p>
      )}
    </section>
  )
}
