import Link from 'next/link'
import ThemePicker from './ThemePicker'
import Logo from '../../lib/chwd/logo_full'
import Social from '../socials/Social'

/**
 * Props:
 * - socialLinks?: Array<{ platform: string; link: string }>
 * - contact?: { phone?: string; email?: string }
 * - tagline?: string
 */
const Footer = ({
  socialLinks = [{ platform: 'instagram', link: 'https://instagram.com/blyndesignco' }],
  contact = { phone: '989-513-0354', email: 'brandi@blyndesign.com' },
  tagline = 'Thoughtful design for senior living—where comfort, function, and beauty come together.',
}) => {
  const safeSocials = Array.isArray(socialLinks) ? socialLinks : []

  const socialLinksMarkup = safeSocials
    .filter((s) => s?.link && s?.platform)
    .map((link, idx) => (
      <a
        key={`${link.platform}-${idx}`}
        href={link.link}
        target={link.link?.startsWith('http') ? '_blank' : undefined}
        rel={link.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
        aria-label={`Go to our ${link.platform} profile`}
        className="btn btn-ghost btn-circle"
      >
        <Social name={link.platform} />
      </a>
    ))

  return (
    <>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 pb-5">
        {/* Primary nav */}
        <nav className="flex flex-col md:flex-row gap-4 font-libre-baskerville uppercase">
          <Link href="/" className="link link-hover">Home</Link>
          <Link href="/services" className="link link-hover">Services</Link>
          <Link href="/projects" className="link link-hover">Gallery</Link>
          <Link href="/about" className="link link-hover">About</Link>
          <Link href="/contact" className="link link-hover">Contact</Link>
        </nav>

        {/* Tagline */}
        {tagline ? <p className="max-w-xl text-sm opacity-80">{tagline}</p> : null}

        {/* Socials */}
        {socialLinksMarkup.length > 0 ? (
          <nav>
            <div className="grid grid-flow-col gap-4">{socialLinksMarkup}</div>
          </nav>
        ) : null}

        {/* Contact quick actions */}
        {(contact?.phone || contact?.email) && (
          <div className="flex gap-3 flex-wrap justify-center">
            {contact?.phone && (
              <a className="btn btn-ghost" href={`tel:${contact.phone}`} aria-label="Call us">
                {contact.phone}
              </a>
            )}
            {contact?.email && (
              <a className="btn btn-ghost" href={`mailto:${contact.email}`} aria-label="Email us">
                {contact.email}
              </a>
            )}
          </div>
        )}

        {/* Bottom row */}
        <aside className="flex flex-col md:flex-row md:flex-wrap justify-between items-end w-full gap-4">
          <p className="pt-4 order-10 mx-auto md:mx-0 lg:order-1 flex-0  min-w-48 justify-start">
            © {new Date().getFullYear()} B. Lyn Design &amp; Co
          </p>

          <div className="flex items-center gap-0 order-12 md:order-5 mx-auto flex-1 justify-center">
            {/* <div>Brought to you by:</div> */}
            <div>
              <Logo />
            </div>
          </div>

          <div className="flex gap-4 items-center order-8 mx-auto md:mx-0 flex-0 min-w-48 md:justify-end">
            {/* <ThemePicker /> */}
            <Link href="/admin" className="link link-hover">Admin</Link>
          </div>
        </aside>
      </footer>
    </>
  )
}

export default Footer


// import Link from "next/link"
// import ThemePicker from "./ThemePicker"
// import Logo from "../../lib/chwd/logo_full"
// import Social from "../socials/Social"

// const Footer = ({socialLinks}) => {

//     const socialLinksMarkup = socialLinks.map((link, index) => {

//         if (!link.link || !link.platform) {
//             return null
//         }
        
//         return (
//             <a key={index} href={link.link} aria-label={`Go to our social media profile at ${link.platform} `} className="btn btn-ghost btn-circle">
                
//                 <Social name={link.platform}/>
//             </a>
//         )
//     }
//     )


//     return (<>
//         <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 pb-5">
//             <nav className="grid grid-flow-col gap-4">
//                 <Link href="/" className="link link-hover">Home</Link>
//                 <Link href="/about" className="link link-hover">About</Link>
//                 <Link href="/blog" className="link link-hover">Blog</Link>
//                 {/* <Link href="/contact" className="link link-hover">Contact</Link> */}
                
                

//             </nav>
//             {socialLinksMarkup.length > 0 ? 
//             <nav>
//                 <div className="grid grid-flow-col gap-4">
                
//                     {socialLinksMarkup}
//                 </div>
//             </nav>
//             : null}
//             <aside className="flex flex-col md:flex-row md:flex-wrap justify-between items-end w-full gap-4">
//                 <p className="pt-4 order-10 mx-auto md:mx-0 lg:order-1">Copyright © {new Date().getFullYear()}</p>
//                 <div className="flex  items-end gap-4 order-12 md:order-5 mx-auto">
          
//                     <div>Brought to you by:</div>
//                     <div>
//                         <Logo/>
//                     </div>
                        
//                 </div>
//                 <div className="flex gap-4 items-center order-8 mx-auto md:mx-0">
//                     <ThemePicker/>
//                     <Link href="/admin" className="link link-hover">Admin</Link>
//                 </div>
//             </aside>
//         </footer>
//     </>)
// }

// export default Footer