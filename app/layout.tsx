import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist',
});

export const metadata: Metadata = {
  title: 'S2D Architects — Hanamkonda, Warangal',
  description: 'Architecture studio in Hanamkonda, Warangal, Telangana. Good design through careful study, research, and artistic judgment.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/black_icon.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/black_icon.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/black_icon.jpg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
