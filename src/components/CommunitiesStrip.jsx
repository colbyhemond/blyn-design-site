export default function CommunitiesStrip({ communities = [] }) {
    if (!communities?.length) return null
    return (
      <section className="bg-base-200">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4">Communities Completed</h2>
          <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {communities.map((c, i) => (
              <li key={`${c}-${i}`} className="badge badge-ghost justify-start py-3 px-4 text-sm">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
  