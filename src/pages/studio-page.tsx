import { motion } from 'motion/react'

import heroInterior from '../assets/hero-interior.png'
import { MeetTheStudio } from '../components/studio/MeetTheStudio'
import { StudioStory } from '../components/studio/StudioStory'

export function StudioPage() {
  return <><section className="relative isolate flex min-h-[82svh] items-end overflow-hidden bg-ink text-white"><motion.img src={heroInterior} alt="A softly lit considered interior" className="absolute inset-0 -z-20 h-full w-full object-cover" initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} /><div className="absolute inset-0 -z-10 bg-black/55" /><div className="mx-auto w-full max-w-[1440px] px-6 pb-20 pt-40 md:px-10 lg:px-14 lg:pb-28"><motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-[0.65rem] font-semibold tracking-[0.2em] text-white/70 uppercase">Decor &amp; Design</motion.p><motion.h1 initial={{ opacity: 0, y: 22, filter: 'blur(5px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.9, delay: 0.08 }} className="mt-6 max-w-4xl font-display text-[clamp(4rem,9vw,9rem)] leading-[0.78] tracking-[-0.06em]">Our Philosophy</motion.h1></div></section><StudioStory /><MeetTheStudio /></>
}
