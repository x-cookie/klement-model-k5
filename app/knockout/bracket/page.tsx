import Link from 'next/link'
import BracketView from '@/components/knockout/BracketView'
import PixelParticles from '@/components/ui/PixelParticles'

const ROUND_TABS = [
  { href: '/knockout/bracket', label: 'BRACKET' },
  { href: '/knockout/r32',    label: 'R32'     },
  { href: '/knockout/r16',    label: 'R16'     },
  { href: '/knockout/qf',     label: 'QF'      },
  { href: '/knockout/sf',     label: 'SF'      },
  { href: '/knockout/final',  label: 'FINAL'   },
]

export default function BracketPage() {
  return (
    <div className="page-enter" style={{ position: 'relative', overflow: 'hidden' }}>
      <PixelParticles variant="mix" />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="ko-tabs">
          {ROUND_TABS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`ko-tab${href === '/knockout/bracket' ? ' active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div style={{ padding: '24px 36px' }}>
          <div style={{ fontSize: 10, color: 'var(--color-muted)', marginBottom: 20, letterSpacing: 1 }}>
            FULL TOURNAMENT BRACKET — KLEMENT&apos;S PREDICTIONS
          </div>
          <div style={{ fontSize: 8, color: 'var(--color-muted)', marginBottom: 20, lineHeight: 2 }}>
            <span style={{ color: 'var(--color-g)', marginRight: 6 }}>█</span>GREEN = KLEMENT PICK
            <span style={{ marginLeft: 20 }}>SCROLL RIGHT FOR LATER ROUNDS →</span>
          </div>
          <BracketView />
        </div>
      </div>
    </div>
  )
}
