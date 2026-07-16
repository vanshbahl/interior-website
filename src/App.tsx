import { Navigate, Route, Routes } from 'react-router-dom'

import { SiteLayout } from './components/layout/site-layout'
import { ContactPage } from './pages/contact-page'
import { HomePage } from './pages/home-page'
import { ProjectDetailPage } from './pages/project-detail-page'
import { ProjectsPage } from './pages/projects-page'
import { StudioPage } from './pages/studio-page'

export function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:slug" element={<ProjectDetailPage />} />
        <Route path="studio" element={<StudioPage />} />
        <Route path="about" element={<Navigate replace to="/studio" />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
