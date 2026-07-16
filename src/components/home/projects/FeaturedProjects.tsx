import { featuredProjects } from '../../../data/featuredProjects'
import { Container } from '../../ui/container'
import { FeaturedProjectCard } from './FeaturedProjectCard'
import { MasterpieceProject } from './MasterpieceProject'
import { ProjectMarquee } from './ProjectMarquee'
import { SectionHeader } from './SectionHeader'
import { ViewAllProjectsCta } from './ViewAllProjectsCta'

const [masterpiece, ...signatureProjects] = featuredProjects.slice(0, 4)

export function FeaturedProjects() {
  return (
    <section className="bg-surface py-28 sm:py-36 lg:py-48" aria-labelledby="featured-projects-heading">
      <SectionHeader />
      <div className="mt-20 sm:mt-28 lg:mt-36"><MasterpieceProject project={masterpiece} /></div>
      <div className="mt-16 sm:mt-20"><ProjectMarquee projects={featuredProjects.slice(4, 10)} /></div>
      <Container className="mt-24 sm:mt-32 lg:mt-44">
        <div className="mb-9 flex items-center justify-between md:mb-16"><p className="text-[0.64rem] font-semibold tracking-[0.18em] text-accent uppercase">Further stories</p><p className="hidden text-[0.62rem] font-medium tracking-[0.14em] text-muted uppercase md:block">Three collected interiors</p></div>
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 [scrollbar-width:none] md:flex-col md:gap-28 md:overflow-visible md:pb-0">{signatureProjects.map((project, index) => <FeaturedProjectCard key={project.id} project={project} index={index} />)}</div>
      </Container>
      <ViewAllProjectsCta />
    </section>
  )
}
