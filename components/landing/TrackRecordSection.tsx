'use client'
import { motion, type Variants } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Tag from '@/components/ui/Tag'
import { Award } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const stagger: Variants = { visible: { transition: { staggerChildren: 0.1 } } }

const predictions = [
  { year: '2014', team: 'Germany', flag: '🇩🇪', color: 'text-[#0D1117]', bg: 'bg-white', border: 'border-l-4 border-l-[#0D1117]' },
  { year: '2018', team: 'France',  flag: '🇫🇷', color: 'text-blue',      bg: 'bg-blue-soft', border: 'border-l-4 border-l-blue' },
  { year: '2022', team: 'Argentina', flag: '🇦🇷', color: 'text-green',   bg: 'bg-green-soft', border: 'border-l-4 border-l-green' },
]

export default function TrackRecordSection() {
  return (
    <section className="bg-[#F4F6F9] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex items-center gap-3 mb-3"
        >
          <SectionLabel>Track Record</SectionLabel>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.04 }}
          className="font-heading font-800 text-3xl text-[#0D1117] mb-10"
        >
          Three tournaments.{' '}
          <span className="hl-green">Three correct calls.</span>
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 mb-10"
        >
          {predictions.map(({ year, team, flag, bg, border }) => (
            <motion.div
              key={year}
              variants={fadeUp}
              className={`glass-card ${bg} ${border} rounded-2xl p-6`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-[#8892A0] uppercase tracking-wide mb-1">{year} Champion</p>
                  <p className="font-heading font-800 text-xl text-[#0D1117]">{team}</p>
                </div>
                <span className="text-4xl">{flag}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award size={14} className="text-green" strokeWidth={2.5} />
                <Tag variant="green">Correctly predicted</Tag>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-l-4 border-l-[#0D1117] pl-5 max-w-2xl"
        >
          <p className="font-heading text-lg text-[#4A5260] leading-relaxed">
            &ldquo;I built this model to prove econometrics can&apos;t predict football. Then it did.&rdquo;
          </p>
          <footer className="mt-2 text-sm font-semibold text-[#8892A0]">Joachim Klement — Panmure Liberum</footer>
        </motion.blockquote>
      </div>
    </section>
  )
}
