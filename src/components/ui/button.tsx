import type { ButtonHTMLAttributes } from 'react'

import { cn } from '../../lib/cn'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'text'
}

const variants = {
  primary: 'bg-ink text-inverse hover:bg-accent',
  secondary: 'border border-line text-ink hover:border-ink',
  text: 'text-ink underline-offset-4 hover:underline',
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn('inline-flex items-center justify-center px-5 py-3 text-xs font-medium tracking-[0.14em] uppercase transition-colors', variants[variant], className)}
      {...props}
    />
  )
}
