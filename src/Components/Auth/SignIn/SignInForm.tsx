import { FormGroup, TextField } from '@mui/material'
import AuthBox from '../AuthBox'
import Box from '@mui/material/Box'
import classes from './SignInForm.module.scss'
import { forgotPassword, signUp } from '../../../Router/InternalRoutes'
import { NavLink, useSearchParams } from 'react-router-dom'
import OrDivider from '../OrDivider'
import GoogleLogin from '../GoogleLogin'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SignInRequest } from '../../../Api/Model/Auth/SignInRequest'
import { LoadingButton } from '@mui/lab'
import useSignIn from '../../../Hooks/Auth/useSignIn'
import { useEffect, useRef } from 'react'
import useVerifySignUp from '../../../Hooks/Auth/useVerifySignUp'

const SignInForm = () => {
  const [searchParams] = useSearchParams()
  const passwordInput = useRef<HTMLInputElement>(null)
  const { signInHandler, errorMsg: signInErrorMsg, isLoading } = useSignIn()
  const { verify, successMsg: verificationSuccessMsg, errorMsg: verificationErrorMsg, username } = useVerifySignUp()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInRequest>({ mode: 'onSubmit' })

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
    if (username) {
      passwordInput.current?.focus()
    }
  }, [username])

  return (
    <AuthBox title={'Sign in'} errorMsg={signInErrorMsg || verificationErrorMsg} successMsg={verificationSuccessMsg}>
      <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
        <FormGroup className={classes['form']}>
          <TextField
            type={'text'}
            label={'Username or email address'}
            variant={'outlined'}
            color={'secondary'}
            autoComplete={'off'}
            autoFocus
            {...register('username', { required: true })}
            error={!!errors.username}
            helperText={errors.username && 'This field is required'}
            disabled={isLoading}
            value={username}
          />
          <TextField
            type={'password'}
            label={'Password'}
            variant={'outlined'}
            color={'secondary'}
            autoComplete={'off'}
            inputRef={passwordInput}
            {...register('password', { required: true })}
            error={!!errors.password}
            helperText={errors.username && 'This field is required'}
            disabled={isLoading}
          />
          <LoadingButton variant={'outlined'} type={'submit'} size={'large'} loading={isLoading}>
            Sign in
          </LoadingButton>
        </FormGroup>
        <OrDivider />
        <GoogleLogin />
        <Box component={'div'} className={classes['form__footer']}>
          <p>
            New user? <NavLink to={signUp.path}>Join now!</NavLink>
          </p>
          <p>
            <NavLink to={forgotPassword.path}>{forgotPassword.name}?</NavLink>
          </p>
        </Box>
      </Box>
    </AuthBox>
  )
}

export default SignInForm
