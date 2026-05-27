import { Geist_Mono, Inter } from 'next/font/google'
import Script from 'next/script'
import type { Metadata } from 'next'

import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { AppNavbar } from '@/components/app-navbar'
import { AppFooter } from '@/components/app-footer'
import { WhatsappButton } from '@/components/whatsapp-btn'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Higher Up Business English',
  description: 'Mentoria de aceleração em inglês corporativo',
  openGraph: {
    title: 'Higher Up Business English',
    description: 'Mentoria de aceleração em inglês corporativo',
    url: 'https://higherup.com.br',
    siteName: 'Higher Up',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'antialiased',
        fontMono.variable,
        'font-sans',
        inter.variable
      )}
    >
      <body>
        <ThemeProvider>
          <AppNavbar />
          {children}
          <AppFooter />
          <WhatsappButton />
        </ThemeProvider>
      </body>

      <Script
        id="behold-widget"
        type="module"
        src="https://w.behold.so/widget.js"
        strategy="lazyOnload"
      />
    </html>
  )
}
