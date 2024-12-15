import AuthBox from '../AuthBox'
import { FormGroup, Typography } from '@mui/material'
import classes from './ResetPasswordForm.module.scss'
import { LoadingButton } from '@mui/lab'
import Box from '@mui/material/Box'
import { NavLink, useSearchParams } from 'react-router'
import { signIn, signUp } from '@/Router/InternalRoutes'
import { useEffect, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { ResetPasswordRequest } from '@/Api/Model/Auth/ResetPasswordRequest'
import useResetPassword from '../../../Hooks/Auth/useResetPassword'
import PasswordField from '../../Common/Form/PasswordField'

const ResetPasswordForm = () => {
  const [searchParams] = useSearchParams()
  const [errorMsg, setErrorMsg] = useState('')
  const [token, setToken] = useState<string | null>('')
  const [successMsg, setSuccessMsg] = useState('')
  const { resetPassword, isLoading, errorMsg: resetPasswordErrorMsg, isSuccess } = useResetPassword()
  const methods = useForm<ResetPasswordRequest>({ mode: 'onSubmit' })
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods

  useEffect(() => {
    const tokenParam = searchParams.get('token')
    if (!tokenParam) {
      setErrorMsg('You must first request the resetting of your password.')
    }
    setToken(tokenParam)
  }, [])

  useEffect(() => {
    if (isSuccess) {
      setSuccessMsg('You can now sign in with your new password.')
    }
  }, [isSuccess])

  const onSubmit: SubmitHandler<ResetPasswordRequest> = (request) => {
    request.token = token!
    resetPassword(request)
    reset()
  }

  return (
    <AuthBox title={'Reset Password'} errorMsg={errorMsg || resetPasswordErrorMsg} successMsg={successMsg}>
      {token && (
        <>
          <Typography variant="body2" gutterBottom paragraph={true}>
            You can now choose a new password.
          </Typography>
          <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
            <FormGroup className={classes['form']}>
              <FormProvider {...methods}>
                <PasswordField
                  label={'Password'}
                  name={'newPlainPassword'}
                  options={{ required: true, minLength: 8 }}
                  error={!!errors.newPlainPassword}
                  helperText={
                    (errors.newPlainPassword && 'The password needs at least 8 characters') ||
                    'Make sure your password has at least 8 characters.'
                  }
                  disabled={isLoading}
                />
              </FormProvider>
              <LoadingButton variant={'outlined'} type={'submit'} size={'large'} loading={isLoading}>
                Set new password
              </LoadingButton>
            </FormGroup>
            <Box component={'div'} className={classes['form__footer']}>
              <Typography variant="body1">
                New user? <NavLink to={signUp.path}>Join now!</NavLink>
              </Typography>
              <Typography variant="body1">
                Already signed up? <NavLink to={signIn.path}>Sign in!</NavLink>
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </AuthBox>
  )
}

export default ResetPasswordForm
