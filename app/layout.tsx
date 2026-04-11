import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/ui/Nav'
import ClientLayout from '@/components/ui/ClientLayout'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'WC26 Klement — World Cup 2026 Predictor',
  description:
    'An econometric model that called 2014, 2018 and 2022 correctly — now running on all 48 teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-white">
        <Nav />
        <main className="flex-1">
          <ClientLayout>{children}</ClientLayout>
        </main>
      </body>
    </html>
  )
}
