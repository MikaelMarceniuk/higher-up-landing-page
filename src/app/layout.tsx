import { Geist_Mono, Inter, Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

import { cn } from '@/lib/utils'
import { AppNavbar } from '@/components/app-navbar'

import './globals.css'
import { AppFooter } from '@/components/app-footer'
import { WhatsappButton } from '@/components/whatsapp-btn'
import Script from 'next/script'
import { Metadata } from 'next'

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

export const metadata: Metadata = {
  metadataBase: new URL('https://higher-up.com.br'),
  title: {
    default: 'Higher-Up | Inglês para Negócios',
    template: '%s | Higher-Up',
  },
  description:
    'A Higher-Up especializa executivos e empresas em inglês para negócios com metodologia BELF. Comunicação de alto impacto para líderes que operam em mercados globais.',
  keywords: [
    'inglês para negócios',
    'inglês corporativo',
    'inglês para executivos',
    'BELF',
    'Business English as a Lingua Franca',
    'curso de inglês para empresas',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Higher-Up',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt_BR"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Higher-Up Business English',
              url: 'https://higher-up.com.br',
              description:
                'Especialistas em inglês para negócios com metodologia BELF para executivos e empresas.',
              sameAs: [
                'https://www.instagram.com/higherupenglish',
                'https://www.linkedin.com/company/higher-up-english',
              ],
              areaServed: 'BR',
              availableLanguage: 'Portuguese',
            }),
          }}
        />

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
