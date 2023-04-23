import { useEffect } from 'react'

export const Imprint = () => {
  useEffect(() => {
    document.title = 'Imprint | Metal Detector'
  }, [])
  return <h1>Imprint</h1>
}
