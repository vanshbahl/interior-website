import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

type ServiceFeatureProps = {
  service: { title: string; detail: string; image: string }
  index: number
}

export function ServiceFeature({ service, index }: ServiceFeatureProps) {
  return (
    <motion.article initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: Math.min(index * 0.06, 0.24), ease: [0.22, 1, 0.36, 1] }}>
      <motion.div initial="rest" whileHover="hover" className="group relative overflow-hidden bg-ink">
        <Link to="/contact" aria-label={`Enquire about ${service.title}`} className="block aspect-[4/5] sm:aspect-[5/6]">
          <motion.img src={service.image} alt="" className="h-full w-full object-cover" variants={{ rest: { scale: 1 }, hover: { scale: 1.055 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} />
          <motion.div className="absolute inset-0 bg-black" variants={{ rest: { opacity: 0.35 }, hover: { opacity: 0.58 } }} transition={{ duration: 0.5 }} />
          <motion.div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8" variants={{ rest: { y: 9 }, hover: { y: 0 } }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
            <p className="mb-3 text-[0.6rem] font-semibold tracking-[0.17em] text-white/70 uppercase">0{index + 1} — Service</p>
            <div className="flex items-end justify-between gap-5"><div><h3 className="font-display text-3xl leading-[0.9] tracking-[-0.035em] sm:text-4xl">{service.title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-white/80">{service.detail}</p></div><motion.span variants={{ rest: { x: 0, y: 0 }, hover: { x: 3, y: -3 } }} transition={{ duration: 0.3 }}><ArrowUpRight className="mb-1 size-5" aria-hidden="true" /></motion.span></div>
          </motion.div>
        </Link>
      </motion.div>
    </motion.article>
  )
}
