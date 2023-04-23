import { useEffect } from 'react'

export const SpotifySynchronization = () => {
  useEffect(() => {
    document.title = 'Spotify Synchronization | Metal Detector'
  }, [])
  return <h1>Spotify Synchronization</h1>
}
