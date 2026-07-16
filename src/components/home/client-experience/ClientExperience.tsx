import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

import { testimonials } from '../../../data/homeContent'
import { Container } from '../../ui/container'

export function ClientExperience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className="bg-ink py-28 text-inverse sm:py-36 lg:py-48" aria-labelledby="client-experience-heading">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="md:col-span-7">
            <p className="mb-6 text-[0.65rem] font-semibold tracking-[0.2em] text-white/55 uppercase">Client experience</p>
            <h2 id="client-experience-heading" className="font-display text-5xl leading-[0.88] tracking-[-0.045em] sm:text-6xl md:text-7xl">The feeling that stays after the work is done.</h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.75, delay: 0.1 }} className="max-w-sm text-sm leading-7 text-white/65 md:col-span-4 md:col-start-9">A few words from the people who invited us into the places that matter most to them.</motion.p>
        </div>

        <div className="mt-20 border-y border-white/20 py-12 sm:mt-28 sm:py-16 lg:mt-36 lg:py-24">
          <AnimatePresence mode="wait">
            <motion.figure key={activeTestimonial.name} initial={{ opacity: 0, y: 16, filter: 'blur(5px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="mx-auto max-w-5xl">
              <blockquote className="font-display text-4xl leading-[0.98] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-7xl">{activeTestimonial.quote}</blockquote>
              <figcaption className="mt-10 flex flex-col gap-1 text-[0.65rem] font-semibold tracking-[0.16em] text-white/65 uppercase sm:mt-14 sm:flex-row sm:items-center sm:gap-4"><span className="text-white">{activeTestimonial.name}</span><span className="hidden size-1 rounded-full bg-white/45 sm:block" /><span>{activeTestimonial.project}</span></figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 grid grid-cols-1 border-t border-white/20 sm:mt-14 sm:grid-cols-5">
          {testimonials.map((testimonial, index) => <button key={testimonial.name} type="button" onClick={() => setActiveIndex(index)} aria-pressed={activeIndex === index} className={`group min-h-18 border-b border-white/20 px-0 py-5 text-left sm:min-h-24 sm:border-b-0 sm:border-r sm:px-5 sm:last:border-r-0 ${activeIndex === index ? 'text-white' : 'text-white/45'}`}>
            <motion.span animate={{ x: activeIndex === index ? 5 : 0, opacity: activeIndex === index ? 1 : 0.6 }} transition={{ duration: 0.3 }} className="flex items-center justify-between gap-4 text-[0.62rem] font-semibold tracking-[0.14em] uppercase"><span>{String(index + 1).padStart(2, '0')}</span><span className="text-right leading-5">{testimonial.name}</span></motion.span>
          </button>)}
        </div>
      </Container>
    </section>
  )
}
