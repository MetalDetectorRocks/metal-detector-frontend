import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormGroup,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useEffect } from 'react'
import classes from '../../AccountDetails/AccountDetails.module.scss'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import TextField from '../../Common/Form/TextField'
import { isValidEmail } from '@/Utils/Validators'
import useCreateAdministrator from '../../../Hooks/Auth/useCreateAdministrator'
import { CreateAdministratorRequest } from '@/Api/Model/Jobs/CreateAdministratorRequest'
import { toast } from 'react-toastify'
import PasswordField from '../../Common/Form/PasswordField'
import { LoadingButton } from '@mui/lab'

export type CreateAdministratorDialogProps = {
  isOpen: boolean
  close: () => void
}

const CreateAdministratorDialog = (props: CreateAdministratorDialogProps) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const { createAdministrator, isLoading, errorMsg, isSuccess } = useCreateAdministrator()
  const methods = useForm<CreateAdministratorRequest>({
    mode: 'onSubmit',
  })
  const {
    handleSubmit,
    formState: { errors },
  } = methods

  useEffect(() => {
    if (isSuccess) {
      toast.success('Administrator created!')
    }
    if (errorMsg) {
      toast.error(`Administrator could not be created. Reason: ${errorMsg}`)
    }
  }, [isSuccess])

  const onSubmit: SubmitHandler<CreateAdministratorRequest> = (request) => {
    createAdministrator(request)
    props.close()
  }

  return (
    <>
      <Dialog
        onClose={props.close}
        open={props.isOpen}
        fullScreen={fullScreen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Create new Administrator'}</DialogTitle>
        <hr />
        <DialogContent>
          <FormGroup className={classes['section__form']}>
            <FormProvider {...methods}>
              <TextField
                type={'text'}
                label={'Username'}
                name={'username'}
                options={{ required: true }}
                error={!!errors.username}
                helperText={
                  errors.username && errors.username.type === 'required'
                    ? 'This field is required'
                    : errors.username && errors.username.type === 'validate' && 'Please enter a username'
                }
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
                  'Make sure the password has at least 8 characters.'
                }
                disabled={isLoading}
              />
            </FormProvider>
          </FormGroup>
        </DialogContent>
        <hr />
        <DialogActions>
          <Button onClick={props.close} variant="outlined" type="submit" size="large">
            {'Cancel'}
          </Button>
          <LoadingButton
            onClick={handleSubmit(onSubmit)}
            variant="outlined"
            type="submit"
            size="large"
            color={'success'}
            autoFocus
          >
            {'Create'}
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default CreateAdministratorDialog
