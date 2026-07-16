import { NavLink } from 'react-router-dom'
import { Container } from '../ui/container'
import { cn } from '../../lib/cn'

const links = [
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'Studio' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <header className="border-b border-line">
      <Container className="flex h-20 items-center justify-between">
        <NavLink className="font-display text-2xl tracking-[-0.04em]" to="/">Atelier</NavLink>
        <nav aria-label="Primary navigation" className="flex items-center gap-5 sm:gap-8">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={({ isActive }) => cn('text-[0.65rem] font-medium tracking-[0.15em] uppercase text-muted transition-colors hover:text-ink', isActive && 'text-ink')}>
              {label}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
  )
}
