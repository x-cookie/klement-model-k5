'use client'
import { motion, type Variants } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Btn from '@/components/ui/Btn'
import { Zap, TrendingUp } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function KlementCallSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative bg-[#0D1117] rounded-3xl overflow-hidden">
          {/* Decorative colour blobs */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue opacity-20 translate-x-24 -translate-y-24 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-green opacity-15 -translate-x-16 translate-y-16 blur-3xl" />
          </div>

          <div className="relative px-8 md:px-14 py-14">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                >
                  <SectionLabel>
                    <span className="text-[#4A5260]">The 2026 Prediction</span>
                  </SectionLabel>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 }}
                  className="flex items-center gap-4 mt-3 mb-6"
                >
                  <span className="text-7xl">🇳🇱</span>
                  <div>
                    <p className="text-white/50 text-sm font-medium mb-0.5">2026 World Champion</p>
                    <h2 className="font-heading font-800 text-4xl text-white leading-tight">Netherlands</h2>
                  </div>
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.10 }}
                  className="text-white/60 leading-relaxed mb-8 max-w-sm"
                >
                  For the first time in their history, the Netherlands are projected to lift the trophy —
                  through Morocco, Canada, France, Argentina, and a final against Portugal.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.14 }}
                  className="flex gap-3"
                >
                  <Btn href="/knockout/r32" variant="primary" size="md">View full bracket</Btn>
                  <Btn href="/mc" size="md" className="border border-white/20 text-white hover:bg-white/10">
                    Run simulations
                  </Btn>
                </motion.div>
              </div>

              <div className="space-y-4">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 }}
                  className="bg-white/8 border border-white/10 rounded-2xl p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-red/20 rounded-lg p-1.5">
                      <Zap size={14} className="text-red-light" strokeWidth={2} />
                    </div>
                    <span className="text-xs font-semibold text-white/60 uppercase tracking-wide">Biggest Upset</span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🇯🇵</span>
                    <div className="flex-1 h-px bg-white/20" />
                    <span className="text-2xl">🇧🇷</span>
                  </div>
                  <p className="text-white font-semibold">Japan defeat Brazil</p>
                  <p className="text-white/50 text-sm mt-1">Round of 32 — one of the most improbable results in World Cup history, per the model.</p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.18 }}
                  className="bg-white/8 border border-white/10 rounded-2xl p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-green/20 rounded-lg p-1.5">
                      <TrendingUp size={14} className="text-green-light" strokeWidth={2} />
                    </div>
                    <span className="text-xs font-semibold text-white/60 uppercase tracking-wide">The Final</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇳🇱</span>
                    <span className="text-white/40 font-semibold text-sm">vs</span>
                    <span className="text-2xl">🇵🇹</span>
                    <div className="ml-auto">
                      <span className="text-xs text-green-light font-semibold bg-green/20 px-2 py-1 rounded-full">Klement&apos;s pick: NED</span>
                    </div>
                  </div>
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.22 }}
                  className="text-white/30 text-xs leading-relaxed"
                >
                  Probabilistic forecast — not a guarantee. 45% of variance is unmodelled noise.
                  Every simulation can produce a different champion.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
