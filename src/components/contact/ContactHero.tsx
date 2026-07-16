import { motion, useScroll, useTransform } from 'motion/react'

import heroInterior from '../../assets/hero-interior.png'

export function ContactHero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, 110])
  return <section className="relative isolate flex min-h-[84svh] items-end overflow-hidden bg-ink text-white"><motion.img src={heroInterior} alt="A warm, considered interior" style={{ y }} className="absolute -inset-y-24 -z-20 h-[calc(100%+12rem)] w-full max-w-none object-cover" initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }} /><div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/40 to-black/35" /><div className="mx-auto w-full max-w-[1440px] px-6 pb-20 pt-40 md:px-10 lg:px-14 lg:pb-28"><motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-[0.65rem] font-semibold tracking-[0.2em] text-white/70 uppercase">Begin a conversation</motion.p><motion.h1 initial={{ opacity: 0, y: 22, filter: 'blur(5px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className="mt-6 max-w-5xl font-display text-[clamp(4rem,9vw,9rem)] leading-[0.78] tracking-[-0.06em]">Let’s Create Something Extraordinary.</motion.h1><motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.18 }} className="mt-8 max-w-lg text-sm leading-7 text-white/75 sm:text-base">Tell us about the place you are imagining. We’ll bring an attentive eye, a material point of view, and a process built around your life.</motion.p></div></section>
}
