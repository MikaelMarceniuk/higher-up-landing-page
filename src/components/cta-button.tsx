import Link from 'next/link'
import { CONTACT_LINKS } from '@/constants/contact-links.constants'
import { Button } from './ui/button'

type CTAButtonProps = {
  text?: string
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  text = 'Agendar diagnóstico estratégico',
}) => {
  return (
    <Link
      href={CONTACT_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        size="lg"
        className="cursor-pointer bg-secondary px-8 py-6 text-lg font-bold text-primary hover:bg-secondary/80"
      >
        {text}
      </Button>
    </Link>
  )
}
