import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
