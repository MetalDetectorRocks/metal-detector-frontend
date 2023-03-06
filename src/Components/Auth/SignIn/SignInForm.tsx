import { FormGroup, Typography } from '@mui/material'
import AuthBox from '../AuthBox'
import Box from '@mui/material/Box'
import classes from './SignInForm.module.scss'
import { forgotPassword, signUp } from '../../../Router/InternalRoutes'
import { NavLink, useSearchParams } from 'react-router-dom'
import OrDivider from '../OrDivider'
import GoogleLogin from '../GoogleLogin'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { SignInRequest } from '../../../Api/Model/Auth/SignInRequest'
import { LoadingButton } from '@mui/lab'
import useSignIn from '../../../Hooks/Auth/useSignIn'
import { useEffect, useRef } from 'react'
import useVerifySignUp from '../../../Hooks/Auth/useVerifySignUp'
import TextField from '../../Common/Form/TextField'
import PasswordField from '../../Common/Form/PasswordField'

const SignInForm = () => {
  const [searchParams] = useSearchParams()
  const passwordInput = useRef<HTMLInputElement>(null)
  const { signInHandler, errorMsg: signInErrorMsg, isLoading } = useSignIn()
  const {
    verify,
    successMsg: verificationSuccessMsg,
    errorMsg: verificationErrorMsg,
    username: verifiedUsername,
  } = useVerifySignUp()
  const methods = useForm<SignInRequest>({ mode: 'onSubmit' })
  const {
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = methods

  const onSubmit: SubmitHandler<SignInRequest> = (request) => {
    signInHandler(request)
    reset()
  }

  useEffect(() => {
    const token = searchParams.get('token')
    if (token) {
      verify({ token })
    }
  }, [])

  useEffect(() => {
    if (verifiedUsername) {
      setValue('username', verifiedUsername)
      passwordInput.current!.focus()
    }
  }, [verifiedUsername])

  return (
    <AuthBox title={'Sign in'} errorMsg={signInErrorMsg || verificationErrorMsg} successMsg={verificationSuccessMsg}>
      <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
        <FormGroup className={classes['form']}>
          <FormProvider {...methods}>
            <TextField
              type={'text'}
              label={'Username or email address'}
              autoFocus
              name={'username'}
              options={{ required: true }}
              error={!!errors.username}
              helperText={errors.username && 'This field is required'}
              disabled={isLoading}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <PasswordField
              label={'Password'}
              inputRef={passwordInput}
              name={'password'}
              options={{ required: true }}
              error={!!errors.password}
              helperText={errors.password && 'This field is required'}
              disabled={isLoading}
            />
            <LoadingButton variant={'outlined'} type={'submit'} size={'large'} loading={isLoading}>
              Sign in
            </LoadingButton>
          </FormProvider>
        </FormGroup>
        <OrDivider />
        <GoogleLogin />
        <Box component={'div'} className={classes['form__footer']}>
          <Typography variant="body1">
            New user? <NavLink to={signUp.path}>Join now!</NavLink>
          </Typography>
          <Typography variant="body1">
            <NavLink to={forgotPassword.path}>{forgotPassword.name}?</NavLink>
          </Typography>
        </Box>
      </Box>
    </AuthBox>
  )
}

export default SignInForm
