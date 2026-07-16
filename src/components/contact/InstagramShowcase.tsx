import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'

import { projects } from '../../data/projects'

export function InstagramShowcase() {
  return <section className="bg-surface py-28 sm:py-36 lg:py-44"><div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14"><div className="flex flex-wrap items-end justify-between gap-6"><div><p className="text-[0.65rem] font-semibold tracking-[0.2em] text-accent uppercase">From the studio</p><h2 className="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.045em] sm:text-6xl">A few moments in material.</h2></div><a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex min-h-12 items-center gap-3 border-b border-ink pb-2 text-[0.65rem] font-semibold tracking-[0.16em] uppercase">Follow our journey <ArrowUpRight className="size-4" /></a></div><div className="mt-14 grid grid-cols-3 gap-2 sm:mt-20 sm:gap-3">{projects.slice(0, 9).map((project, index) => <motion.a key={project.id} href="https://instagram.com" target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.04 }} className="group relative aspect-square overflow-hidden"><motion.img src={project.coverImage} alt="" className="h-full w-full object-cover" whileHover={{ scale: 1.06 }} transition={{ duration: 0.7 }} /><motion.span initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} className="absolute inset-0 bg-black/25" /></motion.a>)}</div></div></section>
}
