import AuthBox from '../AuthBox'
import { SubmitHandler, useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import { FormGroup, Stack, TextField } from '@mui/material'
import classes from './SignUpForm.module.scss'
import { LoadingButton } from '@mui/lab'
import { SignUpRequest } from '../../../Api/Model/Auth/SignUpRequest'
import useSignUp from '../../../Hooks/Auth/useSignUp'
import OrDivider from '../OrDivider'
import GoogleLogin from '../GoogleLogin'
import { NavLink } from 'react-router-dom'
import { forgotPassword, signIn } from '../../../Router/InternalRoutes'
import IconButton from '@mui/material/IconButton'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { isValidEmail } from '../../../Utils/Validators'

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const { signUp, error, isLoading, isSuccess } = useSignUp()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpRequest>({ mode: 'onSubmit' })

  const onSubmit: SubmitHandler<SignUpRequest> = (request) => {
    signUp(request)
    reset()
  }

  useEffect(() => {
    if (isSuccess) {
      setSuccessMsg(
        'Thank you for your registration. You will shortly receive an email ' +
          'with a verification link. After confirmation you can sign in.',
      )
    }
  }, [isSuccess])

  useEffect(() => {
    setErrorMsg(error?.response?.data?.messages.join(' ') || error?.message)
  }, [error])

  return (
    <AuthBox title={'Sign up'} errorMsg={errorMsg} successMsg={successMsg}>
      <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
        <FormGroup className={classes['form']}>
          <TextField
            type={'text'}
            label={'Username'}
            variant={'outlined'}
            color={'secondary'}
            autoComplete={'off'}
            autoFocus
            {...register('username', { required: true })}
            error={!!errors.username}
            helperText={errors.username && 'This field is required'}
            disabled={isLoading}
          />
          <TextField
            type={'text'}
            label={'Email address'}
            variant={'outlined'}
            color={'secondary'}
            autoComplete={'off'}
            {...register('email', { required: true, validate: isValidEmail })}
            error={!!errors.email}
            helperText={
              errors.email && errors.email.type === 'required'
                ? 'This field is required'
                : errors.email && errors.email.type === 'validate' && 'Please enter a valid email address'
            }
            disabled={isLoading}
          />
          <Stack direction="row" justifyContent={'start'} className={classes['password']}>
            <TextField
              type={showPassword ? 'text' : 'password'}
              label={'Password'}
              variant={'outlined'}
              color={'secondary'}
              autoComplete={'off'}
              {...register('plainPassword', { required: true, minLength: 8 })}
              error={!!errors.plainPassword}
              helperText={
                (errors.plainPassword && 'The password needs at least 8 characters') ||
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
            Join Metal Detector
          </LoadingButton>
        </FormGroup>
        <OrDivider />
        <GoogleLogin />
        <Box component={'div'} className={classes['form__footer']}>
          <p>
            Already signed up? <NavLink to={signIn.path}>Sign in!</NavLink>
          </p>
          <p>
            <NavLink to={forgotPassword.path}>{forgotPassword.name}?</NavLink>
          </p>
        </Box>
      </Box>
    </AuthBox>
  )
}

export default SignUpForm
