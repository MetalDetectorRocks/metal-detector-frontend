import { useEffect } from 'react'

export const LandingPage = () => {
  useEffect(() => {
    document.title = 'Home | Metal Detector'
  }, [])
  return (
    <>
      <h1>Home</h1>
    </>
  )
}
