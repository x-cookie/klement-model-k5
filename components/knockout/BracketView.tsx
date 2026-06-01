'use client'
import { Fragment } from 'react'
import { ROUNDS } from '@/lib/fixtures'
import { teamData } from '@/lib/klement'
import FlagImg from '@/components/ui/FlagImg'

// Layout constants
const MATCH_H = 50   // height of each compact match slot (px)
const STEP = 54      // R32 match spacing (MATCH_H + 4px gap)
const COL_W = 118    // width of each round column (px)
const CONN_W = 20    // width of SVG connector between columns (px)
const TOTAL_H = 15 * STEP + MATCH_H  // 860px total bracket height
const ROW_H = Math.floor((MATCH_H - 1) / 2)  // each team row height

// Recursively compute top-offset of match (round, idx) in the bracket
function matchY(round: number, idx: number): number {
  if (round === 0) return idx * STEP
  const tY = matchY(round - 1, idx * 2)
  const bY = matchY(round - 1, idx * 2 + 1)
  return (tY + bY + MATCH_H) / 2 - MATCH_H / 2
}

function TeamRow({ name, isPick }: { name: string; isPick: boolean }) {
  const t = teamData(name)
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      padding: '0 4px',
      height: ROW_H,
      backgroundColor: isPick ? 'var(--color-g-bg)' : 'transparent',
      borderLeft: isPick ? '2px solid var(--color-g)' : '2px solid transparent',
      boxSizing: 'border-box',
    }}>
      <FlagImg name={name} h={10} emoji={t?.flag ?? '🏳️'} />
      <span style={{
        fontSize: 6,
        color: isPick ? 'var(--color-g)' : 'var(--color-txt)',
        fontWeight: isPick ? 'bold' : 'normal',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        flex: 1,
        minWidth: 0,
        lineHeight: 1,
      }}>{name}</span>
      {isPick && <span style={{ fontSize: 5, color: 'var(--color-g)', flexShrink: 0 }}>K✓</span>}
    </div>
  )
}

function MatchSlot({ teamA, teamB, k, top, isFinal }: {
  teamA: string; teamB: string; k?: string; top: number; isFinal?: boolean
}) {
  return (
    <div style={{
      position: 'absolute',
      top,
      left: 0,
      width: COL_W,
      height: MATCH_H,
      border: isFinal ? '1px solid var(--color-g)' : '1px solid var(--color-brd)',
      backgroundColor: 'var(--color-bg)',
      overflow: 'hidden',
      boxSizing: 'border-box',
    }}>
      <TeamRow name={teamA} isPick={k === teamA} />
      <div style={{ height: 1, backgroundColor: isFinal ? 'var(--color-g-sh)' : 'var(--color-brd)' }} />
      <TeamRow name={teamB} isPick={k === teamB} />
    </div>
  )
}

// SVG connector: draws bracket lines between a round column and the next
function ColConnector({ fromRound, count }: { fromRound: number; count: number }) {
  const mid = CONN_W / 2

  return (
    <svg
      width={CONN_W}
      height={TOTAL_H}
      style={{ display: 'block', flexShrink: 0 }}
    >
      {Array.from({ length: count }, (_, i) => {
        const tY = matchY(fromRound, i * 2) + MATCH_H / 2
        const bY = matchY(fromRound, i * 2 + 1) + MATCH_H / 2
        const pY = matchY(fromRound + 1, i) + MATCH_H / 2
        return (
          <g key={i}>
            <line x1={0} y1={tY} x2={mid} y2={tY} stroke="var(--color-brd2)" strokeWidth={1} />
            <line x1={mid} y1={tY} x2={mid} y2={bY} stroke="var(--color-brd2)" strokeWidth={1} />
            <line x1={0} y1={bY} x2={mid} y2={bY} stroke="var(--color-brd2)" strokeWidth={1} />
            <line x1={mid} y1={pY} x2={CONN_W} y2={pY} stroke="var(--color-brd2)" strokeWidth={1} />
          </g>
        )
      })}
    </svg>
  )
}

const BRACKET_ROUNDS = [
  { key: 'r32' as const,   label: 'R32',   connCount: 8 },
  { key: 'r16' as const,   label: 'R16',   connCount: 4 },
  { key: 'qf'  as const,   label: 'QF',    connCount: 2 },
  { key: 'sf'  as const,   label: 'SF',    connCount: 1 },
  { key: 'final' as const, label: 'FINAL', connCount: 0 },
]

export default function BracketView() {
  return (
    <div style={{ overflowX: 'auto', paddingBottom: 12 }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        width: 'max-content',
        paddingTop: 24,
      }}>
        {BRACKET_ROUNDS.map(({ key, label, connCount }, roundIdx) => {
          const matches = ROUNDS[key]
          return (
            <Fragment key={key}>
              {/* Round column */}
              <div style={{ position: 'relative', width: COL_W, height: TOTAL_H, flexShrink: 0 }}>
                <div style={{
                  position: 'absolute',
                  top: -18,
                  left: 0,
                  right: 0,
                  fontSize: 7,
                  color: key === 'final' ? 'var(--color-g)' : 'var(--color-muted)',
                  textAlign: 'center',
                  letterSpacing: 1,
                  fontWeight: key === 'final' ? 'bold' : 'normal',
                }}>{label}</div>

                {matches.map((m, i) => (
                  <MatchSlot
                    key={i}
                    teamA={m.teamA}
                    teamB={m.teamB}
                    k={m.k}
                    top={matchY(roundIdx, i)}
                    isFinal={key === 'final'}
                  />
                ))}
              </div>

              {connCount > 0 && <ColConnector fromRound={roundIdx} count={connCount} />}
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
