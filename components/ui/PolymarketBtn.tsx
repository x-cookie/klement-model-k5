// components/ui/PolymarketBtn.tsx

import { pmUrl } from '@/lib/polymarket'

interface Props {
  /** teams.json key, e.g. "Netherlands". Used to build deep link. */
  teamName?: string
  /**
   * "champion" → home page variant, labels with team name
   * "match"    → versus/knockout variant, generic label
   */
  variant?: 'champion' | 'match'
}

export default function PolymarketBtn({ teamName, variant = 'match' }: Props) {
  const url = pmUrl(teamName)

  const label =
    variant === 'champion'
      ? `${teamName ?? 'Netherlands'} favored — see WC2026 markets →`
      : `Trade ${teamName ?? 'this pick'} on Polymarket →`

  return (
    <div style={{ marginTop: 12 }}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-btn"
        style={{
          fontFamily: 'var(--font-pixel), monospace',
          fontSize: 7,
          padding: '8px 14px',
          color: 'var(--color-b)',
          background: 'var(--color-bg)',
          border: '2px solid var(--color-b)',
          boxShadow: '3px 3px 0 var(--color-b-sh)',
          display: 'inline-block',
          textDecoration: 'none',
          letterSpacing: '0.5px',
          cursor: 'pointer',
        }}
      >
        ↗ {label}
      </a>
      <div style={{
        fontSize: 5,
        color: 'var(--color-muted)',
        marginTop: 6,
        letterSpacing: '0.3px',
        lineHeight: 1.8,
      }}>
        MODEL OUTPUT ONLY. NOT FINANCIAL ADVICE.
      </div>
    </div>
  )
}
