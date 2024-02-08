import './globals.css'
import type { Metadata } from 'next'
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
      
      <body className={inter.className}>
        <div className="bg-[#172138] ">
        <div className="h-full overflow-auto mx-auto max-w-screen-xl w-full">
          <LandingNavbar />
        </div>
        {children}
        </div>
        </body>
    </html>
  )
}
