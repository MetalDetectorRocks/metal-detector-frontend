import { useEffect } from 'react'

export const NotificationSettings = () => {
  useEffect(() => {
    document.title = 'Notification Settings | Metal Detector'
  }, [])
  return <h1>Notification Settings</h1>
}
