import { Geist_Mono, Inter, Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

import { cn } from '@/lib/utils'
import { AppNavbar } from '@/components/app-navbar'

import './globals.css'
import { AppFooter } from '@/components/app-footer'
import { WhatsappButton } from '@/components/whatsapp-btn'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const montserrat = Montserrat({
  subsets: ['latin'],
  style: ['italic'],
  variable: '--font-worklab',
})

const takenByVultures = localFont({
  src: '../../public/fonts/taken-by-vultures.ttf',
  variable: '--font-signature',
})

const agrandir = localFont({
  src: '../../public/fonts/agrandir-grandheavy.otf',
  variable: '--font-blueprint',
})

const lovelo = localFont({
  src: '../../public/fonts/lovelo-black.otf',
  variable: '--font-edge',
})

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
        inter.variable,
        montserrat.variable,
        takenByVultures.variable,
        agrandir.variable,
        lovelo.variable
      )}
    >
      <body>
        <AppNavbar />
        {children}
        <AppFooter />
        <WhatsappButton />
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
