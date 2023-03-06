import classes from './AccountDetails.module.scss'
import { Alert, Box, FormGroup } from '@mui/material'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { UpdateEmailRequest } from '../../Api/Model/Auth/UpdateEmailRequest'
import TextField from '../Common/Form/TextField'
import { isValidEmail } from '../../Utils/Validators'
import { LoadingButton } from '@mui/lab'
import useUpdateEmailAddress from '../../Hooks/Auth/useUpdateEmailAddress'
import useFetchCurrentUserDetails from '../../Hooks/Auth/useFetchCurrentUserDetails'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const ChangeEmailAddress = () => {
  const { userDetails } = useFetchCurrentUserDetails()
  const { updateEmailAddress, isLoading, errorMsg, isSuccess } = useUpdateEmailAddress()
  const methods = useForm<UpdateEmailRequest>({
    mode: 'onSubmit',
  })
  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = methods

  const onSubmit: SubmitHandler<UpdateEmailRequest> = (request) => {
    updateEmailAddress(request)
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('Email address updated!')
    }
  }, [isSuccess])

  useEffect(() => {
    if (userDetails?.email) {
      setValue('email', userDetails.email)
    }
  }, [userDetails])

  return (
    <Box className={classes['section']}>
      <h1>Change email address</h1>
      <hr />
      {errorMsg && (
        <Alert severity="error" variant={'filled'} className={classes['section__alert']}>
          Your email address could not be updated. Reason: {errorMsg}
        </Alert>
      )}
      <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
        <FormGroup className={classes['section__form']}>
          <FormProvider {...methods}>
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
              InputLabelProps={{
                shrink: true,
              }}
            />
            <LoadingButton
              color="success"
              variant="outlined"
              type="submit"
              size="large"
              loading={isLoading}
              className={classes['section__submit']}
            >
              Update email address
            </LoadingButton>
          </FormProvider>
        </FormGroup>
      </Box>
    </Box>
  )
}

export default ChangeEmailAddress
