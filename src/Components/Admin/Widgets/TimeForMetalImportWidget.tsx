import Widget from './Widget'
import { Grid } from '@mui/material'
import NeedlePieChart from '../../Common/Chart/NeedlePieChart'
import WidgetLabeledValue from './WidgetLabeledValue'
import classes from './WidgetLabeledValue.module.scss'

const MetalArchivesImportWidget = () => {
  return (
    <Widget title={'Time for metal'}>
      <Grid container height={'95%'} spacing={0}>
        <Grid item xs={8}>
          <NeedlePieChart value={81} />
        </Grid>
        <Grid item xs={4} className={classes['labeled-value-wrapper']}>
          <WidgetLabeledValue value={'Today'} label={'Last import'} />
          <WidgetLabeledValue value={'2 days ago'} label={'Last successful'} />
        </Grid>
      </Grid>
    </Widget>
  )
}

export default MetalArchivesImportWidget
