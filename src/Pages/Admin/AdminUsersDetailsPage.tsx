import { useEffect } from 'react'

export const AdminUsersDetailsPage = () => {
  useEffect(() => {
    document.title = 'User Details | Metal Detector'
  }, [])
  return (
    <>
      <h1>User details</h1>
    </>
  )
}

export default AdminUsersDetailsPage
