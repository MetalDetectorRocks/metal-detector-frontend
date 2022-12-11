import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

export type ErrorAlertProps = {
  message?: string
}

const ErrorAlert = (props: ErrorAlertProps) => {
  return (
    <Alert severity="error">
      <AlertTitle>
        <strong>Error</strong>
      </AlertTitle>
      {props.message || 'An unexpected error has occurred.'}
    </Alert>
  )
}

export default ErrorAlert
