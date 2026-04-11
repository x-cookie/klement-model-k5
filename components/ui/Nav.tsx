'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/lookup', label: 'Lookup' },
  { href: '/teams', label: 'Teams' },
  { href: '/mc', label: 'Monte Carlo' },
  { href: '/groups', label: 'Groups' },
  { href: '/knockout/r32', label: 'Knockout' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/knockout/r32') return pathname.startsWith('/knockout')
    return pathname === href
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E2E6EC]">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-heading font-700 text-base text-[#0D1117] tracking-tight">
          WC26 <span className="hl">Klement</span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                isActive(href)
                  ? 'bg-blue-soft text-blue'
                  : 'text-[#4A5260] hover:text-[#0D1117] hover:bg-[#F4F6F9]'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="md:hidden flex items-center gap-3">
          {links.slice(0, 3).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs font-medium transition-colors ${
                isActive(href) ? 'text-blue' : 'text-[#4A5260]'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
