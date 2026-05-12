'use client'
import { motion } from 'framer-motion'
import Btn from '@/components/ui/Btn'
import { ArrowRight } from 'lucide-react'

export default function FooterCTA() {
  return (
    <section className="bg-[#F4F6F9] border-t border-[#E2E6EC] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h2 className="font-heading font-800 text-3xl text-[#0D1117] mb-2">
              Ready to run your own prediction?
            </h2>
            <p className="text-[#4A5260] max-w-md">
              All 48 teams, any matchup. The model runs entirely in your browser —
              nothing is sent to any server.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Btn href="/lookup" variant="primary" size="lg">
              Predict a Match
              <ArrowRight size={16} strokeWidth={2} />
            </Btn>
            <Btn href="/mc" variant="default" size="lg">
              Monte Carlo
            </Btn>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
