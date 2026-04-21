'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { matchP, teamNames, teamData } from '@/lib/klement'
import SectionLabel from '@/components/ui/SectionLabel'
import WDLBar from '@/components/ui/WDLBar'
import Btn from '@/components/ui/Btn'

const allTeams = teamNames().sort()

export default function LivePreviewSection() {
  const [teamA, setTeamA] = useState('Netherlands')
  const [teamB, setTeamB] = useState('Portugal')

  const { pA, dr, pB } = matchP(teamA, teamB)
  const tA = teamData(teamA)
  const tB = teamData(teamB)

  return (
    <section className="bg-[#F4F6F9] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <SectionLabel>Try It Now</SectionLabel>
          <h2 className="font-heading font-800 text-2xl text-[#0D1117] mb-8">Pick any two teams.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: 'easeOut', delay: 0.06 }}
          className="max-w-[560px] mx-auto glass-card rounded-2xl p-6 space-y-5"
        >
          <div className="grid grid-cols-2 gap-3">
            {([
              { value: teamA, set: setTeamA, label: 'Team A', flag: tA?.flag ?? '' },
              { value: teamB, set: setTeamB, label: 'Team B', flag: tB?.flag ?? '' },
            ] as const).map(({ value, set, label, flag }) => (
              <div key={label} className="space-y-1">
                <label className="text-xs font-medium text-[#8892A0]">{label}</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg pointer-events-none">{flag}</span>
                  <select
                    value={value}
                    onChange={e => set(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm font-medium border border-[#E2E6EC] rounded-lg bg-white text-[#0D1117] focus:outline-none focus:border-blue appearance-none cursor-pointer"
                  >
                    {allTeams.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#E2E6EC] pt-4">
            <WDLBar pA={pA} dr={dr} pB={pB} labelA={teamA} labelB={teamB} />
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { label: teamA, value: pA, cls: 'text-blue' },
              { label: 'Draw', value: dr, cls: 'text-[#8892A0]' },
              { label: teamB, value: pB, cls: 'text-red' },
            ].map(({ label, value, cls }) => (
              <div key={label} className="bg-[#F4F6F9] rounded-xl p-3">
                <p className={`font-heading font-800 text-xl ${cls}`}>
                  {(value * 100).toFixed(0)}%
                </p>
                <p className="text-xs text-[#8892A0] truncate">{label}</p>
              </div>
            ))}
          </div>

          <div className="text-right">
            <Btn href="/lookup" variant="ghost" size="sm">
              See full breakdown →
            </Btn>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
