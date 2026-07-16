import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-14', className)} {...props} />
}
