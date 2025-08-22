// app/services/[slug]/page.jsx
import { client } from '@/sanity/client'
import Portable from '@/components/Portable'
import { CTABand } from '@/components/CTABand'

const serviceBySlugQuery = `*[_type=="service" && slug.current==$slug][0]{
  title,
  shortDescription,
  body,
  "thumbUrl": coalesce(thumb.asset->url, null)
}`

export const dynamicParams = true
export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type=="service" && defined(slug.current)][].slug.current`)
  return slugs?.map((s) => ({ slug: s })) || []
}
export const revalidate = 60

export default async function ServiceDetailPage({ params }) {
  const service = await client.fetch(serviceBySlugQuery, { slug: params.slug })

  if (!service) {
    return (
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold  font-libre-baskerville">Service not found</h1>
      </section>
    )
  }

  return (<>
    <section className="container mx-auto px-4 py-12 md:pt-32">
      <header className="max-w-3xl mb-6">
        <h1 className="text-4xl font-bold  font-libre-baskerville">{service.title}</h1>
        {service.shortDescription && <p className="opacity-80 mt-2">{service.shortDescription}</p>}
      </header>

      <div className="prose max-w-3xl">
        <Portable value={service.body} />
      </div>
    </section>
    <CTABand
      heading="Ready to transform your space?"
      subheading="Contact us today and let's bring your vision to life."
      buttonText="Get in Touch"
      buttonLink="/contact"
    />
    </>
  )
}
