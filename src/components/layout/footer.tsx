import { Container } from '../ui/container'

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex items-center justify-between text-[0.65rem] font-medium tracking-[0.14em] text-muted uppercase">
        <span> Developed by Vector Studio.</span><span>Concept site</span>
      </Container>
    </footer>
  )
}
