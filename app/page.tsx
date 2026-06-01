import Link from 'next/link'
import PixelBar from '@/components/ui/PixelBar'

const factors = [
  { label: 'FIFA RANKING', pct: 45, color: 'var(--color-r)' },
  { label: 'NATL WEALTH',  pct: 20, color: 'var(--color-g)' },
  { label: 'CLIMATE',      pct: 15, color: 'var(--color-b)' },
  { label: 'POPULATION',   pct: 15, color: 'var(--color-b)' },
  { label: 'HOME EDGE',    pct: 5,  color: 'var(--color-r)' },
]

export default function LandingPage() {
  return (
    <div>
      {/* Hero */}
      <div className="sec" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="dot-grid" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="eyebrow fade-in">PANMURE LIBERUM · APRIL 2026</div>
          <div className="txt-shadow-r fade-in delay-1" style={{ fontSize: 18, color: 'var(--color-r)', lineHeight: 1.5, marginBottom: 8 }}>
            WHO WINS THE<br />
            <span style={{ color: 'var(--color-g)', textShadow: '3px 3px 0 var(--color-g-sh)' }}>2026 WORLD CUP?</span>
          </div>
          <div className="fade-in delay-2" style={{ fontSize: 7, color: 'var(--color-muted)', lineHeight: 2, maxWidth: 400, marginBottom: 20 }}>
            AN ECONOMETRIC MODEL THAT CALLED 2014,<br />
            2018 AND 2022 CORRECTLY — NOW RUNNING<br />
            ON ALL 48 QUALIFIED NATIONS.
          </div>
          <div className="fade-in delay-3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/lookup" className="px-btn" style={{
              fontFamily: 'inherit', fontSize: 8, padding: '10px 16px',
              background: 'var(--color-r)', color: '#fff', border: 'none',
              boxShadow: '4px 4px 0 var(--color-r-sh)', textDecoration: 'none', display: 'inline-block',
            }}>▶ PREDICT MATCH</Link>
            <Link href="/about" className="px-btn" style={{
              fontFamily: 'inherit', fontSize: 8, padding: '10px 16px',
              background: 'var(--color-bg)', color: 'var(--color-b)',
              border: `2px solid var(--color-b)`, boxShadow: '4px 4px 0 var(--color-b-sh)',
              textDecoration: 'none', display: 'inline-block',
            }}>? HOW IT WORKS</Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="stats-bar">
        {[
          { num: '3',    label: 'CORRECT CALLS',  color: 'var(--color-r)', sh: 'var(--color-r-sh)' },
          { num: '48',   label: 'QUALIFIED TEAMS', color: 'var(--color-g)', sh: 'var(--color-g-sh)' },
          { num: '0.55', label: 'MODEL R²',         color: 'var(--color-b)', sh: 'var(--color-b-sh)' },
        ].map(({ num, label, color, sh }) => (
          <div key={label} className="stat-cell">
            <span style={{ fontSize: 20, color, textShadow: `2px 2px 0 ${sh}`, display: 'block', marginBottom: 6 }}>{num}</span>
            <span style={{ fontSize: 6, color: 'var(--color-muted)', letterSpacing: 1 }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Track record */}
      <div className="sec">
        <div className="section-title">TRACK RECORD</div>
        <div className="record-grid">
          {[
            { year: '2014', flag: '🇩🇪', name: 'GERMANY' },
            { year: '2018', flag: '🇫🇷', name: 'FRANCE' },
            { year: '2022', flag: '🇦🇷', name: 'ARGENTINA' },
          ].map(({ year, flag, name }) => (
            <div key={year} className="record-card">
              <div className="record-badge">✓ WIN</div>
              <div style={{ fontSize: 7, color: 'var(--color-muted)', marginBottom: 8 }}>{year}</div>
              <span style={{ fontSize: 24, display: 'block', marginBottom: 6 }}>{flag}</span>
              <div style={{ fontSize: 7, color: 'var(--color-g)' }}>{name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Prediction banner */}
      <div className="sec">
        <div className="section-title">2026 PREDICTION</div>
        <div className="pred-banner">
          <div className="dot-grid" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              fontSize: 6, color: 'var(--color-g)', letterSpacing: 2, marginBottom: 10,
              background: '#fff', display: 'inline-block', padding: '3px 8px',
              border: '1px solid var(--color-g-sh)',
            }}>PROJECTED CHAMPION</div>
            <span style={{ fontSize: 36, display: 'block', marginBottom: 8 }}>🇳🇱</span>
            <div className="txt-shadow-g" style={{ fontSize: 14, color: 'var(--color-g)', marginBottom: 8 }}>
              NETHERLANDS<span className="blink">_</span>
            </div>
            <div style={{ fontSize: 6, color: 'var(--color-g)', opacity: 0.7, lineHeight: 2 }}>
              FIRST WORLD CUP TITLE IN HISTORY<br />
              PATH: MOROCCO → CANADA → FRANCE → ARGENTINA → PORTUGAL
            </div>
          </div>
        </div>
      </div>

      {/* Model variables */}
      <div className="sec">
        <div className="section-title">MODEL VARIABLES</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {factors.map(({ label, pct, color }) => (
            <div key={label} style={{ display: 'grid', gridTemplateColumns: '110px 1fr 32px', alignItems: 'center', gap: 10 }}>
              <div style={{ fontSize: 7, color: 'var(--color-muted)' }}>{label}</div>
              <PixelBar value={pct} color={color} />
              <div style={{ fontSize: 7, color, textAlign: 'right', fontWeight: 'bold' }}>{pct}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
