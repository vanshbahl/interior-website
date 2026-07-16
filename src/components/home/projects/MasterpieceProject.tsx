import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import type { FeaturedProject } from '../../../data/featuredProjects'
import { ProjectMeta } from './ProjectMeta'

export function MasterpieceProject({ project }: { project: FeaturedProject }) {
  return (
    <motion.article initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto max-w-[1728px] overflow-hidden bg-ink text-white">
      <Link to={`/projects/${project.slug}`} aria-label={`View case study: ${project.title}`} className="group block">
        <motion.div initial="rest" whileHover="hover" className="relative h-[min(78svh,880px)] min-h-[600px] overflow-hidden sm:h-[min(82svh,960px)]">
          <motion.img src={project.coverImage} alt="" className="h-full w-full object-cover" variants={{ rest: { scale: 1.04 }, hover: { scale: 1.075 } }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} />
          <motion.div className="absolute inset-0 bg-black/20" variants={{ rest: { opacity: 0.35 }, hover: { opacity: 0.58 } }} transition={{ duration: 0.55 }} />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-6 pb-8 pt-32 sm:px-10 sm:pb-10 lg:px-16 lg:pb-14">
            <motion.div className="grid gap-8 lg:grid-cols-12 lg:items-end" initial="rest" whileHover="hover">
              <div className="lg:col-span-7"><motion.p variants={{ rest: { opacity: 0.7, y: 8 }, hover: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }} className="mb-4 text-[0.65rem] font-semibold tracking-[0.18em] uppercase">Featured case study · {project.category}</motion.p><motion.h3 variants={{ rest: { y: 9 }, hover: { y: 0 } }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="font-display text-5xl leading-[0.85] tracking-[-0.045em] sm:text-6xl md:text-7xl">{project.title}</motion.h3><motion.p variants={{ rest: { opacity: 0.75, y: 10 }, hover: { opacity: 1, y: 0 } }} transition={{ duration: 0.5, delay: 0.04 }} className="mt-5 max-w-md text-sm leading-6 text-white/85">{project.shortDescription}</motion.p></div>
              <div className="lg:col-span-5"><ProjectMeta project={project} detailed /><motion.span variants={{ rest: { y: 7 }, hover: { y: 0 } }} transition={{ duration: 0.4 }} className="mt-7 inline-flex min-h-11 items-center gap-3 border-b border-white pb-2 text-[0.64rem] font-semibold tracking-[0.16em] uppercase">View case study <ArrowUpRight className="size-4" aria-hidden="true" /></motion.span></div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  )
}
