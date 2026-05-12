'use client'
import { motion, type Variants } from 'framer-motion'
import HeroBanner from '@/components/ui/HeroBanner'
import Btn from '@/components/ui/Btn'
import { ShieldCheck } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const stats = [
  { value: '3', label: 'Correct predictions' },
  { value: '48', label: 'Qualified teams' },
  { value: '0.55', label: 'Model R²' },
  { value: '0%', label: 'Score guessing' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Trionda background stripes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-blue opacity-[0.04] translate-x-32 -translate-y-16" />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full bg-green opacity-[0.05] -translate-x-16 translate-y-10" />
        <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] rounded-full bg-red opacity-[0.03] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-7">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-soft border border-blue/20 rounded-full"
            >
              <ShieldCheck size={13} className="text-blue" strokeWidth={2.5} />
              <span className="text-xs font-semibold text-blue">Panmure Liberum · April 2026</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.05 }}
              className="font-heading font-800 text-5xl md:text-6xl leading-[1.05] tracking-tight text-[#0D1117]"
            >
              Who wins the
              <br />
              <span className="hl">2026 World Cup?</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.10 }}
              className="text-lg text-[#4A5260] leading-relaxed max-w-md"
            >
              An econometric model that called 2014, 2018 and 2022 correctly —
              now running on all 48 qualified nations.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 }}
              className="flex items-center gap-3"
            >
              <Btn href="/lookup" variant="primary" size="lg">
                Predict a Match
              </Btn>
              <Btn href="/about" variant="ghost" size="lg">
                How it works
              </Btn>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <HeroBanner />
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.25 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E2E6EC] rounded-2xl overflow-hidden border border-[#E2E6EC]"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-white px-6 py-5 text-center">
              <p className="font-heading font-800 text-3xl text-[#0D1117]">{value}</p>
              <p className="text-xs text-[#8892A0] mt-0.5 font-medium">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
