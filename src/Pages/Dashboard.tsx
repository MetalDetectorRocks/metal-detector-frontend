import { useEffect } from 'react'
import DashboardArea from '@/Components/Dashboard/DashboardArea'

export const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dashboard | Metal Detector'
  }, [])
  return (
    <>
      <h1>Dashboard</h1>
      <DashboardArea />
    </>
  )
}
