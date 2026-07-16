import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import BlurText from '../../ui/blur-text'
import { PhilosophyQuote } from './PhilosophyQuote'

export function PhilosophyContent() {
  return (
    <div className="flex h-full flex-col justify-center px-6 py-20 sm:px-10 md:py-24 lg:px-[clamp(3rem,7vw,9rem)] lg:py-28">
      <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }} className="mb-7 text-[0.65rem] font-semibold tracking-[0.2em] text-accent uppercase">Studio Philosophy</motion.p>
      <h2 className="max-w-xl font-display text-5xl leading-[0.88] tracking-[-0.045em] text-ink sm:text-6xl lg:text-7xl"><BlurText as="span" text="Rooms shaped by light, made for time." animateBy="words" delay={110} direction="bottom" className="block" /></h2>
      <motion.p initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="mt-8 max-w-lg text-sm leading-7 text-muted sm:text-base sm:leading-8">
        We begin with the enduring qualities of a place: its light, its proportion, the way a hand meets a surface. From there, natural materials and purposeful details are brought into quiet alignment.
      </motion.p>
      <div className="mt-10 max-w-lg"><PhilosophyQuote /></div>
      <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, delay: 0.2 }} className="mt-10">
        <motion.div initial="rest" whileHover="hover" className="inline-flex">
          <Link to="/about" className="flex min-h-12 items-center gap-4 border-b border-ink pb-2 text-[0.66rem] font-semibold tracking-[0.17em] text-ink uppercase">Explore our studio <motion.span variants={{ rest: { x: 0 }, hover: { x: 5 } }} transition={{ duration: 0.3 }}><ArrowRight className="size-4" aria-hidden="true" /></motion.span></Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
