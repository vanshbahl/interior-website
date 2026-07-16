import { PhilosophyContent } from './PhilosophyContent'
import { PhilosophyImage } from './PhilosophyImage'

export function StudioPhilosophy() {
  return (
    <section className="bg-canvas py-20 sm:py-28 lg:py-36" aria-label="Studio Philosophy">
      <div className="mx-auto max-w-[1728px] lg:grid lg:grid-cols-2">
        <PhilosophyImage />
        <PhilosophyContent />
      </div>
    </section>
  )
}
