import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/LenisProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Saymon | Full Stack Developer Portfolio',
  description: 'Crafting modern, responsive, and user-friendly websites with passion and precision. Transforming ideas into digital reality.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio', 'Web Development'],
  authors: [{ name: 'Saymon' }],
  creator: 'Saymon',
  publisher: 'Saymon',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}