import AuthBox from '../AuthBox'
import { FormGroup, TextField, Typography } from '@mui/material'
import classes from './ForgotPasswordForm.module.scss'
import { LoadingButton } from '@mui/lab'
import Box from '@mui/material/Box'
import { NavLink } from 'react-router-dom'
import { signIn, signUp } from '../../../Router/InternalRoutes'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ForgotPasswordRequest } from '../../../Api/Model/Auth/ForgotPasswordRequest'
import useForgotPassword from '../../../Hooks/Auth/useForgotPassword'

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ForgotPasswordRequest>({ mode: 'onSubmit' })
  const { forgotPassword, error, isLoading } = useForgotPassword()

  const onSubmit: SubmitHandler<ForgotPasswordRequest> = (request) => {
    forgotPassword(request)
    reset()
  }

  return (
    <AuthBox title={'Forgot Password'} errorMsg={error?.response?.data?.messages.join(' ') || error?.message}>
      <Typography variant="body2" gutterBottom paragraph={true}>
        Please enter the email address or username you used for registration. We will send you an email with a link to
        reset your password.
      </Typography>
      <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
        <FormGroup className={classes['form']}>
          <TextField
            type={'text'}
            label={'Email address or username'}
            variant={'outlined'}
            color={'secondary'}
            autoComplete={'off'}
            autoFocus
            {...register('emailOrUsername', { required: true })}
            error={!!errors.emailOrUsername}
            helperText={errors.emailOrUsername && 'This field is required'}
            disabled={isLoading}
          />
          <LoadingButton variant={'outlined'} type={'submit'} size={'large'} loading={isLoading}>
            Submit
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
    </AuthBox>
  )
}

export default ForgotPasswordForm
