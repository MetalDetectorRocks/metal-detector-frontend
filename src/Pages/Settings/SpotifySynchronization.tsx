import { useEffect } from 'react'
import SpotifySynchronizationArea from '../../Components/SpotifySynchronization/SpotifySynchronizationArea'

export const SpotifySynchronization = () => {
  useEffect(() => {
    document.title = 'Spotify Synchronization | Metal Detector'
  }, [])
  return (
    <>
      <h1>Spotify Synchronization</h1>
      <SpotifySynchronizationArea />
    </>
  )
}
