import { motion } from 'motion/react'

export function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 right-6 hidden items-center gap-3 text-[0.6rem] font-medium tracking-[0.18em] text-white/70 uppercase md:flex lg:right-14">
      <span className="[writing-mode:vertical-rl]">Scroll to explore</span>
      <div className="relative h-16 w-px overflow-hidden bg-white/25" aria-hidden="true">
        <motion.span className="absolute inset-x-0 top-0 h-7 bg-white" animate={{ y: [-28, 64] }} transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.4 }} />
      </div>
    </div>
  )
}
