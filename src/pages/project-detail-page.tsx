import { Navigate, useParams } from 'react-router-dom'

import { ProjectCaseStudy } from '../components/projects/ProjectCaseStudy'
import { getProject } from '../data/projects'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined
  return project ? <ProjectCaseStudy project={project} /> : <Navigate replace to="/projects" />
}
