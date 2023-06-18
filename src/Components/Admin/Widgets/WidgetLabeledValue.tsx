import classes from './WidgetLabeledValue.module.scss'
import Box from '@mui/material/Box'

export type WidgetLabeledValueProps = {
  value: string
  label: string
}
const WidgetLabeledValue = (props: WidgetLabeledValueProps) => {
  return (
    <Box className={classes['labeled-value']}>
      <h3 className={classes['labeled-value__value']}>{props.value}</h3>
      <h4 className={classes['labeled-value__label']}>{props.label}</h4>
    </Box>
  )
}

export default WidgetLabeledValue
