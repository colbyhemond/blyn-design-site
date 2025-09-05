// app/about/page.jsx
import { client } from '@/sanity/client'
import Portable from '@/components/Portable'
import AboutHero from '@/components/AboutHero'
import CredentialsStrip from '@/components/CredentialsStrip'
import Image from 'next/image'
import { urlForImage } from '@/sanity/client'
import { CTABand } from '@/components/CTABand'

const aboutQuery = `*[_type=="aboutPage"][0]{
  hero{ headline, subhead, image },
  intro,
  content,
  headshot,
  credentials,
  cta{ label, href },
  seo
}`

export const revalidate = 60

export default async function AboutPage() {
  const data = await client.fetch(aboutQuery)
  console.log(data)
  // Fallbacks so the page never looks empty
  const title = data?.title || 'About B. Lyn Design & Co'
  const hero = {
    headline: data?.hero?.headline || 'Thoughtful design for senior living.',
    subhead:
      data?.hero?.subhead ||
      'With a unique blend of healthcare and design expertise, we create warm, functional spaces where safety meets style.',
    imageUrl:
      data?.hero?.image?.asset 
      ? urlForImage(data.hero.image.asset)
        .width(2400)
        .height(900)
        .fit('scale')
        .url() :
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2400&q=80',
    imageAlt: data?.hero?.image?.alt || 'Warm, functional interior space',
    headshot: data?.headshot?.asset
    ? urlForImage(data.headshot.asset)
        .width(900)
        .height(900)
        .fit('crop')
        .url()
    : null,
  }

  return (
    <>
      <AboutHero hero={hero} />
      <section className="container mx-auto px-4 py-12 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 prose max-w-none">
          {/* Main About content from Sanity */}
          <Portable value={data?.content} />
        </div>
        <aside className="lg:col-span-1">
          <div className="card bg-base-100 shadow-md">
            <figure className="px-6 pt-6">
                {hero.headshot && (
                    <Image
                        width={300}
                        height={300}
                        priority
                        unoptimized
                        loading="eager"
                        fetchPriority="high"
                        src={hero.headshot}
                        alt={'Portrait of Brandi Barriger, owner of B. Lyn Design & Co'}
                        className="rounded-xl object-cover w-full"
                    />
                )}
            </figure>
            <div className="card-body">
              <h3 className="card-title  font-libre-baskerville">Brandi Barriger</h3>
              <p className="opacity-80">
                Owner, B. Lyn Design &amp; Co
              </p>
              <div className="divider my-3" />
              <ul className="space-y-2 text-sm">
                <li><span className="font-medium">Email:</span> <a className="link" href="mailto:brandi@blyndesign.com">brandi@blyndesign.com</a></li>
                <li><span className="font-medium">Phone:</span> <a className="link" href="tel:9895130354">989-513-0354</a></li>
                <li><span className="font-medium">Instagram:</span> <a className="link" href="https://instagram.com/blyndesignco" target="_blank" rel="noreferrer">@blyndesignco</a></li>
              </ul>
            </div>
          </div>

          {/* Optional credibility band */}
          <div className="mt-6">
            <CredentialsStrip />
          </div>
        </aside>
      </section>
      <CTABand
        heading="Ready to transform your space?"
        subheading="Let's create a warm, functional environment together."
        buttonLink="/contact"
        buttonText="Get in Touch"
      />
    </>
  )
}
