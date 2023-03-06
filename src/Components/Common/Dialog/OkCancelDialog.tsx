import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from '@mui/material'

export type OkCancelDialogProps = {
  open: boolean
  title: string
  content: string
  onOk: () => void
  onCancel: () => void
  onClose: () => void
  okLabel?: string
  okColor?: 'primary' | 'inherit' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined
  cancelLabel?: string
}

const OkCancelDialog = (props: OkCancelDialogProps) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog
      onClose={props.onClose}
      open={props.open}
      fullScreen={fullScreen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
      <hr />
      <DialogContent>
        <DialogContentText id="alert-dialog-description" color={'secondary'}>
          {props.content}
        </DialogContentText>
      </DialogContent>
      <hr />
      <DialogActions>
        <Button onClick={props.onCancel} variant="outlined" type="submit" size="large">
          {props.cancelLabel ?? 'Cancel'}
        </Button>
        <Button
          onClick={props.onOk}
          variant="outlined"
          type="submit"
          size="large"
          color={props.okColor ?? 'primary'}
          autoFocus
        >
          {props.okLabel ?? 'Ok'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default OkCancelDialog
