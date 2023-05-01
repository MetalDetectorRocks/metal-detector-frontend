import { useEffect } from 'react'

export const AdminReleasesDenyListPage = () => {
  useEffect(() => {
    document.title = 'Release Deny List | Metal Detector'
  }, [])
  return (
    <>
      <h1>Releases deny list</h1>
    </>
  )
}

export default AdminReleasesDenyListPage
