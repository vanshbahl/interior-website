import { Search } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useMemo, useState } from 'react'

import { projects, type ProjectSector } from '../../data/projects'
import { Container } from '../ui/container'
import { ProjectCard } from './ProjectCard'

const filters: Array<'All' | ProjectSector> = ['All', 'Residential', 'Commercial', 'Hospitality']

export function ProjectPortfolio() {
  const [filter, setFilter] = useState<'All' | ProjectSector>('All')
  const [query, setQuery] = useState('')
  const visibleProjects = useMemo(() => projects.filter((project) => (filter === 'All' || project.sector === filter) && `${project.title} ${project.location} ${project.category}`.toLowerCase().includes(query.toLowerCase())), [filter, query])

  return <section className="bg-surface py-28 sm:py-36 lg:py-44"><Container><div className="border-y border-line py-5 sm:flex sm:items-center sm:justify-between"><div className="flex flex-wrap gap-x-5 gap-y-3">{filters.map((item) => <button key={item} type="button" onClick={() => setFilter(item)} aria-pressed={filter === item} className={`min-h-11 text-[0.65rem] font-semibold tracking-[0.16em] uppercase transition-colors ${filter === item ? 'text-ink' : 'text-muted hover:text-ink'}`}>{item}</button>)}</div><label className="mt-4 flex min-h-11 items-center gap-3 border-b border-line text-muted sm:mt-0"><Search className="size-4" /><span className="sr-only">Search projects</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" className="w-40 bg-transparent text-sm text-ink outline-none placeholder:text-muted" /></label></div><motion.p layout className="mt-6 text-[0.62rem] font-medium tracking-[0.14em] text-muted uppercase">{visibleProjects.length} projects</motion.p><motion.div layout className="mt-12 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-12 md:gap-y-24 lg:mt-16"><AnimatePresence mode="popLayout">{visibleProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</AnimatePresence></motion.div>{visibleProjects.length === 0 && <p className="py-24 text-center text-sm text-muted">No projects match this search.</p>}</Container></section>
}
