import ArtistGrid from '../Components/Grid/ArtistGrid'
import { useEffect } from 'react'

export const MyArtists = () => {
  useEffect(() => {
    document.title = 'My Artists | Metal Detector'
  }, [])
  return (
    <>
      <h1>My Artists</h1>
      <ArtistGrid />
    </>
  )
}
