import { Geist_Mono, Inter } from 'next/font/google'

import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { AppNavbar } from '@/components/app-navbar'

import './globals.css'
import { AppFooter } from '@/components/app-footer'
import { WhatsappButton } from '@/components/whatsapp-btn'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

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
