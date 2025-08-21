// components/Hero.jsx
import { client } from '@/sanity/client'
import { urlForImage } from '@/sanity/client'

// Pulls from the `home` singleton we set up earlier
const HERO_QUERY = `*[_type == "homePage"][0]{
  hero{
    headline,
    subhead,
    ctaLabel,
    ctaHref,
    image
  }
}`

export default async function Hero() {
  const data = await client.fetch(HERO_QUERY)

  const hero = {
    headline: data?.hero?.headline || 'Designing senior living spaces where safety meets style.',
    subhead:
      data?.hero?.subhead ||
      'Blending healthcare knowledge with interior design expertise to create warm, functional, and beautiful spaces.',
    ctaLabel: data?.hero?.ctaLabel || 'View Our Work',
    ctaHref: data?.hero?.ctaHref || '/projects',
    imageUrl: data?.hero?.image?.asset
      ? urlForImage(data.hero.image).width(2400).height(1400).fit('crop').url()
      : // nice tasteful default if none provided
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2400&q=80',
    imageAlt: data?.hero?.image?.alt || 'Warm, functional interior space',
  }

  // Important: keep HeroClient client-side for motion
  const { default: HeroClient } = await import('./HeroClient')
  return <HeroClient hero={hero} />
}


// import { client } from "../sanity/client";

// const HERO_QUERY = `*[_type == "homePage"][0]`;
// const options = { next: { revalidate: 30 } };

// const Hero = async () => {
//     let hero = await client.fetch(HERO_QUERY, {}, options);

//     if (!hero.image) {
//         hero.image = "https://guileless-pie-2e99f2.netlify.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu6kg40a8%2Fproduction%2F9c37b7bfbc9aa51449fa53de3befa0567aa158fd-4008x3006.jpg&w=1920&q=75";
//     }

//     if (!hero.buttonText) {
//         hero.buttonText = "Read More";
//     }

//     if (!hero.buttonLink) {
//         hero.buttonLink = "/blog";
//     }

//     if (!hero.title) {
//         hero.title = "Your New Site";
//     }

//     if (!hero.subtitle) {
//         hero.subtitle = "This is your new site. You can change this text in your settings.";
//     }
    

//     return (<>
//         <div className="hero min-h-screen"
//             style={{
//                 backgroundImage: `url(${hero.image})`,
//             }}>
//             <div className="hero-overlay bg-opacity-60"></div>
//                 <div className="hero-content text-neutral-content text-center">
//                     <div className="max-w-md">
//                     <h1 className="mb-5 text-5xl font-bold">{hero.title}</h1>
//                     <p className="mb-5">
//                         {hero.subtitle}
//                     </p>
//                     <a href={hero.buttonLink} className="btn btn-primary">{hero.buttonText}</a>
//                 </div>
//             </div>
//         </div>
//     </>)
// }

// export default Hero