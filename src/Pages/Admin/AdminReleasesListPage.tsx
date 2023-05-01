import { useEffect } from 'react'

export const AdminReleasesListPage = () => {
  useEffect(() => {
    document.title = 'Releases List | Metal Detector'
  }, [])
  return (
    <>
      <h1>Releases</h1>
    </>
  )
}

export default AdminReleasesListPage
