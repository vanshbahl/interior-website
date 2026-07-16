import { Outlet } from 'react-router-dom'
import { Footer } from './footer'
import { Navbar } from './navbar'
import { ScrollToTop } from './scroll-to-top'

export function SiteLayout() {
  return <div className="flex min-h-svh flex-col"><ScrollToTop /><Navbar /><main className="flex-1"><Outlet /></main><Footer /></div>
}
