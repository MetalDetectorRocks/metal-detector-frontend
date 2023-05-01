import { useEffect } from 'react'

export const AdminNotificationsPage = () => {
  useEffect(() => {
    document.title = 'Notifications | Metal Detector'
  }, [])
  return (
    <>
      <h1>Notifications</h1>
    </>
  )
}

export default AdminNotificationsPage
