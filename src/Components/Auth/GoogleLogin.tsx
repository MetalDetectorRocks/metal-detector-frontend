import GoogleIcon from '@mui/icons-material/Google'
import { Button, FormGroup } from '@mui/material'

const GoogleLogin = () => {
  return (
    <FormGroup>
      <Button variant={'outlined'} type={'button'} size={'large'} startIcon={<GoogleIcon color={'secondary'} />}>
        Sign in with Google
      </Button>
    </FormGroup>
  )
}

export default GoogleLogin
