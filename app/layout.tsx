import './globals.css'
import '../style.css'
import type { Metadata } from 'next'
import { cn } from 'lib/utils'
import { Inter } from 'next/font/google'
import { LandingNavbar } from "@/components/landing-navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neal Dawson-Elli',
  description: 'Your Next Machine Learning Specialist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={cn("h-screen w-screen", inter.className)}>
        <div className="bg-[#111827] h-screen text-white">
        <div className="overflow-auto mx-auto max-w-screen-xl w-full">
          <LandingNavbar />
        </div>
        {children}
        </div>
        </body>
    </html>
  )
}
