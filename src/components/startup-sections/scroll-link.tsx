'use client'

import type { FC, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useSmoothScroll } from '@/hooks/use-smooth-scroll.hook'

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
