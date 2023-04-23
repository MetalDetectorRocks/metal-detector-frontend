import { useEffect } from 'react'

export const AdminDashboardPage = () => {
  useEffect(() => {
    document.title = 'Admin Dashboard | Metal Detector'
  }, [])
  return (
    <>
      <h1>Dashboard</h1>
    </>
  )
}
