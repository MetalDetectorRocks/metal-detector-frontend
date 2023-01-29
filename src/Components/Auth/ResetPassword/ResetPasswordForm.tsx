import AuthBox from '../AuthBox'
import { FormGroup, Stack, TextField, Typography } from '@mui/material'
import classes from './ResetPasswordForm.module.scss'
import IconButton from '@mui/material/IconButton'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import Box from '@mui/material/Box'
import { NavLink, useSearchParams } from 'react-router-dom'
import { signIn, signUp } from '../../../Router/InternalRoutes'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ResetPasswordRequest } from '../../../Api/Model/Auth/ResetPasswordRequest'
import useResetPassword from '../../../Hooks/Auth/useResetPassword'

const ResetPasswordForm = () => {
  const [searchParams] = useSearchParams()
  const [errorMsg, setErrorMsg] = useState('')
  const [token, setToken] = useState<string | null>('')
  const [showPassword, setShowPassword] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const { resetPassword, isLoading, errorMsg: resetPasswordErrorMsg, isSuccess } = useResetPassword()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResetPasswordRequest>({ mode: 'onSubmit' })

  const handleClickShowPassword = () => setShowPassword((show) => !show)

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
              <Stack direction="row" justifyContent={'start'} className={classes['password']}>
                <TextField
                  type={showPassword ? 'text' : 'password'}
                  label={'Password'}
                  variant={'outlined'}
                  color={'secondary'}
                  autoComplete={'off'}
                  {...register('newPlainPassword', { required: true, minLength: 8 })}
                  error={!!errors.newPlainPassword}
                  helperText={
                    (errors.newPlainPassword && 'The password needs at least 8 characters') ||
                    'Make sure your password has at least 8 characters.'
                  }
                  disabled={isLoading}
                  className={classes['password__field']}
                />
                <IconButton
                  onClick={handleClickShowPassword}
                  aria-label="toggle password visibility"
                  edge="end"
                  className={classes['password__toggle']}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </Stack>
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
