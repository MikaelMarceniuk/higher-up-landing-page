'use client'

import type { FC, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useSmoothScroll } from '@/hooks/use-smooth-scroll.hook'

export const displayFont = 'font-(family-name:--font-startup-display)'

export const headingClass = cn(
  displayFont,
  'text-[clamp(2.45rem,11vw,3.7rem)] leading-[1.02] font-extrabold tracking-[-0.065em] md:text-[clamp(2.5rem,4.2vw,4.65rem)]'
)

export const ctaClass =
  'h-auto rounded-sm px-6 py-4 text-xs font-extrabold tracking-[0.05em] uppercase transition-all hover:-translate-y-0.5 hover:bg-secondary/80 hover:shadow-lg'

type EyebrowProps = {
  children: ReactNode
  line?: boolean
  className?: string
}

export const Eyebrow: FC<EyebrowProps> = ({ children, line, className }) => (
  <p
    className={cn(
      'mb-5 flex items-center gap-2.5 text-xs font-extrabold tracking-[0.13em] text-primary uppercase',
      className
    )}
  >
    {line && <span className="inline-block h-0.5 w-6 bg-current" />}
    {children}
  </p>
)

type SectionMarkerProps = {
  number: string
  label: string
  onDark?: boolean
}

export const SectionMarker: FC<SectionMarkerProps> = ({
  number,
  label,
  onDark,
}) => (
  <div
    className={cn(
      'mb-10 flex items-center gap-2.5 text-[0.67rem] font-extrabold tracking-[0.11em] uppercase',
      onDark ? 'text-secondary' : 'text-primary'
    )}
  >
    <span className={onDark ? 'text-white/70' : 'text-primary/60'}>
      {number}
    </span>
    <i className="block h-px w-8.5 bg-current" />
    <span>{label}</span>
  </div>
)

type ScrollLinkProps = {
  targetId: string
  children: ReactNode
  className?: string
}

export const ScrollLink: FC<ScrollLinkProps> = ({
  targetId,
  children,
  className,
}) => {
  const { scrollTo } = useSmoothScroll()

  return (
    <a
      href={`#${targetId}`}
      onClick={(e) => {
        e.preventDefault()
        scrollTo(targetId)
      }}
      className={cn(
        'inline-flex items-center gap-2.5 border-b border-current pb-1 text-sm font-bold transition-all hover:gap-3.5 hover:text-secondary',
        className
      )}
    >
      {children} <span aria-hidden="true">↓</span>
    </a>
  )
}
