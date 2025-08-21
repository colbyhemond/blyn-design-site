'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

const TABS = ['All', 'Senior Living', 'STR', 'Staging']

export default function GalleryFilter({ active = 'All' }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const setType = (val) => {
    const params = new URLSearchParams(searchParams.toString())
    if (val === 'All') params.delete('type')
    else params.set('type', val)
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div role="tablist" className="tabs tabs-boxed">
      {TABS.map((t) => (
        <button
          key={t}
          role="tab"
          className={`tab ${active === t ? 'tab-active' : ''}`}
          onClick={() => setType(t)}
        >
          {t}
        </button>
      ))}
    </div>
  )
}
