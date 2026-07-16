import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Container } from '../ui/container'
import { cn } from '../../lib/cn'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/studio', label: 'Studio' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [isOpen, setIsOpen] = useState(false)
  const linkClass = (isActive: boolean) => cn('text-[0.65rem] font-medium tracking-[0.15em] uppercase transition-colors', isHome ? 'text-white/70 hover:text-white' : 'text-muted hover:text-ink', isActive && (isHome ? 'text-white' : 'text-ink'))

  return (
    <header className={cn('z-30 border-b', isHome ? 'fixed inset-x-0 top-0 border-white/15 bg-black/10 text-white backdrop-blur-sm' : 'sticky top-0 border-line bg-surface/90 text-ink backdrop-blur-md')}>
      <Container className="flex h-20 items-center justify-between">
        <NavLink aria-label="Decor & Design home" className="font-display text-xl tracking-[-0.04em] sm:text-2xl" to="/">Decor &amp; Design</NavLink>
        <nav aria-label="Primary navigation" className="hidden items-center gap-5 sm:flex sm:gap-8">
          {links.map(({ to, label, end }) => (
            <NavLink key={to} end={end} to={to} className={({ isActive }) => linkClass(isActive)}>
              {label}
            </NavLink>
          ))}
        </nav>
        <button type="button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-label="Toggle navigation" className="inline-flex size-11 items-center justify-center sm:hidden">{isOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button>
      </Container>
      {isOpen && <div className={cn('border-t sm:hidden', isHome ? 'border-white/15 bg-ink/95 text-white' : 'border-line bg-surface')}><Container className="flex flex-col py-4">{links.map(({ to, label, end }) => <NavLink key={to} end={end} to={to} onClick={() => setIsOpen(false)} className={({ isActive }) => cn('flex min-h-12 items-center border-b text-[0.68rem] font-semibold tracking-[0.16em] uppercase last:border-b-0', isHome ? 'border-white/15' : 'border-line', linkClass(isActive))}>{label}</NavLink>)}</Container></div>}
    </header>
  )
}
