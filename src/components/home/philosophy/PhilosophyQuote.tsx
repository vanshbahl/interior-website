import { motion } from 'motion/react'

export function PhilosophyQuote() {
  return (
    <motion.blockquote initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="border-l border-accent pl-5">
      <p className="font-display text-2xl leading-[1.05] tracking-[-0.025em] text-ink sm:text-3xl">“The best rooms become part of the memory of a life.”</p>
    </motion.blockquote>
  )
}
