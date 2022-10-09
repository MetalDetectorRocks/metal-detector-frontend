import { CircularProgress } from '@mui/material'
import classes from '../Common/LoadingSpinner.module.css'

const LoadingSpinner = () => {
  return <CircularProgress color="inherit" className={classes['loading-spinner']} />
}

export default LoadingSpinner
