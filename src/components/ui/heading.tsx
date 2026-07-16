import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & { as?: 'h1' | 'h2' | 'h3' }

export function Heading({ as: Tag = 'h2', className, ...props }: HeadingProps) {
  return <Tag className={cn('font-display font-medium leading-[0.95] tracking-[-0.035em] text-ink', className)} {...props} />
}
