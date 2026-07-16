import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function HeroButtons() {
  return (
    <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
      <Link to="/projects" className="group inline-flex min-w-48 items-center justify-between bg-white px-5 py-4 text-[0.65rem] font-semibold tracking-[0.16em] text-ink uppercase transition duration-300 hover:bg-accent hover:text-white">
        View Projects <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
      <Link to="/contact" className="group inline-flex min-w-48 items-center justify-between border border-white/50 px-5 py-4 text-[0.65rem] font-semibold tracking-[0.16em] text-white uppercase transition duration-300 hover:border-white hover:bg-white/10">
        Book Consultation <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </div>
  )
}
