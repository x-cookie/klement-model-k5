'use client'
import { useState } from 'react'
import { matchP, teamNames, teamData } from '@/lib/klement'
import WDLBar from '@/components/ui/WDLBar'
import FactorBreakdown from '@/components/team/FactorBreakdown'
import TeamSelect from '@/components/ui/TeamSelect'
import PixelParticles from '@/components/ui/PixelParticles'

const allTeams = teamNames().sort()

function upsetLabel(pA: number, pB: number): { text: string; color: string } | null {
  const gap = Math.abs(pA - pB)
  if (gap < 0.1) return { text: '⚔ COIN FLIP', color: 'var(--color-muted)' }
  if (gap > 0.55) return { text: '⚡ HEAVY FAVOURITE', color: 'var(--color-r)' }
  if (gap > 0.35) return { text: '⚡ UPSET POTENTIAL', color: 'var(--color-r)' }
  return null
}

export default function LookupPage() {
  const [teamA, setTeamA] = useState('Netherlands')
  const [teamB, setTeamB] = useState('Portugal')

  const { pA, dr, pB } = matchP(teamA, teamB)
  const tA = teamData(teamA)
  const tB = teamData(teamB)
  const upset = upsetLabel(pA, pB)

  function surpriseMe() {
    const pool = allTeams.filter(t => t !== teamA && t !== teamB)
    const a = pool[Math.floor(Math.random() * pool.length)]
    const remaining = pool.filter(t => t !== a)
    const b = remaining[Math.floor(Math.random() * remaining.length)]
    setTeamA(a)
    setTeamB(b)
  }

  return (
    <div className="sec page-enter" style={{ position: 'relative', overflow: 'hidden' }}>
      <PixelParticles variant="red" />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <div className="section-title" style={{ marginBottom: 0 }}>MATCH LOOKUP</div>
        <button className="px-btn" onClick={surpriseMe} style={{ fontSize: 8, padding: '6px 12px' }}>🎲 RANDOM</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 16, alignItems: 'center', marginBottom: 24 }}>
        <TeamSelect teams={allTeams} value={teamA} onChange={setTeamA} />
        <div style={{ fontSize: 14, color: 'var(--color-r)', textAlign: 'center', fontWeight: 'bold', padding: '0 8px' }}>VS</div>
        <TeamSelect teams={allTeams} value={teamB} onChange={setTeamB} />
      </div>

      <WDLBar pA={pA} dr={dr} pB={pB} labelA={teamA} labelB={teamB} />

      {upset && (
        <div style={{
          marginTop: 10, padding: '5px 12px', display: 'inline-block',
          fontSize: 8, color: upset.color,
          border: `1px solid ${upset.color}`,
          backgroundColor: 'var(--color-r-bg)',
        }}>
          {upset.text}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 28 }}>
        {[
          { team: tA, name: teamA, accentColor: 'var(--color-r)' },
          { team: tB, name: teamB, accentColor: 'var(--color-b)' },
        ].map(({ team, name, accentColor }) => (
          <div key={name} className="factor-card" style={{ borderLeft: `4px solid ${accentColor}` }}>
            <div style={{ fontSize: 10, color: accentColor, marginBottom: 16 }}>
              {team?.flag} {name.toUpperCase()}
            </div>
            {[
              { label: 'FIFA', val: `${team?.fifa} PTS` },
              { label: 'GDP',  val: `$${team?.gdp}K` },
              { label: 'CONF', val: team?.conf ?? '' },
            ].map(({ label, val }) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontSize: 9, color: 'var(--color-muted)' }}>{label}</span>
                <span style={{ fontSize: 9, color: 'var(--color-g)', backgroundColor: 'var(--color-g-bg)', padding: '3px 6px', border: '1px solid var(--color-g-sh)' }}>{val}</span>
              </div>
            ))}
            <div style={{ marginTop: 16 }}>
              <FactorBreakdown name={name} />
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}
