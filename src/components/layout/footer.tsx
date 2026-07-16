import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Container } from '../ui/container'

export function Footer() {
  return (
    <footer className="bg-ink py-16 text-inverse sm:py-20 lg:py-24">
      <Container><div className="grid gap-12 md:grid-cols-12"><div className="md:col-span-7"><Link to="/" className="font-display text-5xl tracking-[-0.055em] sm:text-6xl">Decor &amp; Design</Link><p className="mt-8 max-w-md font-display text-2xl leading-[1.05] tracking-[-0.025em] text-white/75 sm:text-3xl">“The best rooms become part of the memory of a life.”</p></div><div className="grid grid-cols-2 gap-8 text-[0.65rem] font-semibold tracking-[0.16em] uppercase md:col-span-4 md:col-start-9"><div className="flex flex-col gap-4 text-white/60"><Link className="hover:text-white" to="/studio">Studio</Link><Link className="hover:text-white" to="/projects">Projects</Link><Link className="hover:text-white" to="/contact">Contact</Link></div><div className="flex flex-col gap-4 text-white/60"><a className="inline-flex items-center gap-1 hover:text-white" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram <ArrowUpRight className="size-3" /></a><a className="inline-flex items-center gap-1 hover:text-white" href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest <ArrowUpRight className="size-3" /></a></div></div></div><div className="mt-16 flex flex-col gap-3 border-t border-white/15 pt-6 text-[0.58rem] font-medium tracking-[0.14em] text-white/45 uppercase sm:mt-20 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Decor &amp; Design</span><span>Designed by Vector Studio</span></div></Container>
    </footer>
  )
}
