import ChangeEmailAddress from '../../Components/AccountDetails/ChangeEmailAddress'
import ChangePassword from '../../Components/AccountDetails/ChangePassword'
import DeleteAccount from '../../Components/AccountDetails/DeleteAccount'
import { useEffect } from 'react'

export const AccountDetails = () => {
  useEffect(() => {
    document.title = 'Account Details | Metal Detector'
  }, [])
  return (
    <>
      <ChangeEmailAddress />
      <ChangePassword />
      <DeleteAccount />
    </>
  )
}
