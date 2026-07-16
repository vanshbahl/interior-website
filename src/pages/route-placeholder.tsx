import { Container } from '../components/ui/container'
import { Heading } from '../components/ui/heading'
import { Section } from '../components/ui/section'

export function RoutePlaceholder({ title }: { title: string }) {
  return <Section><Container><Heading as="h1" className="text-5xl md:text-7xl">{title}</Heading></Container></Section>
}
