import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import { Container } from '../ui/container'

export function MeetTheStudio() {
  return <section className="bg-ink py-28 text-inverse sm:py-36 lg:py-48"><Container className="grid gap-12 md:grid-cols-12 md:items-end"><motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="md:col-span-7"><p className="text-[0.65rem] font-semibold tracking-[0.2em] text-white/55 uppercase">Meet the studio</p><h2 className="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.045em] sm:text-6xl md:text-7xl">A small team with a close eye on every room.</h2></motion.div><div className="md:col-span-4 md:col-start-9"><p className="text-sm leading-7 text-white/65">Our London-based studio brings together interior architects, designers, and project specialists. We stay intentionally close to every commission, from first sketch through to the final styling pass.</p><motion.div initial="rest" whileHover="hover" className="mt-10 inline-flex"><Link to="/contact" className="flex min-h-12 items-center gap-4 border-b border-white pb-2 text-[0.66rem] font-semibold tracking-[0.17em] uppercase">Book a consultation <motion.span variants={{ rest: { x: 0 }, hover: { x: 5 } }} transition={{ duration: 0.3 }}><ArrowRight className="size-4" /></motion.span></Link></motion.div></div></Container></section>
}
