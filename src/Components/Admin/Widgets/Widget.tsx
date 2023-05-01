import { Paper } from '@mui/material'
import classes from './Widget.module.scss'
import { ReactNode } from 'react'

export type WidgetProps = {
  title: string
  children: ReactNode
}

const Widget = (props: WidgetProps) => {
  return (
    <Paper className={classes['widget']}>
      <h2 className={classes['widget__title']}>{props.title}</h2>
      {props.children}
    </Paper>
  )
}

export default Widget
