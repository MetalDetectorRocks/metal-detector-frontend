import { useEffect } from 'react'

export const Unauthorized = () => {
  useEffect(() => {
    document.title = 'Unauthorized | Metal Detector'
  }, [])
  return <h1>You are not allowed to access this page.</h1>
}
