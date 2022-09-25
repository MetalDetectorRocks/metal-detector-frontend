import Box from '@mui/material/Box'
import classes from './OrDivider.module.scss'

const OrDivider = () => {
  return (
    <Box component={'div'} className={classes['divider']}>
      <Box component={'div'} className={classes['divider__line']}></Box>
      <Box component={'div'} className={classes['divider__label']}>
        or
      </Box>
      <Box component={'div'} className={classes['divider__line']}></Box>
    </Box>
  )
}

export default OrDivider
