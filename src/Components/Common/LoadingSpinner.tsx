import { CircularProgress } from '@mui/material'
import classes from './LoadingSpinner.module.scss'

const LoadingSpinner = () => {
  return <CircularProgress color="inherit" className={classes['loading-spinner']} />
}

export default LoadingSpinner
