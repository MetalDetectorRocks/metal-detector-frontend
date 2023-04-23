import { useEffect } from 'react'

export const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Metal Detector'
  }, [])
  return <h1>PrivacyPolicy</h1>
}
