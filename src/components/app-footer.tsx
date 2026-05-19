import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { CONTACT_LINKS } from '@/constants/contact-links.constants'

export const AppFooter = () => {
  return (
    <footer>
      <div className="bg-[#5f8a8b] py-12 text-white">
        <div className="container grid gap-12 md:grid-cols-3">
          {/* Col 1 - Logo + Nav */}
          <div className="flex flex-col items-center gap-6 text-center">
            <Image
              src="/logo-completo.webp"
              alt="Higher Up Logo"
              width={200}
              height={80}
            />
            <nav className="flex flex-col gap-2 font-bold">
              <Link href="#hero" className="transition hover:text-secondary">
                INÍCIO
              </Link>
              <Link
                href="#" // TODO: Adicionar link para sobre nós
                className="transition hover:text-secondary"
              >
                QUEM SOMOS
              </Link>
              <Link
                href="#solucoes"
                className="transition hover:text-secondary"
              >
                SOLUÇÕES DE COMUNICAÇÃO
              </Link>
              <Link href="#" className="transition hover:text-secondary">
                EVENTOS
              </Link>
              <Link
                href="#" // TODO: Adicionar link para blog
                className="transition hover:text-secondary"
              >
                BLOG
              </Link>
            </nav>
          </div>

          {/* Col 2 - Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold">Higher-Up Business English</p>

            <Link
              href={CONTACT_LINKS.whatsapp}
              className="flex items-center gap-3 transition hover:text-secondary"
            >
              <Phone className="h-5 w-5 shrink-0" />
              +55 (16) 99221-8981
            </Link>

            <Link
              href="mailto:contato@higherup.com.br"
              className="flex items-center gap-3 transition hover:text-secondary"
            >
              <Mail className="h-5 w-5 shrink-0" />
              contato@higherup.com.br
            </Link>

            <p className="text-sm">Atendimento: Seg - Sex 09 às 21h</p>

            <p className="text-sm font-semibold">Proud BNI member</p>

            {/* Social */}
            <div className="mt-2 flex gap-3">
              <Link
                href={CONTACT_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-tr from-secondary via-pink-500 to-purple-600 transition hover:opacity-80"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>

              <Link
                href={CONTACT_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 transition hover:opacity-80"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </Link>

              <Link
                href={CONTACT_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 transition hover:opacity-80"
              >
                <FaYoutube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Col 3 - Instagram grid */}
          <div className="flex flex-col gap-3">
            <p className="font-bold">
              SIGA NO INSTA!{' '}
              <Link href={CONTACT_LINKS.instagram}>@HIGHERUPENGLISH</Link>
            </p>
            <behold-widget feed-id="ZRJDhYcDCKHUZTdbvahe" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#4a1060] px-6 py-4 text-sm text-white">
        <div className="container flex items-center justify-between">
          <p>
            Higher Up Business English - Todos os direitos reservados ©{' '}
            {new Date().getFullYear()}
          </p>
          <p>Website feito por CodeUI</p>
        </div>
      </div>
    </footer>
  )
}
