import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

import studioMaterials from '../../../assets/studio-materials.png'

export function PhilosophyImage() {
  const imageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-3%', '3%'])

  return (
    <motion.div ref={imageRef} initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="relative aspect-[4/5] overflow-hidden bg-[#d8d1c5] sm:aspect-[5/6] lg:aspect-auto lg:min-h-[760px]">
      <motion.img src={studioMaterials} alt="Architectural sketches and material samples arranged on a stone worktable" style={{ y }} className="absolute -inset-y-[4%] h-[108%] w-full max-w-none object-cover" />
    </motion.div>
  )
}
