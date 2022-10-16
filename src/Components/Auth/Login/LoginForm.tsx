import { FormGroup, TextField } from '@mui/material'
import AuthBox from '../AuthBox'
import Box from '@mui/material/Box'
import classes from './LoginForm.module.scss'
import { forgotPassword, signUp } from '../../../Router/InternalRoutes'
import { NavLink } from 'react-router-dom'
import OrDivider from './OrDivider'
import GoogleLogin from './GoogleLogin'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SignInRequest } from '../../../Api/Model/Request/SignInRequest'
import { LoadingButton } from '@mui/lab'
import useSignIn from '../../../Hooks/useSignIn'

const LoginForm = () => {
  const { signInHandler, errorMsg, isLoading } = useSignIn()
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

  return (
    <AuthBox title={'Sign in'} errorMsg={errorMsg}>
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
          />
          <TextField
            type={'password'}
            label={'Password'}
            variant={'outlined'}
            color={'secondary'}
            autoComplete={'off'}
            {...register('password', { required: true })}
            error={!!errors.password}
            helperText={errors.username && 'This field is required'}
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

export default LoginForm
