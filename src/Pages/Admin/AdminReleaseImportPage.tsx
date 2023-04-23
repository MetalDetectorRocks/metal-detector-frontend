import { useEffect } from 'react'

export const AdminReleaseImportPage = () => {
  useEffect(() => {
    document.title = 'Release Imports | Metal Detector'
  }, [])
  return (
    <>
      <h1>Release import</h1>
    </>
  )
}

export default AdminReleaseImportPage
