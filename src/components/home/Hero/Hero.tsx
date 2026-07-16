import { motion } from 'motion/react'

import heroInterior from '../../../assets/hero-interior.png'
import { HeroContent } from './HeroContent'
import { ScrollIndicator } from './ScrollIndicator'

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-end overflow-hidden bg-ink text-white" aria-labelledby="hero-heading">
      <motion.img
        src={heroInterior}
        alt="Warm, considered living space with sculptural furnishings"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center] sm:object-center"
        initial={{ opacity: 0, scale: 1.06, filter: 'blur(6px)' }}
        animate={{ opacity: 1, scale: 1.015, filter: 'blur(0px)' }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/55 via-transparent to-black/35" />

      <HeroContent />
      <ScrollIndicator />
    </section>
  )
}
