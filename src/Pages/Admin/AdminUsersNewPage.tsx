import { useEffect } from 'react'

export const AdminUsersNewPage = () => {
  useEffect(() => {
    document.title = 'New User | Metal Detector'
  }, [])
  return (
    <>
      <h1>New user</h1>
    </>
  )
}

export default AdminUsersNewPage
