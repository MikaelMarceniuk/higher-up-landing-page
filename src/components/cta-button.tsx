import Link from 'next/link'
import { CONTACT_LINKS } from '@/constants/contact-links.constants'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

type CTAButtonProps = {
  text?: string
  href?: string
  className?: string
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  text = 'Agendar diagnóstico estratégico',
  href = CONTACT_LINKS.whatsapp,
  className,
}) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Button
        size="lg"
        className={cn(
          'cursor-pointer bg-secondary px-8 py-6 text-lg font-bold text-primary hover:bg-secondary/80',
          className
        )}
      >
        {text}
      </Button>
    </Link>
  )
}
