import { Alert, Box, FormGroup } from '@mui/material'
import classes from './AccountDetails.module.scss'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { LoadingButton } from '@mui/lab'
import PasswordField from '../Common/Form/PasswordField'
import { UpdatePasswordRequest } from '../../Api/Model/Auth/UpdatePasswordRequest'
import useUpdatePassword from '../../Hooks/Auth/useUpdatePassword'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const ChangePassword = () => {
  const { updatePassword, isLoading, errorMsg, isSuccess } = useUpdatePassword()
  const methods = useForm<UpdatePasswordRequest>({ mode: 'onSubmit' })
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods

  const onSubmit: SubmitHandler<UpdatePasswordRequest> = (request) => {
    updatePassword(request)
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('Password updated!')
      reset()
    }
  }, [isSuccess])

  return (
    <Box className={classes['section']}>
      <h1>Change password</h1>
      <hr />
      {errorMsg && (
        <Alert severity="error" variant={'filled'} className={classes['section__alert']}>
          Your password could not be changed. Reason: {errorMsg}
        </Alert>
      )}
      <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
        <FormGroup className={classes['section__form']}>
          <FormProvider {...methods}>
            <PasswordField
              label={'Old password'}
              name={'oldPlainPassword'}
              options={{ required: true, minLength: 8 }}
              error={!!errors.oldPlainPassword}
              helperText={errors.oldPlainPassword && 'The password needs at least 8 characters'}
              disabled={isLoading}
            />
            <PasswordField
              label={'New password'}
              name={'newPlainPassword'}
              options={{ required: true, minLength: 8 }}
              error={!!errors.newPlainPassword}
              helperText={
                (errors.newPlainPassword && 'The password needs at least 8 characters') ||
                'Make sure your new password has at least 8 characters.'
              }
              disabled={isLoading}
            />
            <LoadingButton
              color="success"
              variant="outlined"
              type="submit"
              size="large"
              loading={isLoading}
              className={classes['section__submit']}
            >
              Update password
            </LoadingButton>
          </FormProvider>
        </FormGroup>
      </Box>
    </Box>
  )
}

export default ChangePassword
