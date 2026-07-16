import { Hero } from '../components/home/Hero/Hero'
import { ClientExperience } from '../components/home/client-experience/ClientExperience'
import { StudioPhilosophy } from '../components/home/philosophy/StudioPhilosophy'
import { OurProcess } from '../components/home/process/OurProcess'
import { FeaturedProjects } from '../components/home/projects/FeaturedProjects'
import { Services } from '../components/home/services/Services'

export function HomePage() {
  return <><Hero /><FeaturedProjects /><StudioPhilosophy /><OurProcess /><Services /><ClientExperience /></>
}
