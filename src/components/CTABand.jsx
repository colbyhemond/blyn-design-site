import Link from 'next/link'

export function CTABand({heading, subheading, buttonText, buttonLink}) {
  // Default props
  heading = heading || "Ready to refresh your community?"
  subheading = subheading || "Let’s design a space where safety meets style."
  buttonText = buttonText || "Book a consult"
  buttonLink = buttonLink || "/contact"
  return (
    <section className="bg-primary text-primary-content">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold  font-libre-baskerville">{heading}</h3>
          <p className="opacity-90">{subheading}</p>
        </div>
        <Link href={buttonLink} className="btn btn-accent">{buttonText}</Link>
      </div>
    </section>
  )
}
