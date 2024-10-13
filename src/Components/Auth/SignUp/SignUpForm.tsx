import AuthBox from '../AuthBox'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import { FormGroup, Typography } from '@mui/material'
import classes from './SignUpForm.module.scss'
import { LoadingButton } from '@mui/lab'
import { SignUpRequest } from '@/Api/Model/Auth/SignUpRequest'
import useSignUp from '../../../Hooks/Auth/useSignUp'
import OrDivider from '../OrDivider'
import GoogleLogin from '../GoogleLogin'
import { NavLink } from 'react-router-dom'
import { forgotPassword, signIn } from '@/Router/InternalRoutes'
import { useEffect, useState } from 'react'
import { isValidEmail } from '@/Utils/Validators'
import TextField from '../../Common/Form/TextField'
import PasswordField from '../../Common/Form/PasswordField'

const SignUpForm = () => {
  const [successMsg, setSuccessMsg] = useState('')
  const { signUp, errorMsg, isLoading, isSuccess } = useSignUp()
  const methods = useForm<SignUpRequest>({ mode: 'onSubmit' })
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods

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

  return (
    <AuthBox title={'Sign up'} errorMsg={errorMsg} successMsg={successMsg}>
      <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
        <FormGroup className={classes['form']}>
          <FormProvider {...methods}>
            <TextField
              type={'text'}
              label={'Username'}
              autoFocus
              name={'username'}
              options={{ required: true }}
              error={!!errors.username}
              helperText={errors.username && 'This field is required'}
              disabled={isLoading}
            />
            <TextField
              type={'text'}
              label={'Email address'}
              name={'email'}
              options={{ required: true, validate: isValidEmail }}
              error={!!errors.email}
              helperText={
                errors.email && errors.email.type === 'required'
                  ? 'This field is required'
                  : errors.email && errors.email.type === 'validate' && 'Please enter a valid email address'
              }
              disabled={isLoading}
            />
            <PasswordField
              label={'Password'}
              name={'plainPassword'}
              options={{ required: true, minLength: 8 }}
              error={!!errors.plainPassword}
              helperText={
                (errors.plainPassword && 'The password needs at least 8 characters') ||
                'Make sure your password has at least 8 characters.'
              }
              disabled={isLoading}
            />
            <LoadingButton variant={'outlined'} type={'submit'} size={'large'} loading={isLoading}>
              Join Metal Detector
            </LoadingButton>
          </FormProvider>
        </FormGroup>
        <OrDivider />
        <GoogleLogin />
        <Box component={'div'} className={classes['form__footer']}>
          <Typography variant="body1">
            Already signed up? <NavLink to={signIn.path}>Sign in!</NavLink>
          </Typography>
          <Typography variant="body1">
            <NavLink to={forgotPassword.path}>{forgotPassword.name}?</NavLink>
          </Typography>
        </Box>
      </Box>
    </AuthBox>
  )
}

export default SignUpForm
