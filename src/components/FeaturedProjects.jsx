// components/FeaturedProjects.jsx
import { client } from '@/sanity/client'
import ProjectCard from './ProjectCard'

const projectsQuery = `
*[_type=="project"
  && (!defined($featuredOnly) || featured == $featuredOnly)
] | order(featured desc, completedAt desc, _createdAt desc)[0...$limit]{
  title,
  slug,
  projectType,
  summary,
  completedAt,
  "coverImage": coverImage{asset->{url}, alt},
  featured
}
`

export default async function FeaturedProjects({
  title = 'Featured Work',
  type,                 // e.g., "Senior Living" | "STR" | "Staging"
  featuredOnly,         // true to show only featured
  limit = 6,            // number of cards
}) {
  const params = {
    type,
    featuredOnly,
    limit,
  }

  const projects = await client.fetch(projectsQuery, params, {
    next: { revalidate: 60 }, // ISR caching
  })

  if (!projects?.length) return null

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 font-libre-baskerville uppercase">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug.current} project={p} />
        ))}
      </div>
    </section>
  )
}
