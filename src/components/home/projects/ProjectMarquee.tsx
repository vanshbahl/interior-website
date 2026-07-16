import { useCallback, useEffect } from 'react'
import { motion, useAnimation } from 'motion/react'
import { Link } from 'react-router-dom'

import type { FeaturedProject } from '../../../data/featuredProjects'

export function ProjectMarquee({ projects }: { projects: FeaturedProject[] }) {
  const controls = useAnimation()
  const start = useCallback(() => controls.start({ x: '-50%', transition: { duration: 72, ease: 'linear', repeat: Infinity } }), [controls])

  useEffect(() => { void start() }, [start])

  return (
    <div className="overflow-hidden border-y border-line py-4 sm:py-5">
      <motion.div animate={controls} onHoverStart={() => controls.stop()} onHoverEnd={() => { void start() }} className="flex w-max gap-4 will-change-transform sm:gap-5">
        {[...projects, ...projects].map((project, index) => <motion.div key={`${project.id}-${index}`} initial="rest" whileHover="hover" className="h-36 w-56 shrink-0 sm:h-44 sm:w-72"><Link to={`/projects/${project.slug}`} tabIndex={index >= projects.length ? -1 : undefined} aria-hidden={index >= projects.length} className="group relative block h-full overflow-hidden bg-ink"><motion.img src={project.coverImage} alt="" className="h-full w-full object-cover" variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }} transition={{ duration: 0.7 }} /><motion.div className="absolute inset-0 bg-black/25" variants={{ rest: { opacity: 0.25 }, hover: { opacity: 0.55 } }} transition={{ duration: 0.35 }} /><span className="absolute inset-x-4 bottom-3 text-[0.6rem] font-semibold tracking-[0.16em] text-white uppercase sm:bottom-4">{project.title}</span></Link></motion.div>)}
      </motion.div>
    </div>
  )
}
