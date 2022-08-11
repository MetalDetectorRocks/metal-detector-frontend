import { CircularProgress } from '@mui/material'

const LoadingSpinner = () => {
  return <CircularProgress color="inherit" sx={{ position: 'absolute', top: '50%', left: '50%' }} />
}

export default LoadingSpinner
