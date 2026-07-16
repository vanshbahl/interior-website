import { motion } from 'motion/react'

import { Container } from '../../ui/container'

export function SectionHeader() {
  return (
    <Container className="grid items-end gap-8 md:grid-cols-12">
      <motion.div initial={{ opacity: 0, y: 18, filter: 'blur(5px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="md:col-span-9">
        <p className="mb-6 text-[0.65rem] font-semibold tracking-[0.2em] text-accent uppercase">Selected Stories</p>
        <h2 id="featured-projects-heading" className="max-w-4xl font-display text-5xl leading-[0.88] tracking-[-0.045em] text-ink sm:text-6xl md:text-7xl lg:text-8xl">Spaces Designed To Last.</h2>
      </motion.div>
      <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.75, delay: 0.1 }} className="max-w-sm text-sm leading-7 text-muted md:col-span-3 md:justify-self-end md:pb-1">
        A considered selection of rooms with a lasting point of view—made to be lived in, not simply looked at.
      </motion.p>
    </Container>
  )
}
