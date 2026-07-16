import { motion } from 'motion/react'

import { services } from '../../../data/homeContent'
import { Container } from '../../ui/container'
import { ServiceFeature } from './ServiceFeature'

const serviceLayouts = [
  'md:col-span-7 lg:col-span-7', 'md:col-span-5 lg:col-span-5 md:mt-20',
  'md:col-span-5 lg:col-span-4', 'md:col-span-7 lg:col-span-8 md:mt-16',
  'md:col-span-8 lg:col-span-7', 'md:col-span-4 lg:col-span-5 md:mt-24',
]

export function Services() {
  return (
    <section className="bg-surface py-28 sm:py-36 lg:py-48" aria-labelledby="services-heading">
      <Container className="grid items-end gap-8 md:grid-cols-12">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="md:col-span-8">
          <p className="mb-6 text-[0.65rem] font-semibold tracking-[0.2em] text-accent uppercase">What we do</p>
          <h2 id="services-heading" className="max-w-3xl font-display text-5xl leading-[0.88] tracking-[-0.045em] text-ink sm:text-6xl md:text-7xl">A complete interior language, shaped around you.</h2>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.75, delay: 0.1 }} className="max-w-sm text-sm leading-7 text-muted md:col-span-4 md:justify-self-end md:pb-1">From first lines to final placement, each commission is given the same attentive, material-led approach.</motion.p>
      </Container>
      <Container className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-28 md:grid-cols-12 md:gap-y-20 lg:mt-36 lg:gap-x-12 lg:gap-y-28">
        {services.map((service, index) => <div key={service.title} className={serviceLayouts[index]}><ServiceFeature service={service} index={index} /></div>)}
      </Container>
    </section>
  )
}
