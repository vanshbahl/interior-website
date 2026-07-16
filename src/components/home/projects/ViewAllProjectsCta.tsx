import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

export function ViewAllProjectsCta() {
  return (
    <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mx-auto mt-28 flex justify-center px-6 pb-8 sm:mt-36 lg:mt-48 lg:pb-12">
      <motion.div initial="rest" whileHover="hover" whileTap={{ scale: 0.985 }}>
        <Link to="/projects" className="group flex min-h-16 min-w-[17.5rem] items-center justify-between gap-10 border border-ink px-7 text-[0.68rem] font-semibold tracking-[0.18em] text-ink uppercase transition-colors duration-500 hover:bg-ink hover:text-inverse sm:min-w-80 sm:px-8">
          View all projects
          <motion.span variants={{ rest: { x: 0 }, hover: { x: 5 } }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}><ArrowRight className="size-4" aria-hidden="true" /></motion.span>
        </Link>
      </motion.div>
    </motion.div>
  )
}
