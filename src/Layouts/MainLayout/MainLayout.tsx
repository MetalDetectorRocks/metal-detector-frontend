import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import { Container } from '@mui/material'
import FooterBar from '../../Components/Footer/FooterBar'

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
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
