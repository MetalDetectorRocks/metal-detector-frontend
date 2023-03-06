import { Alert, Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import classes from './AccountDetails.module.scss'
import useDeleteAccount from '../../Hooks/Auth/useDeleteAccount'
import { LoadingButton } from '@mui/lab'
import OkCancelDialog from '../Common/Dialog/OkCancelDialog'
import { useState } from 'react'

const DeleteAccount = () => {
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false)
  const { deleteAccount, isLoading, errorMsg } = useDeleteAccount()

  return (
    <Box className={classes['section']}>
      <h1>Delete account</h1>
      <hr />
      <p>Let your account go to hell!</p>
      {errorMsg && (
        <Alert severity="error" variant={'filled'} className={classes['section__alert']}>
          Your account could not be deleted. Reason: {errorMsg}
        </Alert>
      )}
      <LoadingButton
        color="error"
        variant="outlined"
        type="submit"
        size="large"
        loading={isLoading}
        startIcon={<DeleteIcon color={'error'} />}
        onClick={() => setOpenConfirmDialog(true)}
        className={classes['section__submit']}
      >
        Delete account
      </LoadingButton>
      <OkCancelDialog
        open={openConfirmDialog}
        title={'Delete Account'}
        content={'Dou you really want to delete your account? All data related to your account will be lost.'}
        onOk={() => deleteAccount()}
        onCancel={() => setOpenConfirmDialog(false)}
        onClose={() => setOpenConfirmDialog(false)}
        okLabel={'Delete'}
        okColor={'error'}
      />
    </Box>
  )
}

export default DeleteAccount
