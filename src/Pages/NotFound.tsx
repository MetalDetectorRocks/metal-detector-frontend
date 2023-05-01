import { useEffect } from 'react'

export const NotFound = () => {
  useEffect(() => {
    document.title = 'Not Found | Metal Detector'
  }, [])
  return <h1>The requested page was not found.</h1>
}
