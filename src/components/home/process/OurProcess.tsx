import { motion } from 'motion/react'

import { processSteps } from '../../../data/homeContent'
import { Container } from '../../ui/container'

export function OurProcess() {
  return (
    <section className="bg-canvas py-28 sm:py-36 lg:py-48" aria-labelledby="process-heading">
      <Container>
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
          <p className="mb-6 text-[0.65rem] font-semibold tracking-[0.2em] text-accent uppercase">Our process</p>
          <h2 id="process-heading" className="font-display text-5xl leading-[0.88] tracking-[-0.045em] text-ink sm:text-6xl md:text-7xl">A considered path from first conversation to final detail.</h2>
        </motion.div>
        <div className="relative mt-20 sm:mt-28 lg:mt-36">
          <div className="absolute bottom-0 left-[0.45rem] top-0 w-px bg-line md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />
          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step, index) => <motion.article key={step.number} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.75, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }} className="relative grid grid-cols-[1.25rem_1fr] gap-6 md:grid-cols-2 md:gap-16">
              <span className="relative z-10 mt-1.5 size-2.5 rounded-full border border-accent bg-canvas md:absolute md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />
              <div className={`${index % 2 === 0 ? 'md:col-start-1 md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'} max-w-md ${index % 2 === 0 ? 'md:justify-self-end' : ''}`}>
                <p className="text-[0.62rem] font-semibold tracking-[0.17em] text-accent uppercase">{step.number}</p>
                <h3 className="mt-3 font-display text-4xl leading-none tracking-[-0.035em] text-ink sm:text-5xl">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{step.detail}</p>
              </div>
            </motion.article>)}
          </div>
        </div>
      </Container>
    </section>
  )
}
