'use client'
import { motion } from 'framer-motion'

export default function HeroBanner() {
  return (
    <motion.div
      animate={{ rotate: [0, 3, -3, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-72 h-72 mx-auto select-none"
      aria-hidden
    >
      {/* Outer ring */}
      <div
        className="absolute inset-0 rounded-full shadow-2xl"
        style={{
          background: `conic-gradient(
            #1A5FE8 0deg 88deg,
            #ffffff 88deg 180deg,
            #E82418 180deg 258deg,
            #18A84A 258deg 360deg
          )`,
        }}
      />
      {/* White inset */}
      <div className="absolute inset-[8px] rounded-full bg-white shadow-inner" />
      {/* Inner panel */}
      <div
        className="absolute inset-[20px] rounded-full"
        style={{
          background: `conic-gradient(
            #EEF3FE 0deg 88deg,
            #f9fafb 88deg 180deg,
            #FEF0EF 180deg 258deg,
            #EDFBF2 258deg 360deg
          )`,
        }}
      />
      {/* Center dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
          <div
            className="w-14 h-14 rounded-full"
            style={{
              background: `conic-gradient(#1A5FE8, #E82418, #18A84A, #1A5FE8)`,
              opacity: 0.15,
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}
