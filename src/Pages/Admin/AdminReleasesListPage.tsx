import { useEffect } from 'react'
import AdminReleaseList from '../../Components/Admin/Releases/AdminReleaseList'

export const AdminReleasesListPage = () => {
  useEffect(() => {
    document.title = 'Releases List | Metal Detector'
  }, [])
  return (
    <>
      <h1>Releases</h1>
      <AdminReleaseList />
    </>
  )
}

export default AdminReleasesListPage
