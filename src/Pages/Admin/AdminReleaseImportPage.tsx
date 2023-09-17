import { useEffect } from 'react'
import ImportList from '../../Components/Admin/Import/ImportList'

export const AdminReleaseImportPage = () => {
  useEffect(() => {
    document.title = 'Release Imports | Metal Detector'
  }, [])
  return (
    <>
      <h1>Release imports</h1>
      <ImportList />
    </>
  )
}

export default AdminReleaseImportPage
