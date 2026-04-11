'use client'
import { AnimatePresence } from 'framer-motion'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>
}
