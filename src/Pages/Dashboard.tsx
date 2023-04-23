import { useEffect } from 'react'

export const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dashboard | Metal Detector'
  }, [])
  return <h1>Dashboard</h1>
}
