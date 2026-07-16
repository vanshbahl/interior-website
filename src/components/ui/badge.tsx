import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('inline-flex text-[0.65rem] font-medium tracking-[0.18em] text-muted uppercase', className)} {...props} />
}
