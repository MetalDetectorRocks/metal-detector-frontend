import classes from './Heading.module.scss'
import Box from '@mui/material/Box'

export type HeadingProps = {
  headingTitle: string
}

const Heading = (props: HeadingProps) => {
  return (
    <Box className={classes['heading']}>
      <h2 className={classes['heading__title']}>{props.headingTitle}</h2>
      <div className={classes['heading__separator']}></div>
    </Box>
  )
}

export default Heading
