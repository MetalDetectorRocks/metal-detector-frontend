import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

export type SuccessAlertProps = {
  message: string
}

const ErrorAlert = (props: SuccessAlertProps) => {
  return (
    <Alert severity="success">
      <AlertTitle>
        <strong>Success</strong>
      </AlertTitle>
      {props.message}
    </Alert>
  )
}

export default ErrorAlert
