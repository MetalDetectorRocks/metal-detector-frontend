import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import { Container } from '@mui/material'
import FooterBar from '../../Components/Footer/FooterBar'
import Hero from '../../Components/Home/Hero/Hero'
import { useEffect, useState } from 'react'
import { dashboard, home } from '../../Router/InternalRoutes'

export const MainLayout = () => {
  const location = useLocation()
  const [showHero, setShowHero] = useState(false)

  useEffect(() => {
    setShowHero([home.path, dashboard.path].includes(location.pathname))
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <main>
        {showHero && <Hero />}
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </main>
      <footer>
        <Container maxWidth="lg">
          <FooterBar />
        </Container>
      </footer>
    </>
  )
}
