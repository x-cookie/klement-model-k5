'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { matchP, teamNames, teamData } from '@/lib/klement'
import SectionLabel from '@/components/ui/SectionLabel'
import WDLBar from '@/components/ui/WDLBar'
import Btn from '@/components/ui/Btn'
import { ChevronDown } from 'lucide-react'

const allTeams = teamNames().sort()

function TeamSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const t = teamData(value)
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xl pointer-events-none z-10">{t?.flag}</span>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full pl-10 pr-8 py-3 text-sm font-semibold border border-[#E2E6EC] rounded-xl bg-white text-[#0D1117] focus:outline-none focus:border-blue appearance-none cursor-pointer"
      >
        {allTeams.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8892A0] pointer-events-none" />
    </div>
  )
}

export default function LivePreviewSection() {
  const [teamA, setTeamA] = useState('Netherlands')
  const [teamB, setTeamB] = useState('Portugal')

  const { pA, dr, pB } = matchP(teamA, teamB)
  const tA = teamData(teamA)
  const tB = teamData(teamB)

  return (
    <section className="bg-[#F4F6F9] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <SectionLabel>Live Predictor</SectionLabel>
              <h2 className="font-heading font-800 text-3xl text-[#0D1117] mt-2 mb-4">
                Pick any matchup.
                <br />
                <span className="hl">Get the odds instantly.</span>
              </h2>
              <p className="text-[#4A5260] leading-relaxed mb-6">
                Default: Klement&apos;s predicted final. Change either team and the model
                recalculates in real time — no server calls.
              </p>
              <Btn href="/lookup" variant="ghost" size="sm">
                See full breakdown with factor analysis →
              </Btn>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.08 }}
            className="glass-card rounded-2xl p-6 space-y-5"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#8892A0] uppercase tracking-wide">Team A</label>
                <TeamSelect value={teamA} onChange={setTeamA} />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#8892A0] uppercase tracking-wide">Team B</label>
                <TeamSelect value={teamB} onChange={setTeamB} />
              </div>
            </div>

            <div className="border-t border-[#F4F6F9] pt-4">
              <WDLBar pA={pA} dr={dr} pB={pB} labelA={teamA} labelB={teamB} />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="bg-blue-soft rounded-xl p-4 text-center border-l-4 border-l-blue">
                <div className="text-2xl mb-1">{tA?.flag}</div>
                <p className="font-heading font-800 text-2xl text-blue">{(pA * 100).toFixed(0)}%</p>
                <p className="text-xs text-[#8892A0] truncate mt-0.5 font-medium">{teamA}</p>
              </div>
              <div className="bg-[#F4F6F9] rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">—</div>
                <p className="font-heading font-800 text-2xl text-[#8892A0]">{(dr * 100).toFixed(0)}%</p>
                <p className="text-xs text-[#8892A0] mt-0.5 font-medium">Draw</p>
              </div>
              <div className="bg-red-soft rounded-xl p-4 text-center border-l-4 border-l-red">
                <div className="text-2xl mb-1">{tB?.flag}</div>
                <p className="font-heading font-800 text-2xl text-red">{(pB * 100).toFixed(0)}%</p>
                <p className="text-xs text-[#8892A0] truncate mt-0.5 font-medium">{teamB}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
