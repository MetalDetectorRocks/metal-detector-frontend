import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import { Container } from '@mui/material'
import FooterBar from '../../Components/Footer/FooterBar'
import classes from './MainLayout.module.scss'

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </main>
      <footer className={classes['footer']}>
        <Container maxWidth="lg">
          <FooterBar />
        </Container>
      </footer>
    </>
  )
}
