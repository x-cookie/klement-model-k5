import GroupCard from '@/components/match/GroupCard'
import { GROUPS } from '@/lib/fixtures'

export default function GroupsPage() {
  return (
    <div className="sec page-enter">
      <div className="section-title">GROUP STAGE — 12 GROUPS</div>
      <div style={{ fontSize: 9, color: 'var(--color-muted)', marginBottom: 24, lineHeight: 2, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span className="qual-dot" /> QUALIFIED TO ROUND OF 32
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {Object.entries(GROUPS).map(([group, teams]) => (
          <GroupCard key={group} group={group} teams={teams} />
        ))}
      </div>
    </div>
  )
}
