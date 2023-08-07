import { useEffect } from 'react'
import UsersList from '../../Components/Admin/User/UsersList'

export const AdminUsersListPage = () => {
  useEffect(() => {
    document.title = 'Users List | Metal Detector'
  }, [])
  return (
    <>
      <h1>Users</h1>
      <UsersList />
    </>
  )
}

export default AdminUsersListPage
