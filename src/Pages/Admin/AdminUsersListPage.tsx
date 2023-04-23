import { useEffect } from 'react'

export const AdminUsersListPage = () => {
  useEffect(() => {
    document.title = 'Users List | Metal Detector'
  }, [])
  return (
    <>
      <h1>Users</h1>
    </>
  )
}

export default AdminUsersListPage
