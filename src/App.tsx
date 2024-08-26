import { Outlet } from 'react-router-dom'
import { BackButton } from './components/Buttons'
import ScrollToTop from './components/ScrollToTop'
import { ProgressBar } from './components/ProgressBar'

export default function App() {
  return (
    <>
      <ProgressBar />
      <ScrollToTop />
      <BackButton />
      <Outlet />
    </>
  )
}
