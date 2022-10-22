import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import { Container } from '@mui/material'

export const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </main>
  )
}
