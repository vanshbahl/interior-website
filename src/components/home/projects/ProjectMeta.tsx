import type { FeaturedProject } from '../../../data/featuredProjects'

export function ProjectMeta({ project, detailed = false }: { project: FeaturedProject; detailed?: boolean }) {
  if (!detailed) return <div className="mt-3 flex items-center justify-between gap-4 text-[0.62rem] font-medium tracking-[0.14em] text-current/65 uppercase"><span>{project.category}</span><span>{project.location}</span></div>

  return (
    <dl className="grid grid-cols-3 gap-4 border-t border-white/25 pt-5 text-white">
      {[['Location', project.location], ['Area', project.area], ['Year', project.year]].map(([label, value]) => <div key={label}><dt className="text-[0.58rem] font-medium tracking-[0.16em] text-white/55 uppercase">{label}</dt><dd className="mt-1 text-xs leading-5 text-white/90">{value}</dd></div>)}
    </dl>
  )
}
