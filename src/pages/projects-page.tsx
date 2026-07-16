import { motion } from 'motion/react'

import { ProjectPortfolio } from '../components/projects/ProjectPortfolio'

export function ProjectsPage() {
  return <><section className="bg-canvas pt-28 sm:pt-36 lg:pt-44"><div className="mx-auto max-w-[1440px] px-6 pb-20 md:px-10 lg:px-14 lg:pb-28"><motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-[0.65rem] font-semibold tracking-[0.2em] text-accent uppercase">Portfolio</motion.p><motion.h1 initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.85, delay: 0.08 }} className="mt-6 max-w-5xl font-display text-[clamp(4rem,9vw,8.5rem)] leading-[0.8] tracking-[-0.055em]">A collection of places with a lasting point of view.</motion.h1></div></section><ProjectPortfolio /></>
}
