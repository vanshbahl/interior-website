import { motion } from 'motion/react'

import { Container } from '../../ui/container'
import { HeroButtons } from './HeroButtons'

const reveal = {
  hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export function HeroContent() {
  return (
    <Container className="w-full pb-24 pt-40 sm:pb-28 md:pb-32 md:pt-44 lg:pb-36">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.14, delayChildren: 0.25 }}
        className="max-w-3xl"
      >
        <motion.p variants={reveal} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mb-6 text-[0.65rem] font-medium tracking-[0.2em] text-white/75 uppercase">
          Interiors with a sense of permanence
        </motion.p>
        <motion.h1 id="hero-heading" variants={reveal} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="font-display text-[clamp(4rem,8vw,8.5rem)] leading-[0.8] tracking-[-0.055em] text-white">
          Spaces that<br />outlive trends.
        </motion.h1>
        <motion.p variants={reveal} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mt-8 max-w-md text-sm leading-7 text-white/75 md:text-base">
          We shape quietly exceptional interiors around the way you live, gathering natural materials, enduring forms, and a distinct sense of place.
        </motion.p>
        <motion.div variants={reveal} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <HeroButtons />
        </motion.div>
      </motion.div>
    </Container>
  )
}
