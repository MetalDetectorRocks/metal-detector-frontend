import Widget from './Widget'
import { Grid } from '@mui/material'
import NeedlePieChart from '../../Common/Chart/NeedlePieChart'
import WidgetLabeledValue from './WidgetLabeledValue'
import classes from './WidgetLabeledValue.module.scss'

const MetalArchivesImportWidget = () => {
  return (
    <Widget title={'Metal archives'}>
      <Grid container height={'95%'} spacing={0}>
        <Grid item xs={8}>
          <NeedlePieChart value={95} />
        </Grid>
        <Grid item xs={4} className={classes['labeled-value-wrapper']}>
          <WidgetLabeledValue value={'Today'} label={'Last import'} />
          <WidgetLabeledValue value={'Today'} label={'Last successful'} />
        </Grid>
      </Grid>
    </Widget>
  )
}

export default MetalArchivesImportWidget
