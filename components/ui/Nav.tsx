'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/lookup',       label: 'LOOKUP'  },
  { href: '/teams',        label: 'TEAMS'   },
  { href: '/mc',           label: 'MONTE'   },
  { href: '/groups',       label: 'GROUPS'  },
  { href: '/knockout/r32', label: 'BRACKET' },
  { href: '/about',        label: 'ABOUT'   },
]

export default function Nav() {
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/knockout/r32' ? pathname.startsWith('/knockout') : pathname === href

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">WC26<span>▶</span>K1</Link>
      <div className="nav-links">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className={`nav-link${isActive(href) ? ' active' : ''}`}>
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
