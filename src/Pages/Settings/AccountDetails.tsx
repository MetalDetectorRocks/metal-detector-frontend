import ChangeEmailAddress from '../../Components/AccountDetails/ChangeEmailAddress'
import ChangePassword from '../../Components/AccountDetails/ChangePassword'
import DeleteAccount from '../../Components/AccountDetails/DeleteAccount'

export const AccountDetails = () => {
  return (
    <>
      <ChangeEmailAddress />
      <ChangePassword />
      <DeleteAccount />
    </>
  )
}
