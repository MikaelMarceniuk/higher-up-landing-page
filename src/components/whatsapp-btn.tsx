import { CONTACT_LINKS } from '@/constants/contact-links.constants'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export const WhatsappButton = () => {
  return (
    <Link
      href={CONTACT_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-green-500 shadow-lg transition hover:scale-110 hover:bg-green-600"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp className="h-7 w-7 text-white" />
    </Link>
  )
}
