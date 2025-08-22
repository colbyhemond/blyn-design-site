// app/services/page.jsx
import { client } from '@/sanity/client'
import ServiceCard from '@/components/ServiceCard'
import { CTABand } from '@/components/CTABand'

const servicesQuery = `*[_type == "service"]|order(order asc, title asc){
  title,
  "slug": slug{current},
  shortDescription,
  "thumbUrl": coalesce(thumb.asset->url, null)
}`

export const revalidate = 60 // ISR

export default async function ServicesPage() {
  const services = await client.fetch(servicesQuery)

  return (<>
      <section className="container mx-auto px-4 py-12 mt-8 md:pt-24">
        <header className="max-w-2xl mb-8 ">
          <h1 className="text-4xl font-bold  font-libre-baskerville uppercase ">Services</h1>
          <p className="opacity-80 mt-2">
            Thoughtful design for senior living—where comfort, function, and beauty come together.
          </p>
        </header>

        {(!services || services.length === 0) ? (
          <p className="opacity-70">Services coming soon.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug?.current || s.title} service={s} />
            ))}
          </div>
        )}
      </section>
      <CTABand
        heading={"Ready to transform your space?"}
        subheading={"Contact us today to discuss your project and discover how our expert design services can bring your vision to life."}
        buttonLink={"/contact"}
        buttonText={"Get in Touch"}
        />
    </>
  )
}
