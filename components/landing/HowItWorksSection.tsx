'use client'
import { motion, type Variants } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { BarChart3, Landmark, Wind, UsersRound, Flag } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const stagger: Variants = { visible: { transition: { staggerChildren: 0.08 } } }

const factors = [
  {
    Icon: BarChart3,
    label: 'FIFA Ranking',
    weight: 0.45,
    color: 'text-blue',
    bg: 'bg-blue-soft',
    desc: 'The most direct signal of current squad strength — weighted heaviest at 45%.',
  },
  {
    Icon: Landmark,
    label: 'National Wealth',
    weight: 0.20,
    color: 'text-[#0D1117]',
    bg: 'bg-[#EFF1F5]',
    desc: 'Richer nations sustain better football infrastructure. Peak advantage around $35k GDP per capita.',
  },
  {
    Icon: Wind,
    label: 'Climate',
    weight: 0.15,
    color: 'text-green',
    bg: 'bg-green-soft',
    desc: 'Top football nations cluster around a 14°C annual average. Performance decays linearly from there.',
  },
  {
    Icon: UsersRound,
    label: 'Population',
    weight: 0.15,
    color: 'text-[#4A5260]',
    bg: 'bg-[#F4F6F9]',
    desc: 'Scale only matters in football-obsessed nations — non-LatAm populations are discounted 70%.',
  },
  {
    Icon: Flag,
    label: 'Home Advantage',
    weight: 0.05,
    color: 'text-red',
    bg: 'bg-red-soft',
    desc: 'Hosting provides a modest edge — reduced in a 3-country multi-continent format.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <SectionLabel>Model Architecture</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.04 }}
              className="font-heading font-800 text-3xl text-[#0D1117] mt-2 mb-4"
            >
              Five variables.
              <br />
              <span className="hl">One prediction.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-[#4A5260] leading-relaxed mb-8"
            >
              Based on Hoffmann, Ging & Ramasamy (2002). The model explains 55% of
              variance between teams — the remaining 45% is noise, encoded directly into
              every simulation.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="bg-[#F4F6F9] rounded-xl p-4 font-mono text-xs text-[#4A5260] leading-relaxed"
            >
              <span className="text-[#0D1117] font-semibold">S</span> = 0.45·FIFA + 0.20·GDP + 0.15·Temp + 0.15·Pop + 0.05·Host
              <br />
              <span className="text-[#0D1117] font-semibold mt-1 block">P(win)</span> = Φ(ΔS / σ) × (1 − draw)
            </motion.div>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-2.5"
          >
            {factors.map(({ Icon, label, weight, color, bg, desc }) => (
              <motion.div key={label} variants={fadeUp} className="glass-card rounded-xl p-4 flex gap-4 items-start">
                <div className={`${bg} p-2.5 rounded-lg flex-shrink-0`}>
                  <Icon size={18} className={color} strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-semibold text-sm text-[#0D1117]">{label}</span>
                    <span className="text-xs font-bold text-[#8892A0]">{(weight * 100).toFixed(0)}%</span>
                  </div>
                  <div className="h-1.5 bg-[#EFF1F5] rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-blue rounded-full" style={{ width: `${weight * 100 * 2}%` }} />
                  </div>
                  <p className="text-xs text-[#8892A0] leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
