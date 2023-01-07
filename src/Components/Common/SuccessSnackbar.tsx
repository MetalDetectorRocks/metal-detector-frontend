import { Alert, Slide, Snackbar } from '@mui/material'
import { SyntheticEvent, useState } from 'react'

export type SuccessSnackbarProps = {
  message: string
  open: boolean
}

const SuccessSnackbar = (props: SuccessSnackbarProps) => {
  const [open, setOpen] = useState<boolean>(props.open)
  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      TransitionComponent={Slide}
    >
      <Alert onClose={handleClose} severity={'success'} sx={{ width: '100%' }}>
        {props.message}
      </Alert>
    </Snackbar>
  )
}

export default SuccessSnackbar
