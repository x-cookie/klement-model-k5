import { matchP, teamNames, sc, teamData } from '@/lib/klement'

interface Props {
  name: string
}

export default function H2HList({ name }: Props) {
  const opponents = teamNames()
    .filter(t => t !== name)
    .sort((a, b) => sc(b) - sc(a))
    .slice(0, 6)

  return (
    <div>
      <div className="section-title">HEAD-TO-HEAD</div>
      {opponents.map(opp => {
        const { pA, dr, pB } = matchP(name, opp)
        const pAp = Math.round(pA * 100)
        const drp = Math.round(dr * 100)
        const pBp = Math.round(pB * 100)
        const t = teamData(opp)
        return (
          <div key={opp} className="h2h-row">
            <div style={{ fontSize: 7 }}>{teamData(name)?.flag} {name.slice(0, 8)}</div>
            <div className="h2h-bar">
              <div className="h2h-a" style={{ flex: pAp }}>{pAp}%</div>
              <div className="h2h-d" style={{ flex: drp }}>{drp}%</div>
              <div className="h2h-b" style={{ flex: pBp }}>{pBp}%</div>
            </div>
            <div style={{ fontSize: 6, color: 'var(--color-muted)', textAlign: 'right' }}>
              vs {t?.flag} {opp.slice(0, 8)}
            </div>
          </div>
        )
      })}
    </div>
  )
}
