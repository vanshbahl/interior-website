import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import type { FeaturedProject } from '../../../data/featuredProjects'
import { ProjectMeta } from './ProjectMeta'

export function FeaturedProjectCard({ project, index }: { project: FeaturedProject; index: number }) {
  const reverse = index === 1

  return (
    <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }} className="w-[calc(100vw-3rem)] shrink-0 snap-center md:w-auto">
      <motion.div initial="rest" whileHover="hover" className={`md:grid md:grid-cols-12 md:items-center md:gap-10 lg:gap-16 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
        <Link to={`/projects/${project.slug}`} aria-label={`View ${project.title}`} className={`group relative block aspect-[4/5] overflow-hidden bg-[#d6d0c5] md:col-span-8 ${reverse ? 'md:col-start-5' : ''}`}>
          <motion.img src={project.coverImage} alt="" className="h-full w-full object-cover" variants={{ rest: { scale: 1 }, hover: { scale: 1.055 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} />
          <motion.div className="absolute inset-0 bg-black" variants={{ rest: { opacity: 0 }, hover: { opacity: 0.34 } }} transition={{ duration: 0.45 }} />
        </Link>
        <motion.div variants={{ rest: { y: 8 }, hover: { y: 0 } }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} className={`mt-6 md:col-span-4 md:mt-0 ${reverse ? 'md:col-start-1 md:row-start-1' : ''}`}>
          <p className="text-[0.62rem] font-semibold tracking-[0.16em] text-accent uppercase">0{index + 2} — {project.status}</p>
          <h3 className="mt-4 font-display text-4xl leading-[0.9] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">{project.title}</h3>
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted">{project.shortDescription}</p>
          <ProjectMeta project={project} />
          <Link to={`/projects/${project.slug}`} className="mt-7 inline-flex min-h-11 items-center gap-2 text-[0.65rem] font-semibold tracking-[0.16em] text-ink uppercase">Explore story <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
        </motion.div>
      </motion.div>
    </motion.article>
  )
}
