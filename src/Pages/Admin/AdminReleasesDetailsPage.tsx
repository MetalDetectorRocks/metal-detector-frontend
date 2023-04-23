import { useEffect } from 'react'

export const AdminReleasesDetailsPage = () => {
  useEffect(() => {
    document.title = 'Release Details | Metal Detector'
  }, [])
  return (
    <>
      <h1>Release details</h1>
    </>
  )
}

export default AdminReleasesDetailsPage
