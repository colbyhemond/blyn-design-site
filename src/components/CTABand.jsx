import Link from 'next/link'

export function CTABand() {
  return (
    <section className="bg-primary text-primary-content">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold  font-libre-baskerville">Ready to refresh your community?</h3>
          <p className="opacity-90">Let’s design a space where safety meets style.</p>
        </div>
        <Link href="/contact" className="btn btn-accent">Book a consult</Link>
      </div>
    </section>
  )
}
