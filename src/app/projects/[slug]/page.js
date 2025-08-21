// app/projects/[slug]/page.jsx
import ProjectDetailClient from '@/components/ProjectDetailClient'
import { client } from '@/sanity/client'

const projectBySlugQuery = `*[_type=="project" && slug.current==$slug][0]{
  title,
  projectType,
  location,
  summary,
  completedAt,
  "coverImage": coverImage{asset->{url}, alt},
  "gallery": gallery[]{asset->{url}, alt}
}`

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type=="project" && defined(slug.current)][].slug.current`)
  return slugs?.map((s) => ({ slug: s })) || []
}
export const revalidate = 60

export default async function ProjectDetailPage({ params }) {
  const project = await client.fetch(projectBySlugQuery, { slug: params.slug })
  if (!project) {
    return (
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold  font-libre-baskerville">Project not found</h1>
      </section>
    )
  }

  return <ProjectDetailClient project={project} />
}

